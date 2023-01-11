import React from "react";

interface Props {
  className: string;
  heading: string;
  info: Array<{
    heading: string;
    info: string;
  }>;
}

function UserInformation({ className, heading, info }: Props) {
  return (
    <div className="info">
      <h1>{heading}</h1>
      <div className={className}>
        {info.map((item, idx) => (
          <div key={idx} className="detailsGroup">
            <p className="detailHeading">{item.heading}</p>
            <p className="detailInfo">{item.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserInformation;
