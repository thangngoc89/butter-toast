import React from 'react';
import Div from './style';
import { getRenderable } from '../../lib'

function Crisp({ children, hasCloseBtn = true, icon, title, content, dismiss, toastId, className, theme }) {
    return (
        <Div hasIcon={!!icon} className={className} theme={theme}>
            { icon && <div className="icon">{getRenderable(icon)}</div> }
            { title && <strong className="title">{title}</strong> }
            { content && <div className="content">{content}</div> }
            { hasCloseBtn && <button onClick={dismiss} className="btn-dismiss">&times;</button>}
        </Div>
    );
}

export default Crisp;
