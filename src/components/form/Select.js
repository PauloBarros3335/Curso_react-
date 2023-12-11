import styles from "./Select.module.css";

function Select({ text, name, options, handleOnchange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <Select name={name} id={name}>
        <options>Selecione uma opção</options>
      </Select>
    </div>
  );
}

export default Select;
