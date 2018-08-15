import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, configureActions } from '@storybook/addon-actions';
import ButterToast, { Cinnamon } from '../src';
import { POS_RIGHT, POS_CENTER, POS_LEFT, POS_TOP, POS_BOTTOM } from '../src/ButterToast/styles';
import Funnies from 'funnies';
import { sample } from 'lodash';
import './styles.scss';

const intervals = [];

const onDismiss = action('onDismiss callback:');
const onClick = action('onClick callback:');


const funnies = new Funnies();
function start({ kind, sticky = false, scheme, icon, dismissible = true } = {}) {
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
        const base = { sticky, onClick, onDismiss };

        if ('_btTrays' in window) {
            for (const tray in window._btTrays) {
                if (kind === 'crisp') {
                    window._btTrays[tray].push({
                        ...base,
                        content: <Cinnamon.Crisp scheme={style}
                            title="crisp example"
                            dismissible={dismissible}
                            content={content}
                            icon={icon ? Icon : null}/> 
                    });
                }

                if (kind === 'crunch') {
                    window._btTrays[tray].push({
                        ...base,
                        content: <Cinnamon.Crunch scheme={style}
                            title="crunch example"
                            dismissible={dismissible}
                            content={content}
                            icon={icon ? Icon : null}/> 
                    });
                }
                if (kind === 'slim') {
                    window._btTrays[tray].push({
                        ...base,
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
    .add('Red', () => {
        start({ kind: 'crisp', scheme: 'red', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Orange', () => {
        start({ kind: 'crisp', scheme: 'orange', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Purple', () => {
        start({ kind: 'crisp', scheme: 'purple', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Green', () => {
        start({ kind: 'crisp', scheme: 'green', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Blue', () => {
        start({ kind: 'crisp', scheme: 'blue', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Grey', () => {
        start({ kind: 'crisp', scheme: 'grey', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });
storiesOf('Kind::Crisp::Non dismissible', module)
    .add('Red', () => {
        start({ kind: 'crisp', scheme: 'red', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Orange', () => {
        start({ kind: 'crisp', scheme: 'orange', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Purple', () => {
        start({ kind: 'crisp', scheme: 'purple', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Green', () => {
        start({ kind: 'crisp', scheme: 'green', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Blue', () => {
        start({ kind: 'crisp', scheme: 'blue', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Grey', () => {
        start({ kind: 'crisp', scheme: 'grey', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });
storiesOf('Kind::Crisp::Sticky', module)
    .add('Red', () => {
        start({ kind: 'crisp', scheme: 'red', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Orange', () => {
        start({ kind: 'crisp', scheme: 'orange', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Purple', () => {
        start({ kind: 'crisp', scheme: 'purple', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Green', () => {
        start({ kind: 'crisp', scheme: 'green', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Blue', () => {
        start({ kind: 'crisp', scheme: 'blue', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Grey', () => {
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
    .add('Red', () => {
        start({ kind: 'crunch', scheme: 'red', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Orange', () => {
        start({ kind: 'crunch', scheme: 'orange', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Green', () => {
        start({ kind: 'crunch', scheme: 'green', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Blue', () => {
        start({ kind: 'crunch', scheme: 'blue', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Grey', () => {
        start({ kind: 'crunch', scheme: 'grey', icon: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });
storiesOf('Kind::crunch::Non dismissible', module)
    .add('Red', () => {
        start({ kind: 'crunch', scheme: 'red', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Orange', () => {
        start({ kind: 'crunch', scheme: 'orange', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Green', () => {
        start({ kind: 'crunch', scheme: 'green', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Blue', () => {
        start({ kind: 'crunch', scheme: 'blue', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Grey', () => {
        start({ kind: 'crunch', scheme: 'grey', icon: true, dismissible: false });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });
storiesOf('Kind::crunch::Sticky', module)
    .add('Red', () => {
        start({ kind: 'crunch', scheme: 'red', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Orange', () => {
        start({ kind: 'crunch', scheme: 'orange', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Green', () => {
        start({ kind: 'crunch', scheme: 'green', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Blue', () => {
        start({ kind: 'crunch', scheme: 'blue', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Grey', () => {
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
    .add('Dark', () => {
        start({ kind: 'slim', scheme: 'dark', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    })
    .add('Light', () => {
        start({ kind: 'slim', scheme: 'light', sticky: true });
        return (
            <div>
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_CENTER }} />
                <button onClick={dismissAll}>Dismiss All</button>
            </div>
        );
    });