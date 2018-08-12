export const POS_TOP = 'POS_TOP';
export const POS_BOTTOM = 'POS_BOTTOM';
export const POS_LEFT = 'POS_LEFT';
export const POS_RIGHT = 'POS_RIGHT';
export const POS_CENTER = 'POS_CENTER';

const styleRight = {
    right: 0
};

const styleLeft = {
    left: 0
};

const styleCenter = {
    left: '50%',
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
    vertical = POS_TOP, horizontal = POS_RIGHT
} = {}) {

    return Object.assign({}, styleBase,
        vertical === POS_BOTTOM ? styleBottom : styleTop,
        horizontal === POS_CENTER ? styleCenter : {},
        horizontal === POS_LEFT ? styleLeft : {},
        horizontal === POS_RIGHT ? styleRight : {}
    );
}
