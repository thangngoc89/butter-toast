import React, { Component } from 'react';
import { generateId } from '../lib';
import { Ul, Li } from './styles';
import { POS_BOTTOM } from '../ButterToast/styles';
import Toast from '../Toast';

class Tray extends Component {

    state = {
        toasts: []
    }

    id = generateId('tray')
    toasts = {}

    createToastRef = (id, ref) => {
        if (!id) {
            return;
        }

        if (!ref) {
            delete this.toasts[id];
            return;
        }

        this.toasts[id] = ref;
    }

    push = (payload = {}) => {
        const id = generateId();
        const timeout = this.props.timeout;

        this.setState((prevState) => {
            const nextState = Object.assign({}, prevState);
            nextState.toasts = [{
                id, timeout, ...payload
            }].concat(nextState.toasts);
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

    popAll = () => {
        for (const toast in this.toasts) {
            if (this.toasts[toast] && this.toasts[toast].close) {
                this.toasts[toast].close();
            }
        }
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
        const { position, spacing } = this.props;
        let offset = 0;

        return (
            <Ul>
                {toasts.map((toast) => {
                    if (!toast) { return null; }

                    const height = toast.height || 0;
                    let currentOffset;

                    currentOffset = offset;
                    offset += height + spacing;

                    if (position.vertical === POS_BOTTOM) {
                        currentOffset = -currentOffset - height;
                    }

                    return (
                        <Li key={toast.id} offset={currentOffset} spacing={spacing} position={position}>
                            <Toast pop={this.pop}
                                setHeight={this.setHeight}
                                position={position}
                                ref={(ref) => this.createToastRef(toast.id, ref)}
                                toast={toast}/>
                        </Li>
                    );
                })}
            </Ul>
        );
    }
}

export default Tray;
