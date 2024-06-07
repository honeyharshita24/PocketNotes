import React, { Component } from 'react';
import Avatar1 from '../../atoms/AvatarIcon/AvatarIcon';
import Box from '@mui/material/Box';
import Text from '../../atoms/Text/Text';
import { ThemeProvider } from '@emotion/react';
import theme from '../../../theme';
class GroupName extends Component {
  handleClick = () => {
    // Define what happens when the card is clicked
    console.log('Card clicked');
  };

  render() {
    const { name } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Box display="flex" alignItems="center" onClick={this.handleClick}>
          <Avatar1 name={name} />
          <Text variant="h3" styles={{ marginLeft: 24 }}>{name}</Text>
        </Box>
        </ThemeProvider>
    );
  }
}

export default GroupName;
