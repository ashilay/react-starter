import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

describe('App', () => {
    let sut;
    const name = 'John';
    const sername = 'Doe';

    beforeEach(() => {
        sut = new App();
        sut.props = {
            name,
            sername
        }
    });

    //Snapshot Testing
    test('render Hellow World text', () => {
        const component = renderer.create(
            <App name='John' sername='Doe' />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('builds user`s full name', () => {
        expect(sut.getFullName()).toBe(name + ' ' + sername);
    });
});

