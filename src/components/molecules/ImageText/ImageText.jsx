import React, { Component } from "react";
import Text from "../../atoms/Text/Text";
import HomePageImage from "../../atoms/HomePageImg/HomePageImg";
import IconText from "../IconText/IconText";

class ImageText extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HomePageImage />
        </div>
        <Text styles={{ fontSize: "50px", fontWeight: 700 }}>Pocket Notes</Text>
        <Text styles={{ fontSize: "22px", fontWeight: 500, maxWidth: "660px", paddingTop:'20px' }} >
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </Text>
        <div style={{ position: "absolute", bottom: "2%" }}>
          <IconText />
        </div>
      </div>
    );
  }
}

export default ImageText;
