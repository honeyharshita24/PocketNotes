import React, { Component } from "react";
import { Card, CardContent, Box } from "@mui/material";
import Text from "../../atoms/Text/Text";

class NoteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creationDate: new Date(),
    };
  }

  render() {
    const { creationDate } = this.state;
    const formattedDate = creationDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
      const formattedTime = creationDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });

    return (
      <Card sx={{ width: "95%", position: "relative", marginTop: 2 }}>
        <CardContent>
          <Text variant="body1">{this.props.content}</Text>
        </CardContent>
        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            right: 10,
            fontSize: 12,
            color: "gray",
          }}
        >
          <Text variant='subtitle1'>
            {formattedDate} {formattedTime}
          </Text>
        </Box>
      </Card>
    );
  }
}

export default NoteCard;
