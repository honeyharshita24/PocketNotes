import React, { Component } from "react";
import Avatar from "@mui/material/Avatar";

class AvatarIcon extends Component {
  render() {
    const { name, color } = this.props;
    return (
      <Avatar {...stringAvatar(name)} style={{ backgroundColor: color }} />
    );
  }
}

function stringAvatar(name) {
  const nameParts = name.split(" ");
  let initials;

  if (nameParts.length === 1) {
    // If there is only one word, take the first letter
    initials = nameParts[0][0];
  } else {
    // If there are multiple words, take the first letter of the first two words
    initials = `${nameParts[0][0]}${nameParts[1][0]}`;
  }

  return {
    children: initials,
  };
}

export default AvatarIcon;
