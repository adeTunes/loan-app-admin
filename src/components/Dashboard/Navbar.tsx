import { Icon } from "@iconify/react";
import React, { useState } from "react";
import navbarData from "../../layout/navbar";
import Briefcase from "./assets/briefcase 1.svg";
import Home from "./assets/home 1.svg";

function Navbar() {
  const [selected, setSelected] = useState("Users");

  return (
    <nav className="navigation">
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
              <span className="title" style={{ opacity: 0.6 }}>
                {item.title}
              </span>
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
                      <img
                        style={{ opacity: selected === el.title ? 1 : 0.6 }}
                        src={el.icon}
                        alt=""
                      />
                      <span
                        style={{
                          opacity: selected === el.title ? 1 : 0.6,
                        }}
                      >
                        {el.title}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
