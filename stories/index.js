import React from 'react';
import { storiesOf } from '@storybook/react';
import ButterToast, { Cinnamon } from '../src';
import Funnies from 'funnies';
import './styles.scss';

const funnies = new Funnies();


setInterval(() => {
    if ('_btTrays' in window) {
        for (const tray in window._btTrays) {
            window._btTrays[tray].push({
                content: (
                    <Cinnamon.Crisp title="crisp-example" content={funnies.message()} icon={<i className="fa fa-trash"/>}/>
                )
            });
        }
    }
}, 1500);

storiesOf('Examples/Popover', module)
    .add('Basic', () => (
        <div>
            <div>hello</div>
            <ButterToast position={{vertical: 'POS_BOTTOM', horizontal: 'POS_LEFT'}} />
        </div>
    ))
    .add('Basic1', () => (
        <div>
            <div>hello</div>
            <ButterToast />
        </div>
    ));
