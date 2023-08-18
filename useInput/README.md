# @smooks/use-input

React Hook for simplifying input state management.

## Installation

yarn

``` yarn add @smooks/use-input ```

npm

``` npm i @smooks/use-input ```

## Usage

```js
    import useInput from '@smooks/use-input';

    const validator = (value) => !value.includes("@");
    const name = useInput("Mr.", validator);
    return (
        <div className="App">
            <h1>Hello</h1>
            <input placeholder="Name" {...name.props}/>
        </div>
    );
```

## Argument

| Argument | Type | Description | Required |
| -------- | -------- | -------- | -------- |
| initialValue | string | The default or initial value set for an input field before user interaction. | yes |
| validator | function |  A custom function used to validate user input, ensuring it meets specific criteria or constraints. | yes |