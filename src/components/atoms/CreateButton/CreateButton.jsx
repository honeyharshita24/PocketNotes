import React, { Component } from "react";
import Button from "@mui/material/Button";
import Text from "../Text/Text";

class CreateButton extends Component {
  state = {};
  render() {
    return (
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#001F8B",
          textTransform: "none",
          width: "154px",
          height: "38px",
          borderRadius: "12px",
        }}
      >
        <Text uppercase={false} variant="h3">
          Create
        </Text>
      </Button>
    );
  }
}

export default CreateButton;
