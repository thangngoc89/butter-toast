import React from 'react';
import Div from './style';
import { getRenderable } from '../../lib'

function Crisp({children, hasCloseBtn = true, icon, title, content, dismiss, toastId}) {
    return (
        <Div hasIcon={!!icon}>
            { icon && <div className="icon">{getRenderable(icon)}</div> }
            { title && <strong className="title">{title}</strong> }
            { content && <div className="content">{content}</div> }
            { hasCloseBtn && <button onClick={dismiss} className="btn-dismiss">&times;</button>}
        </Div>
    );
}

export default Crisp;
