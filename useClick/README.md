# @smooks/use-click

React Hook to detect click of element.

## Installation

yarn

``` yarn add @smooks/use-click ```

npm

``` npm i @smooks/use-click ```

## Usage

```js
    import useClick from '@smooks/use-click';

    const Click = () => {
    const sayHello = () => alert("Element was clicked!");
    const title = useClick(sayHello);
    return (
        <>
            <div className="App">
                <h1 ref={title}>Hello</h1>
            </div>
            <Link to="/"><button>go to home</button></Link>
        </>
    );
};
```

## Argument

| Argument | Type | Description | Required |
| -------- | -------- | -------- | -------- |
| onClick | function | A function that start when click event is happened. | yes |