import React from 'react';
import Div, { SCHEME_GREY, SCHEME_RED, SCHEME_ORANGE, SCHEME_INDIGO, SCHEME_GREEN, SCHEME_BLUE } from './style';
import { getRenderable } from '../../lib'

function Crisp({ children, hasCloseBtn = true, icon, title, content, dismiss, toastId, theme, ...props }) {
    return (
        <Div hasIcon={!!icon} theme={theme} {...props}>
            { icon && <div className="icon">{getRenderable(icon)}</div> }
            { title && <strong className="title">{getRenderable(title)}</strong> }
            { content && <div className="content">{getRenderable(content)}</div> }
            { hasCloseBtn && <button onClick={dismiss} className="btn-dismiss">&times;</button>}
        </Div>
    );
}

export default Crisp;
export { SCHEME_GREY, SCHEME_RED, SCHEME_ORANGE, SCHEME_INDIGO, SCHEME_GREEN, SCHEME_BLUE };
