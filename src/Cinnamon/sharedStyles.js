import styled from 'styled-components';
import {
    $grey_300,
    $grey_400
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
        box-shadow: 0 3px 20px ${$grey_400};
    }
`;

export {
    Base
};
