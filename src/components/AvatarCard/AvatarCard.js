import React from "react";
import CardWrapper, { Avatar, Info } from "./AvatarCard.style";

const AvatarCard = ({ className, avatar, name, username, handleClick }) => {
  return (
    <CardWrapper className={`avatar-card ${className ? className : ""}`}>
      {avatar && (
        <Avatar className="avatar isoIconWrapper">
          <img src={avatar} alt={name} />

          <i
            onClick={handleClick}
            className="ion-camera"
            style={{
              fontSize: "24px",
              color: "#323332",
              lineHeight: 1,
              position: "absolute",
              bottom: "15px",
              right: "8px",
              cursor: "pointer",
            }}
          />
        </Avatar>
      )}
      {name || username ? (
        <Info className="info">
          {name && <h3 className="name">{name}</h3>}
          {username && <p className="username">{username}</p>}
        </Info>
      ) : (
        ""
      )}
    </CardWrapper>
  );
};

export default AvatarCard;
