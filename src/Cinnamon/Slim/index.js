import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content, SCHEME_DARK, SCHEME_LIGHT } from './style';
import { getRenderable } from '../../lib';

function Slim({ children, content, className, theme, position = {}, toastId, dismiss, onClick }) {
    if (!children && !content) {
        return null;
    }
    return (
        <Wrapper className={className} theme={theme} horizontal={position.horizontal} hasOnClick={!!onClick}>
            <Content onClick={(e) => onClick && onClick(e, {toastId, dismiss})}>{getRenderable(content || children)}</Content>
        </Wrapper>
    );
}

export default Slim;
export { SCHEME_DARK, SCHEME_LIGHT };

Slim.prototype = {
    children: PropTypes.node,
    content: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.oneOf([SCHEME_DARK, SCHEME_LIGHT]),
    position: PropTypes.object,
    toastId: PropTypes.string,
    dismiss: PropTypes.func,
    onClick: PropTypes.func
};

Slim.defaultProps = {
    theme: SCHEME_DARK
};
