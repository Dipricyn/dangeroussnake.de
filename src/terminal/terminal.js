import React from 'react';
import TerminalInReact from 'terminal-in-react';
import {appName, author, githubURL} from '../constants'

class Terminal extends React.Component {
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }}
            >
                <TerminalInReact
                    color='green'
                    hideTopBar={true}
                    allowTabs={false}
                    startState='maximised'
                    backgroundColor='black'
                    barColor='black'
                    style={{ fontWeight: "bold", fontSize: "1em" }}
                    commands={{
                        'github': () => window.open(githubURL, '_blank'),
                        'about': () => `${appName} is a simple console game written in Fortran.`,
                        'author': () => author,
                    }}
                    descriptions={{
                        'github': 'opens the github repository',
                        'about': `shows information about ${appName}`,
                        'author': `shows the game's author`
                    }}
                    msg={`Welcome!\n` +
                    `This is the interactive homepage for ${appName}.\n` +
                    `Type 'help' to see a list of commands.`}
                />
            </div>
        );
    }
}

export default Terminal;