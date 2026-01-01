import { TextField } from "@mui/material";

const CustomTextField = ({
  id,
  label,
  variant,
  fullWidth,
  onChange,
  name,
  value,
  slotProps,
  placeholder,
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
      slotProps={slotProps}
      placeholder={placeholder}
    />
  );
};

export default CustomTextField;
