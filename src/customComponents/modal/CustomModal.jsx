import Modal from "@mui/material/Modal";

const CustomModal = ({ children, open, onClose }) => {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={onClose}>
      {children}
    </Modal>
  );
};

export default CustomModal;
