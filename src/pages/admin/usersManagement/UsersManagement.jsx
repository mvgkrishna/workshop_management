import CustomDatagrid from "../../../customComponents/datagrid/CustomDatagrid";
import CustomPaper from "../../../customComponents/paper/CustomPaper";
import CustomTypography from "../../../customComponents/typography/CustomTypography";
import SideNav from "../../../layout/sidenav/SideNav";
import { rows, columns } from "../../../mockData/usersGridData";
import CustomTextField from "../../../customComponents/textfield/CustomTextfield";
import CustomButton from "../../../customComponents/button/CustomButton";
import SearchIcon from "@mui/icons-material/Search";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

import "./UserManagement.css";
import { InputAdornment } from "@mui/material";

const UserManagement = () => {
  return (
    <div className="UserManagement_container">
      <SideNav />
      <CustomPaper sx={{ flexGrow: "1" }}>
        <div className="header_options">
          <CustomTypography
            calssName="heading"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "24px",
              fontWeight: 800,
              color: "#1f2937",
              padding: "17px",
            }}
          >
            User Management
          </CustomTypography>
          <div className="usermanagement_searchOptions">
            <CustomTextField
              placeholder="search..."
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                },
              }}
            ></CustomTextField>
            <CustomButton variant="contained">Add user</CustomButton>
          </div>
        </div>
        <CustomDatagrid
          box_sx={{
            height: "calc(100vh - 70px)",
            flexGrow: "1",
          }}
          rows={rows}
          columns={columns}
          pageSize={15}
          pageSizeOptions={[5]}
          checkboxSelection={false}
          disableRowSelectionOnClick
        />
      </CustomPaper>
    </div>
  );
};

export default UserManagement;
