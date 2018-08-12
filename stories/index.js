import React from 'react';
import { storiesOf } from '@storybook/react';
import ButterToast, { Cinnamon } from '../src';
import Funnies from 'funnies';
import './styles.scss';

const intervals = [];

const funnies = new Funnies();
function start(kind) {
    intervals.forEach(clearInterval);
    const fire = () => {
        if ('_btTrays' in window) {
            for (const tray in window._btTrays) {
                if (kind === 'slim') {
                    window._btTrays[tray].push({
                        content: <Cinnamon.Slim scheme="scheme-dark" content={funnies.message()} />
                    });
                }
                if (kind === 'crunch') {
                    window._btTrays[tray].push({
                        content: <Cinnamon.Crunch scheme="scheme-blue" title="crisp-example" content={funnies.message()} />
                    });
                }
                if (kind === 'crisp') {
                    window._btTrays[tray].push({
                        content: <Cinnamon.Crisp scheme="scheme-blue" title="crisp-example" content={funnies.message()} />
                    });
                }
            }
        }
    };
    setTimeout(fire);
    const interval = setInterval(fire, 2000);
    intervals.push(interval);
}

storiesOf('Kind :: Crisp', module)
    .add('crisp', () => {
        start('crisp');
        return (
            <div>
                <ButterToast position={{ vertical: 'POS_TOP', horizontal: 'POS_CENTER' }}/>
            </div>
        );
    })
    .add('crunch', () => {
        start('crunch');
        return (
            <div>
                <ButterToast position={{ vertical: 'POS_TOP', horizontal: 'POS_LEFT' }}/>
            </div>
        );
    })
    .add('slim', () => {
        start('slim');
        return (
            <div>
                <ButterToast position={{ vertical: 'POS_BOTTOM', horizontal: 'POS_CENTER' }} spacing={5}/>
            </div>
        );
    });
