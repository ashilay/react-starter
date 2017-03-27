import React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Hello, {this.getFullName()}!</h1>
            </div>
        );
    }

    getFullName() {
        return this.props.name + ' ' + this.props.sername;
    }
}
