import styled from 'styled-components';
import { POS_RIGHT, POS_LEFT } from '../../ButterToast/styles';
import { rgba, setSaturation } from 'polished';
import {
    $white,
    $grey_100,
    $grey_300,
    $grey_400,
    $grey_800,
} from '../colors';

export const SCHEME_DARK = 'scheme-dark';
export const SCHEME_LIGHT = 'scheme-light';

const Div = styled.div`
    width: 300px;
    text-align: ${({horizontal}) => {
        switch (horizontal) {
            case POS_RIGHT:
                return 'right';
            case POS_LEFT:
                return 'left';
            default:
                return 'center';
        }
    }}

    > span {
        text-align: 'center';
        font-family: Arial, Helvetica, sans-serif;
        display: inline-block;
        font-size: 11px;
        line-height: 14px;
        position: relative;
        ${({ theme }) => {
            if (theme === SCHEME_DARK) {
                return `
                    color: ${$grey_100};
                    background-color: ${$grey_800}
                `
            }

            return `
               color: ${$grey_800};
                background-color: ${$grey_100}
            `
        }}
        padding: 5px 10px;
        box-sizing: border-box;
        box-shadow: 0 3px 15px ${$grey_300};
        border-radius: 3px;
        transition: box-shadow .3s;
        overflow: hidden;
        z-index: 1;
        text-align: center;

        &:hover {
            box-shadow: 0 3px 20px ${$grey_400};
        }
    }
`

export default Div;
