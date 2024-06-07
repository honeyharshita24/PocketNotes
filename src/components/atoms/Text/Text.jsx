
import React, { Component } from 'react';
import Typography from '@mui/material/Typography';

class Typography1 extends Component {
    state = {  } 
    render()
    
    { 
        const {styles, variant} = this.props 
        
        return (
        <Typography variant= {variant} style={styles}>
        {this.props.children}
      </Typography>
      );
    }
}
 
export default Typography1;