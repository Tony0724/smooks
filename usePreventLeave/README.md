# @smooks/use-prevent-leave

React Hook to prompt the user for confirmation before leaving the page. Useful when changes haven't been saved.

## Installation

yarn

``` yarn add @smooks/use-prevent-leave ```

npm

``` npm i @smooks/use-prevent-leave ```

## Usage

```js
    import React from "react";
    import usePreventLeave from "@smooks/use-prevent-leave";

    function App() {
        const { enablePrevent, disablePrevent } = usePreventLeave();
        const saveChanges = async () => {
            enablePrevent();
            await sendToApi();
            disablePrevent();
        };
        return <button onClick={saveChanges}>Save changes</button>;
    }
```

## Return

| Return Value | Type | Description |
| -------- | -------- | -------- |
| Functions | Object | A object containing functions ```enablePrevent``` and ```disablePrevent```, use this functions to enable/disable the leaving prevention
 |