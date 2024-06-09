import React, { Component } from "react";
import { TextField, Box, IconButton, InputAdornment } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

class NoteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteContent: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ noteContent: event.target.value });
  };

  handleSend = () => {
    const { noteContent } = this.state;
    const { onNoteCreate } = this.props;
    if (noteContent.trim()) {
      onNoteCreate(noteContent);
      this.setState({ noteContent: "" });
    } else {
      alert("Please enter some content.");
    }
  };

  render() {
    const { noteContent } = this.state;
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%',position:'absolute', bottom:'20px' }}>
        <TextField
          value={noteContent}
          onChange={this.handleInputChange}
          placeholder="Enter your note here..."
          fullWidth
          multiline
          rows={4}
          sx={{ border: "20px solid #001F8B", borderRadius: 4 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" sx={{ paddingTop: 6 }}>
                <IconButton
                  color="primary"
                  disabled={!noteContent.trim()}
                  onClick={this.handleSend}
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    );
  }
}

export default NoteInput;
