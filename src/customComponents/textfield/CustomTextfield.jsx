import { TextField } from "@mui/material";

const CustomTextField = ({
  id,
  label,
  variant,
  fullWidth,
  onChange,
  name,
  value,
}) => {
  return (
    <TextField
      id={id}
      name={name}
      label={label}
      value={value}
      variant={variant}
      fullWidth={fullWidth}
      onChange={onChange}
    />
  );
};

export default CustomTextField;
