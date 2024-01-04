import styles from "./Project.module.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../layout/Loading";
import Container from "../layout/Container";
import Message from "../layout/Message";
import ProjectForm from "../Project/ProjectForm";

function Project() {
  const { id } = useParams();

  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();
  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
        })
        .catch((err) => console.log);
    }, 5000);
  }, [id]);

  function editPost(project) {
    // budget validation
    if (project.budget < project.cost) {
      setMessage("O orçamento  não pde ser nemmor que o custo do projeto!");
      setType("error");
      return false;
    }
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(false);
        setMessage("Projeto atualizado!");
        setType("success");
      })
      .catch((err) => console.log(err));
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className={styles.details_container}>
              <h1>Projeto: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar projeto" : "Fechar"}
              </button>
              {!showProjectForm ? (
                <div className={styles.Project_info}>
                  <p>
                    <span>Categoria:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Total de Orçamento</span> R${project.budget}
                  </p>
                  <p>
                    <span>Total Ultilizado</span> R${project.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.Project_info}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir edicão"
                    projectData={project}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Project;

// import styles from "./Project.module.css";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Loading from "../layout/Loading";
// import Container from "../layout/Container";

// function Project() {
//   const { id } = useParams();

//   const [project, setProject] = useState(null);
//   const [showProjectForm, setShowProjectForm] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       fetch(`http://localhost:5000/projects/${id}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//         .then((resp) => resp.json())
//         .then((data) => {
//           setProject(data);
//         })
//         .catch((err) => console.log);
//     }, 5000);
//   }, [id]);

//   function toggleProjectForm() {
//     setShowProjectForm(!showProjectForm);
//   }

//   return (
//     <>
//       {project && project.name ? (
//         <div className={styles.Project.name}>
//           <Container customClass="column">
//             <div>
//               <h1>Projeto: {project.name}</h1>
//               <button onClick={toggleProjectForm}>
//                 {!showProjectForm ? "Editar projeto" : "Fechar"}
//               </button>
//               {!showProjectForm ? (
//                 <div>
//                   <p>
//                     <span>Categoria:</span> {project.category.name}
//                   </p>
//                   <p>
//                     <span>Total de Orçamento</span> R${project.budget}
//                   </p>
//                   <p>
//                     <span>Total Ultilizado</span> R${project.cost}
//                   </p>
//                 </div>
//               ) : (
//                 <div>
//                   <p>detalhes do projeto</p>
//                 </div>
//               )}
//             </div>
//           </Container>
//         </div>
//       ) : (
//         <Loading />
//       )}
//     </>
//   );
// }

// export default Project;
