import React from 'react';

/**
 * A renderable React node.
 * @typedef {null|Number|String|Function|React.Component} ReactElement
 */

const FALLBACK_VALUE = null;

/**
 * Safely gets a renderable output of most given values.
 * @param  {*}      child The value you wish to render.
 * @param  {Object} props Passed react props. @see https://reactjs.org/docs/components-and-props.html
 * @return {ReactElement}
 */
const getRenderable = (child, props = {}) => {

    // React Elements
    if (React.isValidElement(child)) {
        return React.cloneElement(child, props);
    }

    // Stateless function constructors
    if (typeof child === 'function') {
        return child(props);
    }

    // Falsey values are not valid React nodes
    if (child === null || ['undefined', 'boolean'].includes(typeof child)) {
        return FALLBACK_VALUE;
    }

    // All other valid React nodes (strings, integers, etc.)
    return child;
};

export default getRenderable;
