
import React, { Component } from 'react';
import Typography from '@mui/material/Typography';

class Typography1 extends Component {
    state = {  } 
    render()
    
    { 
      console.log(this.props)

        return (
        <Typography variant="h3" style={this.props.styles}>
        {this.props.children}
      </Typography>
      );
    }
}
 
export default Typography1;