import React from 'react';
import PropTypes from 'prop-types';
import Div, { SCHEME_GREY, SCHEME_RED, SCHEME_ORANGE, SCHEME_GREEN, SCHEME_BLUE } from './style';
import { getRenderable } from '../../lib';

function Crunch({ dismissible, title, content, dismiss, toastId, scheme, onClick, onDismiss }) {

    const handleDismiss = (e) => {
        dismiss();
        onDismiss(e, { toastId });
    };

    return (
        <Div scheme={scheme} hasOnClick={!!onClick}>
            {dismissible && <button onClick={handleDismiss} className="btn-dismiss">&times;</button>}
            <span onClick={(e) => onClick && onClick(e, {toastId, dismiss})}>
                { title && <strong className="title">{getRenderable(title)}</strong> }
                {content && <div className="content">{getRenderable(content)}</div>}
            </span>
        </Div>
    );
}

export default Crunch;
export { SCHEME_GREY, SCHEME_RED, SCHEME_ORANGE, SCHEME_GREEN, SCHEME_BLUE };

Crunch.prototypes = {
    content: PropTypes.node,
    className: PropTypes.string,
    scheme: PropTypes.oneOf([SCHEME_GREY, SCHEME_RED, SCHEME_ORANGE, SCHEME_GREEN, SCHEME_BLUE]),
    toastId: PropTypes.string,
    dismiss: PropTypes.func,
    onClick: PropTypes.func,
    dismissible: PropTypes.bool
};

Crunch.defaultProps = {
    dismissible: true,
    scheme: SCHEME_GREY,
    onDismiss: () => null
};
