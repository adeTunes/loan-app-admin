import { useState } from "react";
import { Drawer, Group } from "@mantine/core";
import { Icon } from "@iconify/react";
import navbarData from "../../layout/navbar";
import Briefcase from "./assets/briefcase 1.svg";
import Home from "./assets/home 1.svg";
import { Link } from "react-router-dom";

function ShowNav({ screen }) {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState("Users");

  return (
    <>
      <Drawer
        styles={{
          drawer: {
            display: "grid",
            gridTemplateRows: "auto 1fr",
            overflow: "auto",
          },
          body: {
            height: "100%",
            overflow: "auto",
          },
        }}
        className="containerDrawer"
        opened={opened}
        onClose={() => setOpened(false)}
        size="sm"
      >
        <Link to="/login">
          <div
            style={{
              display: "flex",
              fontSize: "18px",
              paddingInline: "1.5rem",
              color: "#213F7D",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <p>Logout</p>
            <Icon
              style={{ cursor: "pointer" }}
              height={24}
              width={24}
              color="#213F7D"
              icon="mdi-light:logout"
            />
          </div>
        </Link>
        <nav className="navigationDrawer">
          <p className="dropdown">
            <span>
              <img src={Briefcase} alt="" /> Switch Organization
            </span>
            <Icon icon="ic:twotone-arrow-drop-down" />
          </p>
          <div className="navArea">
            <p className="navHeading">
              <img src={Home} alt="" />
              <span>Dashboard</span>
            </p>
            <ul className="navParentList">
              {navbarData.map((item, idx) => (
                <li key={idx} className="listHeading">
                  <span className="title">{item.title}</span>
                  <ul className="navChildrenList">
                    {item.children.map((el, idx) => (
                      <li key={idx} className="eachList">
                        <span
                          style={{
                            background:
                              selected === el.title ? "#39cdcd17" : "none",
                            borderLeft:
                              selected === el.title
                                ? "3px solid #39CDCC"
                                : "3px solid white",
                          }}
                          onClick={() => setSelected(el.title)}
                          className="listGroup"
                        >
                          <img src={el.icon} alt="" />
                          <span>{el.title}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </Drawer>

      <Group
        className={screen === "mobile" ? "drawerMobile" : ""}
        position="center"
      >
        <Icon
          onClick={() => setOpened(true)}
          className="navDrawer"
          color="#213f7d"
          icon="mi:menu"
          height="30px"
        />
      </Group>
    </>
  );
}

export default ShowNav;
