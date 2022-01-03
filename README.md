# Angular Virtual Keyboard
![](https://img.shields.io/badge/build-passing-green)
![](https://img.shields.io/badge/dependencies-upto%20date-yellowgreen)

![](https://raw.githubusercontent.com/parwinder-singh/virtual-keyboard/master/projects/virtual-keyboard-demo/src/assets/keyboard.png "Virtual Keyboard")
<br><br>Simple on screen virtual keyboard for Angular projects.

## Demo

Want to try out the demo before using it ? Not to worry, here is the link which you can use to play around.
<br>
[Dropwizard](http://www.google.com)

### Installing

Step-by-step guide on how to install and use this package.

```text
1. Open terminal inside your project directory.
```
```text
2. npm install @ng/virtual-keyboard
```

This will take few seconds or minutes to install. Once done, inspect your package.json file to verify that package is installed
correctly. You should see it as a dependencies as follow:
```json
{
  "dependencies": {
    ...
    "@ng/virtual-keyboard": "<version>"
  }
}
```
If you are able to see this, that means, the package was installed correctly. You are all set!

## Usage Guide

Minimal guide on how to use this package in your code. This library consist of single exposing
directive, which you can use on your fields to extend its functionality.

1. Open any HTML file and navigate to the input field you want to attach the keyboard

2. Add _**virtualKeyboard**_ directive to the input field as shown below:
```html
<input type="text" virtualKeyboard>
```
3. Add KeyboardModule to the imports array of your module or to your root module (app.module.ts) as shown.
```typescript
@NgModule({
  imports: [
    KeyboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
4. Run `ng serve` and test on your browser at `localhost:4200`

### Configurations

Here are some configurations which you can use to change the keyboard behavior.<br>
**Options**
1. `numeric`
   * **Type**: Boolean
   * **Purpose**: Use on input type number fields and disable text typing
    ```html
     <input type="number" [numeric]="true" virtualKeyboard>
   ```
2. `disableVirtualKeyboard`
   * **Type**: Boolean
   * **Purpose**: To enable/disable and toggle between default and virtual keyboard
    ```html
     <input type="text" virtualKeyboard [disableVirtualKeyboard]="true">
   ```

**Events**
1. `onClose`
   * Event is fired when user click on close button to close the keyboard.
2. `onKeyClick`
   * Event is fired when user press any key using click or press
   
### Side note

Author of this project is working on adding new enhancements and fixes to this project. It might contain some unexpected and
uncovered scenarios, so please feel free to open issues for bugs and improvements.


## Authors
* **Parwinder Singh** - *Angular Developer*

