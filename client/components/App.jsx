import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {
    getFullName() {
        return `${this.props.name} ${this.props.sername}`;
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Hello, {this.getFullName()}!</h1>
            </div>
        );
    }
}

App.propTypes = {
    name: PropTypes.string.isRequired,
    sername: PropTypes.string.isRequired,
};
