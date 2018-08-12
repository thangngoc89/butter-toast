import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { POS_RIGHT, POS_TOP } from './styles';
import styles from './styles';
import Tray from '../Tray';

class ButterToast extends Component {

    static raise(payload = {}, options = {}) {
        const toast = new CustomEvent('ButterToast', {
            detail: Object.assign({}, payload, options)
        });

        return window.dispatchEvent(toast);
    }

    componentDidMount() {

        if (this.props.renderInContext) {
            return;
        }

        const {
            position,
            timeout,
            spacing,
            className
        } = this.props;

        const style = styles({ vertical: position.vertical, horizontal: position.horizontal });
        this.root = document.createElement('aside');
        this.root.setAttribute('class', className ? className : '');
        Object.assign(this.root.style, style);
        document.body.appendChild(this.root);

        ReactDOM.render(<Tray ref={this.createTrayRef}
                spacing={spacing}
                timeout={timeout}
                position={position}/>,
            this.root);
    }

    componentWillUnmount() {
        if (!this.root) {
            return;
        }

        delete window._btTrays[this.id];
        ReactDOM.unmountComponentAtNode(this.root);
        this.root.parentNode.removeChild(this.root);
        delete this.root;
    }

    createTrayRef = (ref) => {
        window._btTrays = window._btTrays || {};

        if (!ref) {
            return;
        }

        this.id = ref.id;

        window._btTrays[ref.id] = ref;
    }

    render() {

        const {
            renderInContext,
            timeout,
            spacing,
            className
        } = this.props;

        if (this.props.renderInContext) {

            return (
                <aside className={className}>
                    <Tray ref={this.createTrayRef}
                        spacing={spacing}
                        timeout={timeout}/>
                </aside>
            );
        } else {
            return null;
        }
    }
}

ButterToast.propTypes = {
    renderInContext: PropTypes.bool,
    className: PropTypes.string
};

ButterToast.defaultProps = {
    position: {
        vertical: POS_TOP,
        horizontal: POS_RIGHT
    },
    timeout: 6000,
    spacing: 10
};

export default ButterToast;
