import { useLocation } from "react-router-dom";

import Message from "../layout/Message";

import styles from "./Projects.module.css";

import LinkButton from "../layout/LinkButton";

import Container from "../layout/Container";

function Projects() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        <p>projetos...</p>
      </Container>
    </div>
  );
}
export default Projects;
