import React from 'react';
import { storiesOf } from '@storybook/react';
import ButterToast, { Cinnamon } from '../src';
import Funnies from 'funnies';
import './styles.scss';

const funnies = new Funnies();
let count = 0;
const interval = setInterval(() => {
    if ('_btTrays' in window) {
        for (const tray in window._btTrays) {
            window._btTrays[tray].push({
                // sticky: true,
                content: (
                    <Cinnamon.Slim theme="scheme-dark" title="crisp-example" children={funnies.message()} />
                )
            });
        }
    }
    if (count > 5) {
        clearInterval(interval);
    }
    count++;
}, 1000);

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
