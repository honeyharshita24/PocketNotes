import React, { Component } from 'react';
import Avatar1 from '../../atoms/Avatar/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

class GroupName extends Component {
  render() {
    const { name } = this.props;
    return (
      <Box display="flex" alignItems="center">
        <Avatar1 name={name}/>
        <Typography variant="h6" style={{ marginLeft: 8 }}>{name}
        </Typography>
      </Box>
    );
  }
}

export default GroupName;
