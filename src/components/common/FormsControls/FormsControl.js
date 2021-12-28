import s from "./FormsControl.module.css";

export const Input = ({ input, meta, ...props }) => {
  let hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <input {...props} {...input} />
      <div>{hasError && <span>{meta.error}</span>}</div>
    </div>
  );
};
