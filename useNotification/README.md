# @smooks/use-notify

React Hook for using web browser notifications in your application.

## Installation

yarn

``` yarn add @smooks/use-notify ```

npm

``` npm i @smooks/use-notify ```

## Usage

```js
    import useNotification from '@smooks/use-notify';

    const App = () => {
        const trigerNotification = useNotification("Can I steal your kimchi?", {
            body: "I love kimchi, don't you?"
        });
        return (
            <div className="App">
                <button onClick={trigerNotification}>Hello</button>
            </div>
        );
    };
```

## Arguments

| Argument | Type | Description | Required |
| -------- | ---- | ----------- | -------- |
|  title   | string | This is a string that represents the title or heading of the notification. | yes |
|  options | object | Notification options are configuration settings that customize the appearance and behavior of a notification, such as its body, icon, and sound. | no |

**It only works when you ***<span style="color:red;">turn on the notification in Settings!***</span>**

Information about setting notification ⬇️

Window: Start > Settings > System > Notification

macOS: System Preferences > Notifications > select chrome > change notification settings

If you need some help, please write email to me:       <0724ksm@naver.com>