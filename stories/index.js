import React from 'react';
import { storiesOf } from '@storybook/react';
import ButterToast, { Cinnamon } from '../src';
import { POS_RIGHT, POS_CENTER, POS_LEFT, POS_TOP, POS_BOTTOM } from '../src/ButterToast/styles';
import Funnies from 'funnies';
import { sample } from 'lodash';
import './styles.scss';

const intervals = [];

const funnies = new Funnies();
function start({ kind, sticky = false, scheme, icon } = {}) {
    let interval;
    intervals.forEach(clearInterval);
    intervals.length = 0;

    const chosenIcon = sample(['trash', 'pencil', 'info', 'times', 'warning', 'check', 'phone', 'bolt', 'circle-thin', 'ellipsis-h', 'wifi']);

    function Icon() {
        return <i className={`fa fa-${chosenIcon}`}/>
    }

    let counter = 0;

    const fire = () => {
        counter += 1;

        if (sticky && counter > 4) {
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
                            content={content}
                            icon={icon ? Icon : null}/> 
                    });
                }

                if (kind === 'crunch') {
                    window._btTrays[tray].push({
                        sticky,
                        content: <Cinnamon.Crunch scheme={style}
                            title="crunch example"
                            content={content}
                            icon={icon ? Icon : null}/> 
                    });
                }
                if (kind === 'slim') {
                    window._btTrays[tray].push({
                        sticky,
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

const dismissAll = () => {
    window.dispatchEvent(new CustomEvent('ButterToast', {detail:{
	    dismiss: 'all'
    }}));
}

storiesOf('Kind::Crisp', module)
    .add('Red - top/center', () => {
        start({ kind: 'crisp', scheme: 'red' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Orange - bottom/center', () => {
        start({ kind: 'crisp', scheme: 'orange' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Purple - top/left', () => {
        start({ kind: 'crisp', scheme: 'purple' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_LEFT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Green - bottom/left', () => {
        start({ kind: 'crisp', scheme: 'green' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_LEFT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Blue - top/right', () => {
        start({ kind: 'crisp', scheme: 'blue' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Grey - bottom/right', () => {
        start({ kind: 'crisp', scheme: 'grey' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_RIGHT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });
storiesOf('Kind::Crisp::With Icon', module)
    .add('Red - With Icon', () => {
        start({ kind: 'crisp', scheme: 'red', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Orange - With Icon', () => {
        start({ kind: 'crisp', scheme: 'orange', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Purple - With Icon', () => {
        start({ kind: 'crisp', scheme: 'purple', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Green - With Icon', () => {
        start({ kind: 'crisp', scheme: 'green', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Blue - With Icon', () => {
        start({ kind: 'crisp', scheme: 'blue', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Grey - With Icon', () => {
        start({ kind: 'crisp', scheme: 'grey', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });
storiesOf('Kind::Crisp::Sticky', module)
    .add('Red - sticky', () => {
        start({ kind: 'crisp', scheme: 'red', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Orange - sticky', () => {
        start({ kind: 'crisp', scheme: 'orange', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Purple - sticky', () => {
        start({ kind: 'crisp', scheme: 'purple', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Green - sticky', () => {
        start({ kind: 'crisp', scheme: 'green', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Blue - sticky', () => {
        start({ kind: 'crisp', scheme: 'blue', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Grey - sticky', () => {
        start({ kind: 'crisp', scheme: 'grey', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });

storiesOf('Kind::crunch', module)
    .add('Red - top/center', () => {
        start({ kind: 'crunch', scheme: 'red' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Orange - bottom/center', () => {
        start({ kind: 'crunch', scheme: 'orange' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Red - top/left', () => {
        start({ kind: 'crunch', scheme: 'red' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_LEFT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Green - bottom/left', () => {
        start({ kind: 'crunch', scheme: 'green' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_LEFT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Blue - top/right', () => {
        start({ kind: 'crunch', scheme: 'blue' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Grey - bottom/right', () => {
        start({ kind: 'crunch', scheme: 'grey' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_RIGHT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });
storiesOf('Kind::crunch::With Icon', module)
    .add('Red - with icon', () => {
        start({ kind: 'crunch', scheme: 'red', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Orange - with icon', () => {
        start({ kind: 'crunch', scheme: 'orange', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Green - with icon', () => {
        start({ kind: 'crunch', scheme: 'green', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Blue - with icon', () => {
        start({ kind: 'crunch', scheme: 'blue', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Grey - with icon', () => {
        start({ kind: 'crunch', scheme: 'grey', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });
storiesOf('Kind::crunch::Sticky', module)
    .add('Red - sticky', () => {
        start({ kind: 'crunch', scheme: 'red', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Orange - sticky', () => {
        start({ kind: 'crunch', scheme: 'orange', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Green - sticky', () => {
        start({ kind: 'crunch', scheme: 'green', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Blue - sticky', () => {
        start({ kind: 'crunch', scheme: 'blue', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Grey - sticky', () => {
        start({ kind: 'crunch', scheme: 'grey', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });

storiesOf('Kind::Slim', module)
    .add('Dark - top/center', () => {
        start({ kind: 'slim', scheme: 'dark' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Dark - bottom/center', () => {
        start({ kind: 'slim', scheme: 'dark' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Dark - top/left', () => {
        start({ kind: 'slim', scheme: 'dark' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_LEFT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Dark - bottom/left', () => {
        start({ kind: 'slim', scheme: 'dark' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_LEFT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Light - top/right', () => {
        start({ kind: 'slim', scheme: 'light' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Light - bottom/right', () => {
        start({ kind: 'slim', scheme: 'light' });
        return (
            <div>
                <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_RIGHT }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });
storiesOf('Kind::Slim::Sticky', module)
    .add('Dark - sticky', () => {
        start({ kind: 'slim', scheme: 'dark', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Light - sticky', () => {
        start({ kind: 'slim', scheme: 'light', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });