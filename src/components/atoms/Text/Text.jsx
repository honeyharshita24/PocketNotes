import React, { Component } from 'react';
import Typography from '@mui/material/Typography';

class Text extends Component {
    render() {
        const { variant, styles, children } = this.props;
        return (
            <Typography variant={variant} style={styles}>
                {children}
            </Typography>
        );
    }
}

export default Text;
