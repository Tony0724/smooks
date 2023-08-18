# @smooks/use-title

React Hook to update your document's title.

## Installation

yarn

``` yarn add @smooks/use-title ```

npm

``` npm i @smooks/use-title ```

## Usage

```js 
    import React from "react";
    import useTitle from "@smooks/use-title";

    function App() {
        useTitle("Welcome");
        return <h1>Welcome</h1>;
    }
```

## Argument

| Argument   | Type     | Description                                            | Required |
| ---------- | -------- | ------------------------------------------------------ | -------- |
| title    | string   | The title you want to use on your document  | yes      |
