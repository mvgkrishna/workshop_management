import { Typography } from "@mui/material";

const CustomTypography = ({ children, sx }) => {
  return <Typography sx={sx}>{children}</Typography>;
};

export default CustomTypography;
