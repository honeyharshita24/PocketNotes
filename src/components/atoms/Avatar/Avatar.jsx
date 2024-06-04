import React, { Component } from 'react';
import Avatar from '@mui/material/Avatar';

class Avatar1 extends Component { 
    render() { 
        const {name}= this.props;
        return <Avatar {...stringAvatar(name)}/>;
    }
}
function stringAvatar(name) {
    return {
    //   sx: {
    //     bgcolor: stringToColor(name),
    //   },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
 
export default Avatar1;