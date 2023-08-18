# @smooks/use-tabs

React hook for handling tab navigation.

## Installation

yarn

``` yarn add @smooks/use-tabs ```

npm

``` npm i @smooks/use-tabs ```

## Usage

```js
    const content = [
        {
            tab: "Section 1",
            content: "I'm the content of the Section 1"
        },
        {
            tab: "Section 2",
            content: "I'm the content of the Section 2"
        }
    ];
    
    const Tab = () => {
    const { currentItem, changeItem } = useTabs(0, content);
    return (
        <div className="App">
            {content.map((section, index) => (
            <button onClick={() => changeItem(index)}>{section.tab}</button>
            ))}
        <div>{currentItem.content}</div>
        </div>
    );
};
```