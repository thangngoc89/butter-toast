import React from 'react';
import Toggler from '@fiverr/ui_toggle';
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
        const timeout = this.remaining || this.props.toast.timeout;
        this.clearTimeout();
        this.timeout = setTimeout(this.close, timeout);
        this.ends = Date.now() + timeout;
        delete this.remaining;
    }

    clearTimeout = () => {
        this.remaining = this.ends - Date.now();
        clearTimeout(this.timeout);
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
                className={className}
                onClick={close}>
                {toast.id} I am a toasty toast
            </div>
        );
    }
}

export default Toast;

Toast.defaultProps = {
    bindBodyClickListener: false,
    pauseOnHover: true
};
