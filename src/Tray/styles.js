import styled from 'styled-components';
import { DIR_LEFT } from '../ButterToast/styles';

const Ul = styled.ul`
    position: relative;
    padding: 0;
    margin: 0;
    list-style-type: none;

    ${({ direction }) => direction.horizontal === DIR_LEFT
        ? ` > li { left: 0; }`
        : ` > li { right: 0; }`
    }
`;

const Li = styled.li`
    position: absolute;
    transform: translateY(${({ offset }) => offset}px);
    transition: transform .3s;

    > .bt-toast {
        opacity: 0;
        transition: opacity .3s, transform .5s;
    }

    > .bt-toast.shown {
        opacity: 1;
        transform: scale(1);
        transition: transform 0s, opacity .3s;
        transition-delay: .3s;
    }

    > .bt-toast.removed {
        transform: scale(.8);
    }
`;

export {
    Ul,
    Li
};
