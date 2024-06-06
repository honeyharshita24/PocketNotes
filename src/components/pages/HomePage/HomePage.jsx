import React, { Component } from 'react';
import Text from '../../atoms/Text/Text';
import { ThemeProvider } from '@mui/material';
import theme from '../../../theme';
import GroupName from '../../molecules/GroupName/GroupName';
import AddIcon from '../../atoms/AddCircleIcon/AddCircleIcon';

class HomePage extends Component {
    state = {};

    pageStyles = {
        splitScreen: {
            display: 'flex',
            flexDirection: 'row',
            height: '100vh',
        },
        leftPane: {
            width: '20%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
        },
        textContainer: {
            width: '100%',
            textAlign: 'center',
            paddingTop: '66px',
        },
        namesContainer: {
            width: '100%',
            textAlign: 'left',
            paddingLeft: '20px',
            marginTop: '30px', // Space between the title and the list
        },
        nameItem: {
            marginBottom: '30px', // Space between each list item
        },
        rightPane: {
            width: '80%',
            height: '100vh',
            backgroundColor: '#DAE5F5',
        },
        addIcon: {
            position: 'absolute',
            bottom: '20px',
            right: '20px',
        },
    };

    render() {
        const noteGroupNames = ['Work Notes', 'Personal Notes', 'Family Notes'];

        return (
            <ThemeProvider theme={theme}>
                <div style={this.pageStyles.splitScreen}>
                    <div style={this.pageStyles.leftPane}>
                        <div style={this.pageStyles.textContainer}>
                            <Text variant="h1">Pocket Notes</Text>
                        </div>
                        <div style={this.pageStyles.namesContainer}>
                            {noteGroupNames.map((name) => (
                                <div key={name} style={this.pageStyles.nameItem}>
                                    <GroupName name={name} />
                                </div>
                            ))}
                        </div>
                        <div style={this.pageStyles.addIcon}>
                            <AddIcon />
                        </div>
                    </div>
                    <div style={this.pageStyles.rightPane}>Right pane content</div>
                </div>
            </ThemeProvider>
        );
    }
}

export default HomePage;
