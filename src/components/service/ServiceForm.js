import { useState } from "react";

import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";

import styles from "../Project/ProjectForm.module.css";

function ServiceForm({ handleSubmit, btnText, projectData }) {
  const [service, setService] = useState({});

  function submit(e) {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placerholder="Insira o nome do serviço"
        handleOnchange={handleChange}
      />
      <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placerholder="Insira o valor total"
        handleOnchange={handleChange}
      />
      <Input
        type="text"
        text="Descrição  do serviço"
        name="description"
        placerholder="Descreva o serviço"
        handleOnchange={handleChange}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ServiceForm;
