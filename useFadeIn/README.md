# @smooks/use-fadein

A React hook that applies a fade-in animation effect to elements when they are mounted or become visible.

## Installation

yarn

``` yarn add @smooks/use-fadein ```

npm

``` npm i @smooks/use-fadein ```

## Usage

```js
    import useFadeIn from '@smooks/use-fadein';

    const FadeIn = () => {
        const fadeInH1 = useFadeIn(1, 2);
        const fadeInP = useFadeIn(5, 10);
        return (
            <>
            <div className="App">
                <h1 {...fadeInH1}>Hello</h1>
                <p {...fadeInP}>Loream ipsum lalalala</p>
            </div>
            </>
        );
    };
```

## Argument

| Argument   | Type     | Description                                            | Required |
| ---------- | -------- | ------------------------------------------------------ | -------- |
| duration    | number   | The length of time an action, process, or effect lasts.  | yes      |
| delay  | number | The amount of time before an action or effect takes place.       | yes      |