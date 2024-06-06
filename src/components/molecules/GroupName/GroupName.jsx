import React, { Component } from 'react';
import Avatar1 from '../../atoms/AvatarIcon/AvatarIcon';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

class GroupName extends Component {
  handleClick = () => {
    // Define what happens when the card is clicked
    console.log('Card clicked');
  };

  render() {
    const { name } = this.props;
    return (
        <Box display="flex" alignItems="center" onClick={this.handleClick}>
          <Avatar1 name={name} />
          <Typography variant="h6" style={{ marginLeft: 24 }}>{name}</Typography>
        </Box>
    );
  }
}

export default GroupName;
