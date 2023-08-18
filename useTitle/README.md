# @sooks/use-title

React Hook to update your document's title.

## Installation

yarn

``` yarn add @sooks/use-title ```

npm

``` npm i @sooks/use-title ```

## Usage

```js 
    import React from "react";
    import useTitle from "@sooks/use-title";

    function App() {
        useTitle("Welcome");
        return <h1>Welcome</h1>;
    }
```

## Argument

| Argument   | Type     | Description                                            | Required |
| ---------- | -------- | ------------------------------------------------------ | -------- |
| title    | string   | The title you want to use on your document  | yes      |
