import { Typography } from "@mui/material";
import CustomPaper from "../../customComponents/paper/CustomPaper";
import CustomTypography from "../../customComponents/typography/CustomTypography";
import CustomTextField from "../../customComponents/textfield/CustomTextfield";
import CustomButton from "../../customComponents/button/CustomButton";

import "./LoginPage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelForm,
  setFields,
  submitForm,
} from "../../redux/slices/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();

  const { username, password, error } = useSelector((state) => state.auth);
  const errorStatus = error.status;

  const handleChande = (e) => {
    const { name, value } = e.target;
    dispatch(setFields({ name, value }));
  };

  const handleSubmit = () => {
    console.log("clicked");

    dispatch(submitForm());
  };

  const handleCancel = () => {
    dispatch(cancelForm());
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f6fc",
      }}
    >
      <CustomPaper
        sx={{
          width: "448px",
          height: "400px",
          padding: "32px",
          borderRadius: "20px",
        }}
      >
        <CustomTypography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "24px",
            fontWeight: 900,
            color: "#1f2937",
          }}
        >
          Workshop Management
        </CustomTypography>

        {errorStatus && <p>{error.message}</p>}

        <div className="form-container">
          <CustomTextField
            id="outlined-basic"
            label="username"
            name="username"
            variant="outlined"
            onChange={(e) => {
              handleChande(e);
            }}
            value={username}
            fullWidth
          />
          <CustomTextField
            id="outlined-basic"
            label="password"
            name="password"
            variant="outlined"
            onChange={(e) => {
              handleChande(e);
            }}
            value={password}
            fullWidth
          />

          <div className="loginForm-buttons">
            <CustomButton variant="contained" onClick={handleSubmit}>
              Login
            </CustomButton>
            <CustomButton variant="contained" onClick={handleCancel}>
              Cancel
            </CustomButton>
          </div>
        </div>
      </CustomPaper>
    </div>
  );
};

export default LoginPage;
