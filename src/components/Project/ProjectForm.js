import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

import styles from "./ProjectForm.module.css";

function ProjectForm({ btnText }) {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nomedo projeto"
        name="name"
        placerholder="Insira o none do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placerholder="Insira o orçamento total"
      />

      <Select name="category_d" text="Selecione a categoria" />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
