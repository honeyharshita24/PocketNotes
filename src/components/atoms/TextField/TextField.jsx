import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 24, 
    '& fieldset': {
      borderColor: '#cccccc', // Default border color
    },
    '&:hover fieldset': {
      borderColor: '#cccccc', // Hover border color
    },
    '&.Mui-focused fieldset': {
      borderColor: '#cccccc', // Focused border color
    },
  },
}));

class OutlinedTextField extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
        <CustomTextField
          variant="outlined"
          value={value}
          placeholder='Enter group name'
          onChange={onChange}
          style={{ width: '435px', height:"51px"}}
        />
    );
  }
}

export default OutlinedTextField;
