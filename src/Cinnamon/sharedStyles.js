import styled from 'styled-components';
import {
    $grey_300,
    $grey_500
} from './colors';

const Base = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    display: inline-block;
    font-size: 11px;
    line-height: 14px;
    position: relative;
    box-sizing: border-box;
    box-shadow: 0 3px 15px ${$grey_300};
    transition: box-shadow .3s;
    overflow: hidden;
    z-index: 1;

    &:hover {
        box-shadow: 0 3px 20px ${$grey_500};
    }

    @keyframes showIcon {
        0% { transform: translateY(-100%); opacity: 0;}
        60% { transform: opacity: 1;}
        100% { transform: translateY(0); opacity: 1;}
    }

    .bt-icon {
        top: 0;
        bottom: 0;
        left: 0;
        width: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        animation: showIcon .3s ease .1s forwards;
    }
`;

export {
    Base
};
