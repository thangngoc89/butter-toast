import React from 'react';
import Div, { SCHEME_DARK, SCHEME_LIGHT } from './style';
import { getRenderable } from '../../lib'

function Slim({ children, content, className, theme, position = {}, toastId, dismiss, onClick }) {
    return (
        <Div className={className} theme={theme} horizontal={position.horizontal}>
            <span onClick={(e) => onClick(e, {toastId, dismiss})}>{getRenderable(content || children)}</span>
        </Div>
    );
}

export default Slim;
export { SCHEME_DARK, SCHEME_LIGHT };
