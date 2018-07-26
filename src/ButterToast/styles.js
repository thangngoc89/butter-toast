export const DIR_TOP = 'DIR_TOP';
export const DIR_BOTTOM = 'DIR_BOTTOM';
export const DIR_LEFT = 'DIR_LEFT';
export const DIR_RIGHT = 'DIR_RIGHT';
export const DIR_CENTER = 'DIR_CENTER';

const styleRight = {
    right: 0
};

const styleLeft = {
    left: 0
};

const styleCenter = {
    left: '50%',
    transform: 'translateX(-50%)'
};

const styleBottom = {
    bottom: 0
};

const styleTop = {
    top: 0
};

const styleBase = {
    position: 'fixed',
    zIndex: 99999
};

export default function styles({
    vertical = DIR_TOP, horizontal = DIR_RIGHT
} = {}) {

    return Object.assign({}, styleBase,
        vertical === DIR_BOTTOM ? styleBottom : styleTop,
        horizontal === DIR_CENTER ? styleCenter : {},
        horizontal === DIR_LEFT ? styleLeft : {},
        horizontal === DIR_RIGHT ? styleRight : {}
    );
}
