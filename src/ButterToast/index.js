import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { DIR_RIGHT, DIR_TOP } from './styles';
import styles from './styles';
import Tray from '../Tray';

class ButterToast extends Component {

    static raise(payload = {}, options = {}) {
        const toast = new CustomEvent('ButterToast', {
            detail: Object.assign({}, payload, options)
        });

        return window.dispatchEvent(toast);
    }

    static unmount(props, _tray) {

        if (_tray) {
            window.removeEventListener('ButterToast', _tray.onButterToast);
        }

        if (!this.root) {
            return;
        }

        ReactDOM.unmountComponentAtNode(this.root);
        this.root.parentNode.removeChild(this.root);
        delete this.root;
    }

    constructor(props) {
        super(props);

        this.config = {};
        this.theme = '';
        if (this.config.theme) {
            this.theme = ` bt-theme-${this.config.theme}`;
        }
    }

    componentDidMount() {

        if (this.props.renderInContext) {
            return;
        }

        const {
            direction
        } = this.props;

        const className = `${this.className}${this.theme}`;

        const style = styles({ vertical: direction.vertical, horizontal: direction.horizontal });
        this.root = document.createElement('aside');
        this.root.setAttribute('class', className);
        Object.assign(this.root.style, style);
        document.body.appendChild(this.root);

        ReactDOM.render(<Tray ref={this.createTrayRef}
                direction={direction}
                {...this.config} />,
            this.root);
    }

    componentWillUnmount() {
        if (!this.props.renderInContext) {
            ButterToast.unmount(this.config, this._tray);
        }
    }

    createTrayRef = (ref) => {
        window._btTrays = window._btTrays || {};

        if (!ref) {
            return;
        }

        window._btTrays[ref.id] = ref;
    }

    render() {
        if (this.props.renderInContext) {
            const className = `${this.className}${this.theme}`;

            return (
                <aside className={className}>
                    <Tray ref={this.createTrayRef} {...this.config}/>
                </aside>
            );
        } else {
            return null;
        }
    }
}

ButterToast.propTypes = {
    renderInContext: PropTypes.bool
};

ButterToast.defaultProps = {
    direction: {
        vertical: DIR_TOP,
        horizontal: DIR_RIGHT
    }
};

export default ButterToast;
