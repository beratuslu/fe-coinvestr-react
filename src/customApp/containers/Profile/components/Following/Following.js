import React from "react";
import Button from "../../../../../ui/Antd/Button/Button";
import AvatarCard from "../AvatarCard/AvatarCard";
import Wrapper, { FollowingList, ListItem } from "./Following.styles";

const Following = (list) => {
  console.log("Following -> list", list);
  return (
    <Wrapper>
      <h3>
        <strong>{list.length}</strong> Following
      </h3>
      <FollowingList>
        {list.length > 0 &&
          list.map((follower) => (
            <ListItem key={`follower-key${follower.id}`}>
              <AvatarCard avatar={follower.avatar} name={follower.name} />
              <Button>Following</Button>
            </ListItem>
          ))}
      </FollowingList>
    </Wrapper>
  );
};

export default Following;
