import React, { Component } from 'react';
import Text from '../../atoms/Text/Text';
import { ThemeProvider } from '@mui/material';
import theme from '../../../theme';
import GroupName from '../../molecules/GroupName/GroupName';

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
            marginTop: '20px', // Space between the title and the list
        },
        nameItem: {
            marginBottom: '10px', // Space between each list item
        },
        rightPane: {
            width: '80%',
            height: '100vh',
            backgroundColor: '#DAE5F5',
        },
    };

    render() {
        const noteGroupNames = ['Work test', 'Personal', 'Shopping', 'Travel']; // Added more names for demonstration

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
                    </div>
                    <div style={this.pageStyles.rightPane}>Right pane content</div>
                </div>
            </ThemeProvider>
        );
    }
}

export default HomePage;
