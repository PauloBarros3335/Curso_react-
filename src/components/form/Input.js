import styles from "./Input.module.css";

function Input({ type, text, name, placerholder, handleOnchange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placerholder}
        onChange={handleOnchange}
        value={value}
      />
    </div>
  );
}
export default Input;
