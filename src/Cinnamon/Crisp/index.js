import React from 'react';
import PropTypes from 'prop-types';
import Div, { SCHEME_GREY, SCHEME_RED, SCHEME_ORANGE, SCHEME_INDIGO, SCHEME_GREEN, SCHEME_BLUE } from './style';
import { getRenderable } from '../../lib'

function Crisp({ dismissible, icon, title, content, dismiss, toastId, theme, onClick, onDismiss }) {

    const handleDismiss = (e) => {
        dismiss();
        onDismiss(e, { toastId });
    }

    return (
        <Div hasIcon={!!icon} theme={theme} hasOnClick={!!onClick}>
            <span onClick={(e) => onClick && onClick(e, {toastId, dismiss})}>
                { icon && <div className="icon">{getRenderable(icon)}</div> }
                { title && <strong className="title">{getRenderable(title)}</strong> }
                {content && <div className="content">{getRenderable(content)}</div>}
            </span>
            {dismissible && <button onClick={handleDismiss} className="btn-dismiss">&times;</button>}
        </Div>
    );
}

export default Crisp;
export { SCHEME_GREY, SCHEME_RED, SCHEME_ORANGE, SCHEME_INDIGO, SCHEME_GREEN, SCHEME_BLUE };

Slim.Crisp = {
    content: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.oneOf([SCHEME_GREY, SCHEME_RED, SCHEME_ORANGE, SCHEME_INDIGO, SCHEME_GREEN, SCHEME_BLUE]),
    toastId: PropTypes.string,
    dismiss: PropTypes.func,
    onClick: PropTypes.func,
    dismissible: PropTypes.bool
};

Slim.defaultProps = {
    dismissible: true,
    theme: SCHEME_GREY,
    onDismiss: () => null
};
