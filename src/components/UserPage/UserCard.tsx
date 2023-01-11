import { Icon } from "@iconify/react";
import { useState } from "react";
import UserPics from "./assets/user-pics.png";

function UserCard({userId, fullName, accountBalance, accountNumber}) {
  const [selected, setSelected] = useState(0);

  const navList = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];

  return (
    <div className="userCard">
      <div className="profileCard">
        <img src={UserPics} alt="" />
        <div className="userNameId">
          <p className="name">{fullName}</p>
          <p className="userId">{userId}</p>
        </div>
        <hr className="divider" />
        <div className="ratingGroup">
          <p className="ratingHeading">User's Tier</p>
          <div className="rating">
            <Icon icon="material-symbols:star" color="#E9B200" />
            <Icon icon="ic:sharp-star-outline" color="#E9B200" />
            <Icon icon="ic:sharp-star-outline" color="#E9B200" />
          </div>
        </div>
        <hr className="divider" />
        <div className="accountGroup">
          <p className="balance">{accountBalance}</p>
          <p className="accountNumber">{accountNumber}/Providus Bank</p>
        </div>
      </div>
      <ul className="userDetailsnavbar">
        {navList.map((item, idx) => (
          <li
          key={idx}
            style={{
              fontFamily: selected === idx ? "Work Sans" : "SF Compact Text",
              borderBottom:
                selected === idx ? "1px solid #39CDCC" : "1px solid white",
              color: selected === idx ? "#39CDCC" : "#000",
            }}
            onClick={() => setSelected(idx)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserCard;
