import "./App.css";
import React, { useRef, useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";
import Router from "./routes/routes";

import { FaList, FaRegHeart, FaUserGraduate, FaUserTie } from "react-icons/fa";
import { FiHome, FiLogOut, FiAlignJustify } from "react-icons/fi";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { ImUserTie } from "react-icons/im";
import { RiPencilLine, RiWallet3Line } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

import Header from "./Components/Header/Header";
import "react-pro-sidebar/dist/css/styles.css";

function App() {
  const { pathname } = useLocation();

  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const closemune = useRef();

  return (
    <>
      <Header />
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="hamburger">
              <div className="closemenu" onClick={menuIconClick}>
                <FaList style={{ ...(menuCollapse && { display: "block" }) }} />
              </div>
              <div className="closemenur" onClick={menuIconClick}>
                <FaList style={{ ...(menuCollapse && { display: "block" }) }} />
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square" className="hiddin">
              <MenuItem
                className={`menuItems  ${
                  pathname === "/" ? "default_active" : ""
                }`}
              >
                <NavLink className="menu-links" to={"/"}>
                  <i class="bx bxs-dashboard"></i> Dashboard
                </NavLink>
              </MenuItem>
              <SubMenu
                style={{ paddingLeft: "-10px" }}
                title={"Registration"}
                icon={<i class="bx bx-credit-card-front"></i>}
              >
                <MenuItem
                  className={`menuItem ${
                    pathname === "/Registration_user" ? "active" : ""
                  }`}
                >
                  <NavLink className="menu-links" to={"/Registration_user"}>
                    Student
                  </NavLink>{" "}
                </MenuItem>
                <MenuItem
                  className={`menuItem ${
                    pathname === "/Registration_teacher" ? "active" : ""
                  }`}
                >
                  <NavLink className="menu-links" to={"/Registration_teacher"}>
                    Teacher
                  </NavLink>
                </MenuItem>
                <MenuItem
                  className={`menuItem ${
                    pathname === "/Registration_worker" ? "active" : ""
                  }`}
                >
                  <NavLink className="menu-links" to={"/Registration_worker"}>
                    Worker
                  </NavLink>
                </MenuItem>
              </SubMenu>
              <MenuItem
                className={`menuItems ${
                  pathname === "/List_Student" ? "active" : ""
                }`}
              >
                <NavLink className="menu-links" to={"/List_Student"}>
                  <i class="bx bx-user"></i>List of Students
                </NavLink>
              </MenuItem>
              <MenuItem
                className={`menuItems ${
                  pathname === "/List_Teacher" ? "active" : ""
                }`}
              >
                <NavLink className="menu-links" to={"/List_Teacher"}>
                  <i class="bx bx-user-voice"></i>List of Teachers
                </NavLink>
              </MenuItem>
              <MenuItem
                className={`menuItems ${
                  pathname === "/List_Worker" ? "active" : ""
                }`}
              >
                <NavLink className="menu-links" to={"/List_Worker"}>
                  <i class="bx bxs-user-badge"></i> List of Wokers
                </NavLink>
              </MenuItem>
              <MenuItem
                className={`menuItems ${
                  pathname === "/Payment" ? "active" : ""
                }`}
              >
                <NavLink className="menu-links" to={"/Payment"}>
                  <i class="bx bx-wallet-alt"></i>Payment
                </NavLink>
              </MenuItem>
              <MenuItem
                className={`menuItems ${pathname === "/Group" ? "active" : ""}`}
              >
                <NavLink className="menu-links" to={"/Group"}>
                  <i class="bx bx-group"></i>Group
                </NavLink>
              </MenuItem>
              <MenuItem
                className={`menuItems ${
                  pathname === "/Courses" ? "active" : ""
                }`}
              >
                <NavLink className="menu-links" to={"/Courses"}>
                  <i class="bx bxs-graduation"></i>Crouses
                </NavLink>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square" ref={closemune}>
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
        <div className="sidebar-body">
          <Router menuCollapse={menuCollapse} />
        </div>
      </div>
    </>
  );
}

export default App;
