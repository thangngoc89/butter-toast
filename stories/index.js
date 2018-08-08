import React from 'react';
import { storiesOf } from '@storybook/react';
import ButterToast, { Cinnamon } from '../src';
import Funnies from 'funnies';
import './styles.scss';

const funnies = new Funnies();
function start(style) {
    let count = 0;
    const interval = setInterval(() => {
        if ('_btTrays' in window) {
            for (const tray in window._btTrays) {
                window._btTrays[tray].push({

                    // sticky: true,
                    content: (
                        style === 'slim'
                            ? <Cinnamon.Slim theme="scheme-dark" content={funnies.message()}/>
                            : <Cinnamon.Crisp theme="scheme-red" title="crisp-example" content={funnies.message()}/>
                    )
                });
            }
        }
        if (count > 5) {
            clearInterval(interval);
        }
        count++;
    }, 1000);
}

storiesOf('Kind :: Crisp', module)
    .add('Basic', () => {
        start();
        return (
            <div>
                <ButterToast position={{ vertical: 'POS_TOP', horizontal: 'POS_LEFT' }} spacing={5}/>
            </div>
        );
    })
    .add('Basic 1', () => {
        start('slim');
        return (
            <div>
                <ButterToast position={{ vertical: 'POS_BOTTOM', horizontal: 'POS_LEFT' }} spacing={5}/>
            </div>
        );
    });
