import React from "react";

interface Props {
  icon: any;
  name: string;
  stats: string;
  bg: string;
}

function StatsCard({ icon, name, stats, bg }: Props) {
  return (
    <div className="statsCard">
      <div style={{ display: "flex" }}>
        <span
          style={{
            background: bg,
            borderRadius: "100%",
            padding: "7px",
          }}
        >
          <img
            style={{
              height: "12px",
              width: "12px",
            }}
            src={icon}
            alt=""
          />
        </span>
      </div>
      <p className="cardHeading">{name}</p>
      <p className="cardStats">{stats}</p>
    </div>
  );
}

export default StatsCard;
