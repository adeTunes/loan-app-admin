import { Button, Menu } from "@mantine/core";
import { Icon } from "@iconify/react";
import Icons from "./Icon";
import { Link, useNavigate } from "react-router-dom";

function VIewOptions({ rowDetails }: any) {
  return (
    <Menu
      styles={{
        dropdown: {
          background: "#FFFFFF",
          border: "1px solid rgba(84, 95, 125, 0.04)",
          boxShadow: "3px 5px 20px rgba(0, 0, 0, 0.04)",
          borderRadius: "4px",
          right: "57px !important",
          left: "auto !important",
          width: "165px !important",
        },
        itemLabel: {
          fontSize: "14px",
          lineHeight: "14px",
          letterSpacing: "0em",
        },
      }}
      shadow="md"
      width={200}
    >
      <Menu.Target>
        <Icon icon="iwwa:option" style={{ cursor: "pointer" }} />
      </Menu.Target>

      <Menu.Dropdown>
        <Link to={`/users/${rowDetails.id}`}>
          <Menu.Item icon={<Icon color="#545F7D" icon="ic:outline-remove-red-eye" />}>
            View Details
          </Menu.Item>
        </Link>
        <Menu.Item icon={<img src={Icons.BlacklistUser} alt="" />}>
          Blacklist User
        </Menu.Item>
        <Menu.Item icon={<img src={Icons.ActivateUser} alt="" />}>
          Activate User
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default VIewOptions;
