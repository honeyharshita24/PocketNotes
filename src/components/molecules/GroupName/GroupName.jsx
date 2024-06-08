import React, { Component } from 'react';
import Avatar1 from '../../atoms/AvatarIcon/AvatarIcon';
import Box from '@mui/material/Box';
import Text from '../../atoms/Text/Text';

class GroupName extends Component {
  handleClick = () => {
    // Define what happens when the card is clicked
    console.log('Card clicked');
  };

  render() {
    const { name, color } = this.props;
    return (
        <Box display="flex" alignItems="center" onClick={this.handleClick}>
          <Avatar1 name={name} color={color} />
          <Text variant="h3" style={{ marginLeft: 24 }}>{name}</Text>
        </Box>
    );
  }
}

export default GroupName;
