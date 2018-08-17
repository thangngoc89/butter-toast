# Butter Toast

Butter Toast is a toast notification system for React apps that puts an emphasis on ease of use, customizability and butter-smooth transitions.

Butter Toast comes with a few built-in styles which you can apply, and you can also use any component for creating the notifications.

## V3 update
V3 is a near-complete re-write of butter-toast. It brings with it a better api and more stability.

## Feaatures
* Rendering the toast-notifications globally right under body to prevent stacking-context collision.
* Rendering the tost notifications in-context, for positioning relative to parent component.
* Multiple notification tray support, they can be namespaced for separate controls.
* Emitting notifications from every part of your application, not just from the container component.
* Multiple built-in themes.
* Sticky toast notifications.
* Custom on-dismiss and on-click callbacks.
* Custom timeouts for toasts.
* Toasts pause on hover.

## Installation

```
npm install --save butter-toast
```

## Terminology:
* **Toast**: A single notification in the stack.
* **Tray**: The containing element of a stack of toasts.

# Usage

## Creating a notification tray
To use Butter Toast you first need to instantiate a notififcation tray. You do this by rendering the `<ButterToast/>` Component. By default it will append your current tray directly under `body` unless you pass the `renderInContext` prop.

### ButterToast props:
| Prop | Type | Default | Optional | Description
|------|------|----------|------------
| `renderInContext` | `boolean` | `true` | Y | Determines whether the tray should be renderd relative to `body` or to its parent component
| `className` | `string` | '' | Y | Adds a class to the tray for custom styling
| `nameSpace` | `string` | '' | Y | Scopes the tray under a namespace, useful when multiple trays are present on the page.
| `position` | `object` | `null` | `{ horizontal: 'POS_RIGHT', vertical: 'POS_TOP' }` | Y | Determines the location of the tray on the screen. When null is passed, no positioning will be applied.
| `timeout` | `number` | `6000` | Y | The default time in ms for toasts in the tray. Can be overridden individually.
| `spacing` | `number` | `10` | Y | The distance in pixels between each toast in the tray.

```jsx
import React, { Component } from 'react';
import ButterToast from 'butter-toast';

class MyComponent extends Component {
    render() {
        return (
            <div>
                <ButterToast/>
            </div>
        );
    }
}
```

### Positioning the tray
By default a tray can be aligned to any of the four corners of the screen, and to the top-center, and bottom-center. You can of course use any positioning you would like via css.
