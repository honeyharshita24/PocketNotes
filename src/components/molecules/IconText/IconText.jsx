import React, { Component } from 'react';
import LockIcon from '../../atoms/lockIcon/lockIcon';
import Text from '../../atoms/Text/Text';
import Box from '@mui/material/Box';

class IconText extends Component {

    state = {  } 
    render() { 
        return ( <Box display="flex" alignItems="center">
                  <LockIcon/>
                  <Text styles={{fontSize :'22px' ,fontWeight : 400}} >end-to-end encrypted</Text>
                </Box>);
    }
}

export default IconText;