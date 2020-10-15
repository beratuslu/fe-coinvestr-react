import React from "react";
import Button from "../../../../../ui/Antd/Button/Button";
import AvatarCard from "../AvatarCard/AvatarCard";
import Wrapper, { FollowerList, ListItem } from "./Followers.styles";

const Followers = ({ list }) => {
  console.log("Followers -> list", list);
  return (
    <Wrapper>
      <h3>
        <strong>{list.length}</strong> Followers
      </h3>
      <FollowerList>
        {list.length > 0 &&
          list.map((user) => (
            <ListItem key={`follower-key${user.id}`}>
              <AvatarCard
                profilePhoto={user.profilePhoto}
                fullName={`${user.name} ${user.lastName}`}
                userName={user.userName}
              />
              {/* <Button>Following</Button> */}
            </ListItem>
          ))}
      </FollowerList>
    </Wrapper>
  );
};

export default Followers;
