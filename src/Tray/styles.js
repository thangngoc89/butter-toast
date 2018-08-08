import styled from 'styled-components';
import { POS_LEFT } from '../ButterToast/styles';

const Ul = styled.ul`
    position: relative;
    padding: 0;
    margin: 0;
    list-style-type: none;

    > li {
        position: absolute;
        transition transform .3s;
    }

    ${({ position }) => position.horizontal === POS_LEFT
        ? ' > li { left: 0; }'
        : ' > li { right: 0; }'}
    `;

const Li = styled.li`
    transform: translateY(${({offset}) => offset}px);

    > .bt-toast {
        opacity: 0;
        transition: opacity .2s;
    }

    > .bt-toast.shown {
        opacity: 1;
        transform: scale(1);
        transition-delay: .1s;
    }

    > .bt-toast.removed {
        transform: scale(.8);
        transition: opacity .5s, transform .6s;
    }
`;

export {
    Ul,
    Li
};
