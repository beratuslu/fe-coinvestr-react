import React from "react";
import CardWrapper, { Avatar, Info } from "./AvatarCard.style";

const AvatarCard = ({
  className,
  avatar,
  name,
  lastName,
  userName,
  openUploadWidget,
  isSelfProfile,
}) => {
  return (
    <CardWrapper className={`avatar-card ${className ? className : ""}`}>
      {isSelfProfile && (
        <i
          onClick={() => {
            openUploadWidget("profilePhoto");
          }}
          className="ion-camera"
        />
      )}
      {avatar && (
        <Avatar className="avatar isoIconWrapper">
          <img src={avatar} alt={name} />
        </Avatar>
      )}
      {name || userName ? (
        <Info className="info">
          {name && <h3 className="name">{`${name} ${lastName}`}</h3>}
          {userName && <p className="username">{userName}</p>}
        </Info>
      ) : (
        ""
      )}
    </CardWrapper>
  );
};

export default AvatarCard;
