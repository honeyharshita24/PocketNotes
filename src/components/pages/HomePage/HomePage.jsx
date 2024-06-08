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
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      isModalOpen: false,
      noteGroupNames: [
        { name: "Work Notes", color: "#000000" },
        { name: "Personal Notes", color: "#000000" },
        { name: "Family Notes", color: "#000000" }
      ],
      newGroupName: "",
      selectedColor: ""
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

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false, newGroupName: "", selectedColor: "" });
  };

  handleGroupNameChange = (event) => {
    this.setState({ newGroupName: event.target.value });
  };

  handleColorSelect = (color) => {
    this.setState({ selectedColor: color });
  };

  handleCreate = () => {
    const { newGroupName, selectedColor, noteGroupNames } = this.state;
    if (newGroupName.trim() && selectedColor) {
      this.setState({
        noteGroupNames: [...noteGroupNames, { name: newGroupName, color: selectedColor }],
        newGroupName: "",
        selectedColor: "",
        isModalOpen: false,
      });
    } else {
      alert("Please enter a group name and select a color.");
    }
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
      position: "relative",
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
      marginTop: "30px",
    },
    nameItem: {
      marginBottom: "30px",
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
      "@media (max-width: 768px)": {
        width: "70%",
        height: "auto",
        maxHeight: "70vh",
      },
    },
  };

  render() {
    const { isModalOpen, isMobile, noteGroupNames, newGroupName, selectedColor } = this.state;
    const colors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];

    return (
      <React.Fragment>
        <div style={this.pageStyles.splitScreen}>
          <div style={this.pageStyles.leftPane}>
            <div style={this.pageStyles.textContainer}>
              <Text variant="h4">Pocket Notes</Text>
            </div>
            <div style={this.pageStyles.namesContainer}>
              {noteGroupNames.map((group, index) => (
                <div key={index} style={this.pageStyles.nameItem}>
                  <GroupName name={group.name} color={group.color} />
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
            <Text variant="h4">Create New Group</Text>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "20px",
              }}
            >
              <Text variant="h5">Group Name</Text>
              <OutlinedTextField
                variant="outlined"
                value={newGroupName}
                onChange={this.handleGroupNameChange}
                fullWidth
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingTop: "20px",
                justifyContent: "space-between",
              }}
            >
              <Text variant="h5">Choose Color</Text>
              <ColorPicker colors={colors} onColorSelect={this.handleColorSelect} />
            </div>

            <Box mt={2} display="flex" justifyContent="flex-end">
              <CreateButton onClick={this.handleCreate} />
            </Box>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }
}

export default HomePage;
