import { useNavigate } from "react-router-dom";
import ProjectFrom from "../Project/ProjectForm";
import styles from "./NewProject.module.css";

function NewProject() {
  const navegar = useNavigate();

  function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project, { message: "Projeto criado com sucesso!" }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        navegar("/projects");
      })
      .catch((err) => console.log(err));

    // redirect
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços </p>
      <ProjectFrom handleSubmit={createPost} btnText="Criar projeto" />
    </div>
  );
}
export default NewProject;
