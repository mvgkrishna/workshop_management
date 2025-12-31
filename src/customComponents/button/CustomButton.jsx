import { Button } from "@mui/material";

const CustomButton = ({ children, variant, onClick }) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;
