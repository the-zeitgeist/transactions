import { ModalBase } from "../modalBase/modalBase";

export const ErrorModal = ({ message }) => (
  <ModalBase title="Operación fallida" message={message} />
);
