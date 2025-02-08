import React from "react";
import styles from "./Tag.module.scss";

interface TagProps {
  label: string;
  color?: string;
  onClick?: () => void;
}

const Tag: React.FC<TagProps> = ({ label, color = "#1abc9c", onClick }) => {
  return (
    <span
      className={styles.tag}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {label}
    </span>
  );
};

export default Tag;
