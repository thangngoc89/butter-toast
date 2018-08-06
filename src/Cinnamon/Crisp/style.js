import styled from 'styled-components';
import { rgba, setSaturation } from 'polished';
import {
    $white,
    $grey_50,
    $grey_100,
    $grey_300,
    $grey_400,
    $grey_600,
    $red_600,
    $orange_A200,
    $indigo_600,
    $green_600
} from '../colors';

export const SCHEME_RED = 'scheme-red';
export const SCHEME_AMBER = 'scheme-amber';
export const SCHEME_INDIGO = 'scheme-indigo';
export const SCHEME_GREEN = 'scheme-green';

const themeColor = (theme, alpha = 1) => {
    let color;
    switch (theme) {
        case SCHEME_RED:
            color = $red_600;
            break;
        case SCHEME_AMBER:
            color = $orange_A200;
            break;
        case SCHEME_INDIGO:
            color = $indigo_600;
            break;
        case SCHEME_GREEN:
            color = $green_600;
            break;
        default:
            color = $grey_600;
            break;
    }

    return rgba(color, alpha);
}

const Div = styled.div`
    @keyframes showIcon {
        0% { transform: scale(.6); }
        60% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }

    font-family: Arial, Helvetica, sans-serif;
    font-size: 11px;
    line-height: 14px;
    position: relative;
    background-color: ${$white};
    min-height: 50px;
    width: ${({ hasIcon }) => hasIcon ? '400' : '350'}px;
    padding: 10px 45px 10px ${({ hasIcon }) => hasIcon ? '60' : '10'}px;
    box-sizing: border-box;
    box-shadow: 0 3px 15px ${$grey_300};
    border-radius: 5px;
    transition: box-shadow .3s;
    overflow: hidden;
    z-index: 1;

    strong.title {
        color: ${({theme}) => themeColor(theme)};
        font-size: 15px;
    }

    div.content {
        padding-top: 5px;
        color: ${({theme}) => setSaturation(.3, themeColor(theme, .5))};
    }

    button.btn-dismiss {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 40px;
        text-align: center;
        text-decoration: none;
        font-size: 22px;
        color: ${({theme}) => themeColor(theme, .6)};
        transition: background-color .4s;
        border: none;
        outline: none;
        background: none;

        &:hover {
            background-color: ${({theme}) => themeColor(theme, .05)};
        }

        &:active {
            background-color: ${({theme}) => themeColor(theme, .1)};
        }
    }

    > .icon {
        top: 0;
        bottom: 0;
        left: 0;
        width: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        animation: showIcon .5s ease .3s forwards;
    }

`

export default Div;
