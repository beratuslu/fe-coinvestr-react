import React from "react";
import CardWrapper, { Avatar, Info } from "./AvatarCard.style";

const AvatarCard = ({
  className,
  avatar,
  name,
  username,
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
