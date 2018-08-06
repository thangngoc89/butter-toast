import React from 'react';
import Div, { SCHEME_DARK, SCHEME_LIGHT } from './style';
import { getRenderable } from '../../lib'

function Slim({ children, className, theme, position = {} }) {
    return (
        <Div className={className} theme={theme} horizontal={position.horizontal}>
            <span>{getRenderable(children)}</span>
        </Div>
    );
}

export default Slim;
export { SCHEME_DARK, SCHEME_LIGHT };
