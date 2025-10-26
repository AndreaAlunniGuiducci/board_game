import styles from "./Input.module.scss";
import Form from "react-bootstrap/Form";
import { FormProps, FormControlProps } from "react-bootstrap";
import { ReactNode, useState } from "react";
import { Eye, EyeSlash } from "react-bootstrap-icons";

interface IputProps extends Omit<FormProps & FormControlProps, ""> {
  label?: ReactNode;
  formText?: ReactNode;
}

const Input = ({ label, formText, ...props }: IputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.input}>
      <Form.Label className={styles.label} {...props}>
        {label}
      </Form.Label>
      {props.type !== "password" ? (
        <Form.Control {...props} />
      ) : (
        <span className={styles.passwordInput}>
          <Form.Control {...props} type={showPassword ? "text" : "password"} />
          {showPassword ? (
            <Eye
              onClick={() => setShowPassword(!showPassword)}
              className={styles.passwordEye}
            />
          ) : (
            <EyeSlash
              onClick={() => setShowPassword(!showPassword)}
              className={styles.passwordEye}
            />
          )}
        </span>
      )}
      <Form.Text>{formText}</Form.Text>
    </div>
  );
};

export default Input;
