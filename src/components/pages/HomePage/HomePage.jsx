import React, { Component } from "react";
import Text from "../../atoms/Text/Text";
import GroupName from "../../molecules/GroupName/GroupName";
import AddIcon from "../../atoms/AddCircleIcon/AddCircleIcon";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CreateButton from "../../atoms/CreateButton/CreateButton";
import OutlinedTextField from "../../atoms/TextField/TextField";
import ColorPicker from "../../organisms/ColorPicker/ColorPicker";
class HomePage extends Component {
  state = {
    isModalOpen: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ isMobile: window.innerWidth <= 768 });
  };

  pageStyles = {
    splitScreen: {
      display: "flex",
      flexDirection: "row",
      height: "100vh",
    },
    leftPane: {
      width: "20%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative", // Add relative positioning
    },
    textContainer: {
      width: "100%",
      textAlign: "center",
      paddingTop: "66px",
    },
    namesContainer: {
      width: "100%",
      textAlign: "left",
      paddingLeft: "20px",
      marginTop: "30px", // Space between the title and the list
    },
    nameItem: {
      marginBottom: "30px", // Space between each list item
    },
    rightPane: {
        width: "80%",
        height: "100vh",
        backgroundColor: "#DAE5F5",
      },
    addIcon: {
      position: "absolute",
      bottom: "20px",
      right: "20px",
      cursor: "pointer",
    },
    modal: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "background.paper",
        padding: 4,
        outline: "none",
        width: "90%", 
        maxWidth: "740px", 
        height: "auto", 
        maxHeight: "90vh", 
      
        /* Media query for smaller screens */
        "@media (max-width: 768px)": {
          width: "70%", 
          height: "auto",
          maxHeight: "70vh", 
        },
      },
  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const noteGroupNames = ["Work Notes", "Personal Notes", "Family Notes"];
    const colors = ["##B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF",'#6691FF'];
    const { isModalOpen, isMobile } = this.state;
    
  const handleColorSelect = (color) => {
    console.log('Selected color:', color);
  };


    return (
      <React.Fragment>
        <div style={this.pageStyles.splitScreen}>
          <div style={this.pageStyles.leftPane}>
            <div style={this.pageStyles.textContainer}>
              <Text variant="h4">Pocket Notes</Text>
            </div>
            <div style={this.pageStyles.namesContainer}>
              {noteGroupNames.map((name) => (
                <div key={name} style={this.pageStyles.nameItem}>
                  <GroupName name={name} />
                </div>
              ))}
            </div>
            <div style={this.pageStyles.addIcon} onClick={this.handleOpenModal}>
              <AddIcon />
            </div>
          </div>
          {!isMobile && (
            <div style={this.pageStyles.rightPane}>Right pane content</div>
          )}
        </div>

        <Modal open={isModalOpen} onClose={this.handleCloseModal}>
          <Box sx={this.pageStyles.modal}>
            <Text variant="h4">Create New group</Text>
            <div
              style={{
                display: "flex",
                alignItems: "inline",
                justifyContent: "space-between",
                paddingTop: "20px",
              }}
            >
              <Text variant="h5">Group Name</Text>
              <OutlinedTextField />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "inline",
                paddingTop: "20px",
                justifyContent: "space-between"
              }}
            >
              <Text variant="h5">Choose Color</Text>
              <ColorPicker colors={colors} onColorSelect={handleColorSelect} />
            </div>

            <Box mt={2} display="flex" justifyContent="flex-end">
              <CreateButton />
            </Box>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }
}

export default HomePage;
