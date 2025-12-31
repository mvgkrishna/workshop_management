import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const CustomPaper = ({ children, sx, elevation, ...props }) => {
  return (
    <Paper elevation={elevation} sx={sx} {...props}>
      {children}
    </Paper>
  );
};

export default CustomPaper;
