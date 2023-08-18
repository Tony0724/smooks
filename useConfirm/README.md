# @sooks/use-confirm
React Hook to ask the user for a confirmation before executing a function.

## Installation
yarn

``` yarn add @sooks/use-confirm ```

npm

``` npm i @sooks/use-confirm ```

## Usage

```js 
    import React from "react";
    import useConfirm from "@sooks/use-confirm";

    function App() {
        const deleteWorld = () => console.log("Deleting world...");
        const confirmDelete = useConfirm("Are you sure?", deleteWorld);
        return <button onClick={confirmDelete}>Delete the world</button>;
    }
```

## Argument

| Argument   | Type     | Description                                            | Required |
| ---------- | -------- | ------------------------------------------------------ | -------- |
| message    | string   | Message to show the user on the confirmation prompt  | yes      |
| onConfirm  | function | Function to be executed when the user confirms       | yes      |
| onCancel   | function | Function to be executed when the user cancels        | no       |

## Return

| Return Value   | Type     | Description                                            | Default Value |
| ---------- | -------- | ------------------------------------------------------ | -------- |
| function    | function   | Function wrapped around the confirmation logic	  | null      |
