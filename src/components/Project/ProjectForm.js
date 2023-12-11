import Input from "../form/Input";
import Select from "../form/Select";

import styles from "./ProjectForm.module.css";

function ProjectForm() {
  return (
    <form>
      <div>
        <input type="text" placeholder="Isira o no nome do projeto" />
      </div>

      <div>
        <input type="number" placeholder="Insira o orçamento total" />
      </div>

      <div>
        <select name="category_id">
          <option disabled>Selecione a categoria</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Criar projeto" />
      </div>
    </form>
  );
  // <form className={styles.form}>
  //   <Input
  //     type="text"
  //     text="Nome do projeto"
  //     name="name"
  //     placeholder="Insira o nome do projeto"
  //   />
  //   <Input
  //     type="number"
  //     text="Orçamento do projeto"
  //     name="budget"
  //     placeholder="Insira o orçanento total"
  //   />
  //   <Select name="category_id" text="Selecione a categoria" />
  //   <div>
  //     <input type="submit" value="Criar projeto" />
  //   </div>
  // </form>
}

export default ProjectForm;
