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

    togglerDidOpen() {
        const ref = this.toastRef;
        const {
            setHeight, toast
        } = this.props;

        this.setState({
            shown: true
        }, () => {
            setHeight(toast.id, ref.clientHeight);
        });
    }

    togglerWillClose(done) {
        const ref = this.toastRef;

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
        const { toast } = this.props;
        const { shown, removed } = this.state;

        const className = classNames('bt-toast', {
            shown, removed
        });

        return (
            <div ref={this.createRef} className={className} onClick={close}>
                {toast.id} I am a toasty toast
            </div>
        );
    }
}

export default Toast;

Toast.defaultProps = {
    bindBodyClickListener: false
};
