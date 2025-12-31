import CustomTypography from "../../customComponents/typography/CustomTypography";
import logo from "../../assets/logo smnl.png";

import "./SideNav.css";

const SideNav = () => {
  return (
    <div>
      <div className="logo_Container">
        <img
          src={logo}
          alt="logo"
          style={{ width: "300px", padding: "15px" }}
        />
      </div>
      <div className="nav_container">
        <CustomTypography>Staff & Users</CustomTypography>
        <CustomTypography>Staff & Users</CustomTypography>
        <CustomTypography>Staff & Users</CustomTypography>
        <CustomTypography>Staff & Users</CustomTypography>
        <CustomTypography>Staff & Users</CustomTypography>
        <CustomTypography>Staff & Users</CustomTypography>
      </div>
    </div>
  );
};
export default SideNav;
