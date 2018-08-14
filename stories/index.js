import React from 'react';
import { storiesOf } from '@storybook/react';
import ButterToast, { Cinnamon } from '../src';
import { POS_RIGHT, POS_CENTER, POS_LEFT, POS_TOP, POS_BOTTOM } from '../src/ButterToast/styles';
import Funnies from 'funnies';
import './styles.scss';

const intervals = [];

const funnies = new Funnies();
function start({ kind, sticky = false, scheme } = {}) {
    let interval;
    intervals.forEach(clearInterval);
    intervals.length = 0;

    let counter = 0;

    const fire = () => {
        counter += 1;

        if (sticky && counter > 5) {
            clearInterval(interval);
        }

        const style = `scheme-${scheme}`
        const content = funnies.message();

        if ('_btTrays' in window) {
            for (const tray in window._btTrays) {
                if (kind === 'crisp') {
                    window._btTrays[tray].push({
                        sticky,
                        content: <Cinnamon.Crisp scheme={style}
                            title="crisp example"
                            content={content}/>
                    });
                }

                if (kind === 'crunch') {
                    window._btTrays[tray].push({
                        sticky,
                        content: <Cinnamon.Crunch scheme={style}
                            title="crunch example"
                            content={content}/>
                    });
                }
                if (kind === 'slim') {
                    window._btTrays[tray].push({
                        content: <Cinnamon.Slim scheme={style}
                            content={content} />
                    });
                }
            }
        }

    };
    fire();
    interval = setInterval(fire, 2000);
    intervals.push(interval);
}

storiesOf('Kind::Crisp', module)
    .add('Red - top/center', () => {
        start({ kind: 'crisp', scheme: 'red' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
            </div>
        );
    })
    .add('Orange - bottom/center', () => {
        start({ kind: 'crisp', scheme: 'orange' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_CENTER }} />
            </div>
        );
    })
    .add('Purple - top/left', () => {
        start({ kind: 'crisp', scheme: 'purple' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_LEFT }} />
            </div>
        );
    })
    .add('Green - bottom/left', () => {
        start({ kind: 'crisp', scheme: 'green' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_LEFT }} />
            </div>
        );
    })
    .add('Blue - top/right', () => {
        start({ kind: 'crisp', scheme: 'blue' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
            </div>
        );
    })
    .add('Grey - bottom/right', () => {
        start({ kind: 'crisp', scheme: 'grey' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_RIGHT }} />
            </div>
        );
    })
    .add('Red - sticky', () => {
        start({ kind: 'crisp', scheme: 'red', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
            </div>
        );
    })
    .add('Orange - sticky', () => {
        start({ kind: 'crisp', scheme: 'orange', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
            </div>
        );
    })
    .add('Purple - sticky', () => {
        start({ kind: 'crisp', scheme: 'purple', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
            </div>
        );
    })
    .add('Green - sticky', () => {
        start({ kind: 'crisp', scheme: 'green', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
            </div>
        );
    })
    .add('Blue - sticky', () => {
        start({ kind: 'crisp', scheme: 'blue', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
            </div>
        );
    })
    .add('Grey - sticky', () => {
        start({ kind: 'crisp', scheme: 'grey', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
            </div>
        );
    });

storiesOf('Kind::crunch', module)
    .add('Red - top/center', () => {
        start({ kind: 'crunch', scheme: 'red' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
            </div>
        );
    })
    .add('Orange - bottom/center', () => {
        start({ kind: 'crunch', scheme: 'orange' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_CENTER }} />
            </div>
        );
    })
    .add('Red - top/left', () => {
        start({ kind: 'crunch', scheme: 'red' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_LEFT }} />
            </div>
        );
    })
    .add('Green - bottom/left', () => {
        start({ kind: 'crunch', scheme: 'green' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_LEFT }} />
            </div>
        );
    })
    .add('Blue - top/right', () => {
        start({ kind: 'crunch', scheme: 'blue' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
            </div>
        );
    })
    .add('Grey - bottom/right', () => {
        start({ kind: 'crunch', scheme: 'grey' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_RIGHT }} />
            </div>
        );
    })
    .add('Red - sticky', () => {
        start({ kind: 'crunch', scheme: 'red', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
            </div>
        );
    })
    .add('Orange - sticky', () => {
        start({ kind: 'crunch', scheme: 'orange', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
            </div>
        );
    })
    .add('Green - sticky', () => {
        start({ kind: 'crunch', scheme: 'green', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
            </div>
        );
    })
    .add('Blue - sticky', () => {
        start({ kind: 'crunch', scheme: 'blue', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
            </div>
        );
    })
    .add('Grey - sticky', () => {
        start({ kind: 'crunch', scheme: 'grey', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
            </div>
        );
    });

storiesOf('Kind::Slim', module)
    .add('Dark - top/center', () => {
        start({ kind: 'slim', scheme: 'dark' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
            </div>
        );
    })
    .add('Dark - bottom/center', () => {
        start({ kind: 'slim', scheme: 'dark' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_CENTER }} />
            </div>
        );
    })
    .add('Dark - top/left', () => {
        start({ kind: 'slim', scheme: 'dark' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_LEFT }} />
            </div>
        );
    })
    .add('Dark - bottom/left', () => {
        start({ kind: 'slim', scheme: 'dark' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_LEFT }} />
            </div>
        );
    })
    .add('Light - top/right', () => {
        start({ kind: 'slim', scheme: 'light' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
            </div>
        );
    })
    .add('Light - bottom/right', () => {
        start({ kind: 'slim', scheme: 'light' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_RIGHT }} />
            </div>
        );
    })
    .add('Dark - sticky', () => {
        start({ kind: 'slim', scheme: 'Dark', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
            </div>
        );
    })
    .add('Light - sticky', () => {
        start({ kind: 'slim', scheme: 'light', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
            </div>
        );
    });