import React, { Component } from 'react';
import { generateId } from '../lib';
import { Ul, Li } from './styles';
import { POS_BOTTOM } from '../ButterToast/styles';
import Toast from '../Toast';
import { CUSTOM_EVENT_NAME } from '../ButterToast';

class Tray extends Component {

    constructor(props) {
        super(props);
        this.onButterToast = this.onButterToast.bind(this);
    }

    state = {
        toasts: []
    }

    componentDidMount() {
        window.addEventListener(CUSTOM_EVENT_NAME, this.onButterToast);
    }

    componentWillUnmount() {
        window.removeEventListener(CUSTOM_EVENT_NAME, this.onButterToast);
    }

    id = generateId('tray')
    toasts = {}

    onButterToast({detail} = {}) {

        const { dismissBy, ...payload } = detail;

        const namespace = detail.namespace || '';

        if (namespace && namespace !== this.props.namespace) {
            return;
        }

        if (!dismissBy) {
            return this.push(payload);
        }

        dismissBy === 'all' ? this.dismissAll() : this.dismiss(dismissBy);
    }

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
        const timeout = this.props.timeout;

        this.setState((prevState) => {
            const nextState = Object.assign({}, prevState);
            nextState.toasts = [{
                timeout, ...payload
            }].concat(nextState.toasts);
            return nextState;
        });
    }

    remove = (id) => {
        this.setState((prevState) => {
            const nextState = Object.assign({}, prevState);
            nextState.toasts = nextState.toasts.filter((toast) => toast.id !== id);
            return nextState;
        });
    }

    dismiss = (id) => {
        if (this.toasts[id] && this.toasts[id].close) {
            this.toasts[id].close();
        }
    }

    dismissAll = () => {
        for (const toast in this.toasts) {
            this.dismiss(toast);
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
                        <Li key={toast.id} offset={currentOffset} spacing={spacing} position={position} height={height}>
                            <Toast dismiss={() => this.dismiss(toast.id)}
                                remove={() => this.remove(toast.id)}
                                setHeight={this.setHeight}
                                position={position}
                                height={height}
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
