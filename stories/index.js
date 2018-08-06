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
                content: (
                    <Cinnamon.Crisp theme="theme-cream" title="crisp-example" content={funnies.message()} />
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
            <ButterToast position={{vertical: 'POS_TOP', horizontal: 'POS_RIGHT'}} />
        </div>
    ))
    .add('Basic1', () => (
        <div>
            <div>hello</div>
            <ButterToast />
        </div>
    ));
