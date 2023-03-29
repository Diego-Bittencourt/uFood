import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.toggleCart}></div>;
};

const Modal = (props) => {
  const modal = (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );

  return (
    <>
      {createPortal(
        <Backdrop toggleCart={props.toggleCart} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(modal, document.getElementById("overlay-root"))}
    </>
  );
};

export default Modal;
