import { Modal, SxProps } from "@mui/material";
import { ReactNode } from "react";
import AppBox from "../AppBox";
import AppButton from "../AppButton";
import { X } from "lucide-react";


interface AppModalProps {

    open: boolean;
    sx?: SxProps;
    children?: ReactNode;
    handleClose?: ()=> void
}

const AppModal = ({
    open = false,
    handleClose,
    children,
    sx
}: AppModalProps) => {

 

  return (
    <Modal
    hideBackdrop
    disableEnforceFocus 
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <AppBox sx={{...sx, outline:'none'}}>
        <AppButton sx={{position:'absolute', top:'17px', right:'3px',  '&:hover': {
              backgroundColor: 'transparent', // Removes the hover background color
            },}} handleClick={handleClose} >
            <X/>
        </AppButton>

       {children}
    </AppBox>
    </Modal>
  );
};

export default AppModal;
