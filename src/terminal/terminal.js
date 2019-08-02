import React from 'react';
import TerminalInReact from 'terminal-in-react';
import './terminal.css';

class Terminal extends React.Component {
    constructor(props) {
        super(props);
    }

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
                    backgroundColor='black'
                    barColor='black'
                    style={{ fontWeight: "bold", fontSize: "1em" }}
                    commands={{
                        'open-google': () => window.open('https://www.google.com/', '_blank'),
                        showmsg: "hello",
                        popup: () => alert('Terminal in React')
                    }}
                    descriptions={{
                        'open-google': 'opens google.com',
                        showmsg: 'shows a message',
                        alert: 'alert', popup: 'alert'
                    }}
                    msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
                />
            </div>
        );
    }
}

export default Terminal;