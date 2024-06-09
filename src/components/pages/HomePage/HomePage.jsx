import React, { Component } from "react";
import Text from "../../atoms/Text/Text";
import GroupName from "../../molecules/GroupName/GroupName";
import AddIcon from "../../atoms/AddCircleIcon/AddCircleIcon";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CreateButton from "../../atoms/CreateButton/CreateButton";
import OutlinedTextField from "../../atoms/TextField/TextField";
import ColorPicker from "../../organisms/ColorPicker/ColorPicker";
import ImageText from "../../molecules/ImageText/ImageText";
import NoteInput from "../../organisms/NoteInput/NoteInput";
import NoteCard from "../../molecules/NoteCard/NoteCard";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      isModalOpen: false,
      noteGroupNames: this.getNoteGroupsFromLocalStorage(),
      newGroupName: "",
      selectedColor: "",
      activeGroupIndex: null,
      notes: this.getNotesFromLocalStorage(),
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
      const updatedNoteGroupNames = [
        ...noteGroupNames,
        { name: newGroupName, color: selectedColor },
      ];
      this.setState({
        noteGroupNames: updatedNoteGroupNames,
        newGroupName: "",
        selectedColor: "",
        isModalOpen: false,
      });
      this.saveNoteGroupsToLocalStorage(updatedNoteGroupNames);
    } else {
      // Handle case when group name or color is not selected
      alert("Please enter a group name and select a color.");
    }
  };

  handleGroupClick = (index) => {
    this.setState({ activeGroupIndex: index });
  };

  handleNoteCreate = (noteContent) => {
    const { activeGroupIndex, notes } = this.state;
    if (activeGroupIndex !== null) {
      const updatedNotes = { ...notes };
      const groupNotes = updatedNotes[activeGroupIndex] || [];
      updatedNotes[activeGroupIndex] = [...groupNotes, noteContent];

      this.setState({ notes: updatedNotes });
      this.saveNotesToLocalStorage(updatedNotes);
    } else {
      alert("Please select a group to add a note.");
    }
  };

  getNotesFromLocalStorage = () => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : {};
  };

  saveNotesToLocalStorage = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  getNoteGroupsFromLocalStorage = () => {
    const savedNoteGroups = localStorage.getItem("noteGroupNames");
    return savedNoteGroups ? JSON.parse(savedNoteGroups) : [];
  };

  saveNoteGroupsToLocalStorage = (noteGroupNames) => {
    localStorage.setItem("noteGroupNames", JSON.stringify(noteGroupNames));
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
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      padding: "20px",
    },
    notesContainer: {
      width: "100%",
      flex: "1",
      overflowY: "auto",
    },
    noteInputContainer: {
      width: "100%",
      position: "absolute",
      bottom: "1px",
    },
    activeGroup: {
      backgroundColor: "#D3D3D3",
      borderRadius: "4px",
      padding: "10px",
    },
    groupItem: {
      padding: "10px",
      borderRadius: "4px",
      cursor: "pointer",
    },
    addIcon: {
      position: "absolute",
      bottom: "20px",
      right: "20px",
      cursor: "pointer",
    },
    groupHeader: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      padding: "10px",
      backgroundColor: "#FFFFFF",
      borderBottom: "1px solid #E0E0E0",
      boxSizing: "border-box",
    },
    groupHeaderText: {
      marginLeft: "10px",
      fontSize: "20px",
      fontWeight: "bold",
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
    const {
      isModalOpen,
      isMobile,
      noteGroupNames,
      newGroupName,
      activeGroupIndex,
      notes,
    } = this.state;
    const colors = [
      "#B38BFA",
      "#FF79F2",
      "#43E6FC",
      "#F19576",
      "#0047FF",
      "#6691FF",
    ];

    const groupNotes =
      activeGroupIndex !== null ? notes[activeGroupIndex] || [] : [];

    return (
      <React.Fragment>
        <div style={this.pageStyles.splitScreen}>
          <div style={this.pageStyles.leftPane}>
            <div style={this.pageStyles.textContainer}>
              <Text variant="h4">Pocket Notes</Text>
            </div>
            <div style={this.pageStyles.namesContainer}>
              {noteGroupNames.map((group, index) => (
                <div
                  key={index}
                  style={
                    activeGroupIndex === index
                      ? this.pageStyles.activeGroup
                      : this.pageStyles.groupItem
                  }
                  onClick={() => this.handleGroupClick(index)}
                >
                  <GroupName name={group.name} color={group.color} />
                </div>
              ))}
            </div>
            <div style={this.pageStyles.addIcon} onClick={this.handleOpenModal}>
              <AddIcon />
            </div>
          </div>
          {!isMobile && (
            <div style={this.pageStyles.rightPane}>
              {activeGroupIndex !== null && (
                <Box sx={this.pageStyles.groupHeader}>
                  <GroupName
                    name={noteGroupNames[activeGroupIndex].name}
                    color={noteGroupNames[activeGroupIndex].color}
                  />
                </Box>
              )}
              {activeGroupIndex === null && <ImageText />}
              <div style={this.pageStyles.notesContainer}>
                {groupNotes.map((note, index) => (
                  <NoteCard key={index} content={note} />
                ))}
              </div>
              {activeGroupIndex !== null && (
                <div style={this.pageStyles.noteInputContainer}>
                  <NoteInput onNoteCreate={this.handleNoteCreate} />
                </div>
              )}
            </div>
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
              <ColorPicker
                colors={colors}
                onColorSelect={this.handleColorSelect}
              />
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
