import CustomDatagrid from "../../../customComponents/datagrid/CustomDatagrid";
import SideNav from "../../../layout/sidenav/SideNav";

import "./UserManagement.css";

const UserManagement = () => {
  return (
    <div className="UserManagement_container">
      <SideNav />
      <CustomDatagrid />
    </div>
  );
};

export default UserManagement;
