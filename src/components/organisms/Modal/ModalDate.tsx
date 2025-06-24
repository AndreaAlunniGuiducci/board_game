import React, { useState } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (date: string) => void;
}

const ModalDate: React.FC<ModalProps> = ({ isOpen, onClose, onSave }) => {
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleSave = () => {
    if (selectedDate) {
      onSave(selectedDate);
      onClose();
    } else {
      alert("Per favore, seleziona una data!");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Scegli una data</h2>
        <p>Seleziona una data per giocare al gioco:</p>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className={styles.datePicker}
        />
        <div className={styles.actions}>
          <button onClick={handleSave} className={styles.saveButton}>
            Salva
          </button>
          <button onClick={onClose} className={styles.cancelButton}>
            Annulla
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDate;
