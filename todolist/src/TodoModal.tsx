import React from "react";
import { Modal } from "react-bootstrap";

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

type todoModalProps = {
  show: boolean;
  todo: Todo | null;
  handleClose: () => void;
};

const TodoModal: React.FC<todoModalProps> = ({ show, todo, handleClose }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Title>Modal Heading</Modal.Title>
      </Modal>
      <Modal.Body>{todo?.text}</Modal.Body>
    </div>
  );
};

export default TodoModal;
