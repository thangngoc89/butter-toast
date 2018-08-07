import styled from 'styled-components';
import { POS_RIGHT, POS_LEFT } from '../../ButterToast/styles';
import { rgba, setSaturation } from 'polished';
import { container } from '../sharedStyles';
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
        ${container}
        ${({hasOnClick}) => 'cursor: pointer;' }
        text-align: 'center';
        ${({ theme }) => {
            return theme === SCHEME_DARK
                ? `
                    color: ${$grey_100};
                    background-color: ${$grey_800}
                `
                : `
                    color: ${$grey_800};
                    background-color: ${$grey_100}
                `
        }}
        padding: 5px 10px;
        border-radius: 3px;
    }
`

export default Div;
