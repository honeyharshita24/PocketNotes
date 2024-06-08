import React, { Component } from 'react';
import LockIcon from '../../atoms/lockIcon/lockIcon';
import Typography1 from '../../atoms/Text/Text';
import Box from '@mui/material/Box';

class IconText extends Component {
    
    state = {  } 
    render() { 
        return ( <Box display="flex" alignItems="center">
                  <LockIcon/>
                  <Typography1 styles={{fontSize :'22px' ,fontWeight : 400}} >end-to-end encrypted</Typography1>
                </Box>);
    }
}
 
export default IconText;