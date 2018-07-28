import React from 'react';
import { storiesOf } from '@storybook/react';
import ButterToast from '../src';
import './styles.scss';

setInterval(() => {
    if ('_btTrays' in window) {
        for (const tray in window._btTrays) {
            window._btTrays[tray].push({
                content: () => <div>unsafe render</div>
            });
        }
    }
}, 1500);

storiesOf('Examples/Popover', module)
    .add('Basic', () => (
        <div>
            <div>hello</div>
            <ButterToast position={{vertical: 'POS_TOP', horizontal: 'POS_LEFT'}} />
        </div>
    ))
    .add('Basic1', () => (
        <div>
            <div>hello</div>
            <ButterToast />
        </div>
    ));
