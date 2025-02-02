import { Modal as MuiModal } from "@mui/material";
import { forwardRef } from "react";

const ModalChildrenComponent = forwardRef(({ children }, ref) => {
  return (
    <div
      ref={ref}
      tabIndex={-1}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "8px",
        outline: "none",
        maxWidth: "90vw",
        maxHeight: "90vh",
        overflow: "auto",
      }}
    >
      {children}
    </div>
  );
});

ModalChildrenComponent.displayName = "ModalChildrenComponent";

function Modal(props) {
  const { children, ...rest } = props;

  return (
    <MuiModal {...rest}>
      <ModalChildrenComponent>{children}</ModalChildrenComponent>
    </MuiModal>
  );
}

export default Modal;
