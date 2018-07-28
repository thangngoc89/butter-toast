import React from 'react';
import Toggler from '@fiverr/ui_toggle';
import { getRenderable } from '../lib';
import classNames from 'classnames';

class Toast extends Toggler {

    state = {
        shown: false
    }

    createRef = (ref = { addEventListener: () => null }) => {
        this.toastRef = ref;
    }

    componentDidMount() {
        setTimeout(this.open);
    }

    startTimeout = () => {
        const { toast } = this.props;

        if (toast.sticky) {
            return;
        }

        const timeout = typeof this.remaining === 'number' ? this.remaining : toast.timeout;
        this.clearTimeout();
        this.timeout = setTimeout(this.close, timeout);
        this.ends = Date.now() + timeout;
        this.remaining = undefined;
    }

    clearTimeout = () => {

        if (this.props.toast.sticky) {
            return;
        }

        this.remaining = this.calcRemaining();
        clearTimeout(this.timeout);
    }

    calcRemaining = () => {
        return this.ends - Date.now();
    }

    togglerDidOpen() {
        const ref = this.toastRef;
        const {
            setHeight, toast
        } = this.props;

        setTimeout(() => {
            this.setState({
                shown: true
            }, () => {
                setHeight(toast.id, ref.clientHeight);
                this.startTimeout();
            });
        });
    }

    togglerWillClose(done) {
        const ref = this.toastRef;
        this.clearTimeout();

        this.setState({
            shown: false,
            removed: true
        }, () => {
            ref.addEventListener('transitionend', function cb(e) {
                if (e.target === ref) {
                    ref.removeEventListener(e.type, cb);
                    done();
                }
            });
        });
    }

    togglerDidClose() {
        const {
            pop,
            toast
        } = this.props;

        pop(toast.id);
    }

    toggleContent({close}) {
        const { toast, pauseOnHover } = this.props;
        const { shown, removed } = this.state;

        const className = classNames('bt-toast', {
            shown, removed
        });

        return (
            <div ref={this.createRef}
                onMouseEnter={() => pauseOnHover && this.clearTimeout()}
                onMouseLeave={() => pauseOnHover && this.startTimeout()}
                className={className}>
                {getRenderable(toast.content, {
                    toastId: toast.id,
                    dismiss: this.close,
                    calcRemaining: this.calcRemaining
                })}
            </div>
        );
    }
}

export default Toast;

Toast.defaultProps = {
    bindBodyClickListener: false,
    pauseOnHover: true
};
