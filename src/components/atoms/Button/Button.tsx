import { ButtonProps as BootsrtapButtonProps } from "react-bootstrap";
import styles from "./Button.module.scss";
interface ButtonProps extends BootsrtapButtonProps {
  theme?: "blue" | "green";
}

const Button = ({
  children,
  className,
  theme = "blue",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={styles.button + " " + styles[theme] + " " + className}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
