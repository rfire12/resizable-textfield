# resizable-textfield 
![stable](https://img.shields.io/badge/v1.0.11-stable-green) ![licence](https://img.shields.io/badge/status-success-blue)


A React package that allows you to have a textfield with the length of its text dynamically.

  - Useful to create search fields
  - Lightweight
  - Customizable

### Example usage

```
npm i "resizable-textdield"
```

```
import ResizableTexField from "resizable-textdield";

const App = () => {
    return (
        <ResizableTexField placeholder="bar foo" />
    );
};
```

#### Props
 - `value (String)`: Initial value (Optional) *
 - `placeholder (String)`: Placeholder (Optional) *
 - `styles (Object)`: Custom styles (Optional) 

(*) At least one of these fields must be passed or an exception will be thrown. 

