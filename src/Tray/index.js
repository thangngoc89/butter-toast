import React, { Component } from 'react';
import { generateId } from '../lib';
import { Ul, Li } from './styles';
import Toast from '../Toast';

class Tray extends Component {

    id = generateId('tray')

    state = {
        toasts: []
    }

    push = (payload = {}) => {
        const id = generateId();
        this.setState((prevState) => {
            const nextState = Object.assign({}, prevState);
            nextState.toasts = nextState.toasts.concat([{
                id, payload
            }]);
            return nextState;
        });
    }

    pop = (id) => {
        this.setState((prevState) => {
            const nextState = Object.assign({}, prevState);
            nextState.toasts = nextState.toasts.filter((toast) => toast.id !== id);
            return nextState;
        });
    }

    setHeight = (id, height) => {
        this.setState((prevState) => {
            const nextState = Object.assign({}, prevState);
            const index = nextState.toasts.findIndex((toast) => toast.id === id);
            nextState.toasts[index].height = height;
            return nextState;
        });
    }

    render() {
        const { toasts } = this.state;
        const { direction } = this.props;
        let offset = 0;

        return (
            <Ul direction={direction}>
                {toasts.map((toast, index) => {
                    if (!toast) { return null; }

                    const height = toast.height || 0;
                    const currentOffset = offset;
                    offset += height;

                    return <Li key={toast.id} offset={currentOffset}>
                                <Toast pop={this.pop}
                                    setHeight={this.setHeight}
                                    toast={toast}/>
                            </Li>
                })}
            </Ul>
        );
    }
}

export default Tray;
