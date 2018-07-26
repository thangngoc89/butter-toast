import React from 'react';
import { storiesOf } from '@storybook/react';
import ButterToast from '../src';
import './styles.scss';

storiesOf('Examples/Popover', module)
    .add('Basic', () => (
        <div>
            <div>hello</div>
            <ButterToast />
        </div>
    ))
    .add('Basic1', () => (
        <div>
            <div>hello</div>
            <ButterToast />
        </div>
    ));
