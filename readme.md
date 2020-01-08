# resizable-textfield 
![stable](https://img.shields.io/badge/v1.1.1-stable-green) ![licence](https://img.shields.io/badge/status-success-blue)


A React package that allows you to have a textfield with the length of its text dynamically.

  - Useful to create search fields
  - Lightweight
  - Customizable

### Example usage

```
npm i "resizable-textfield"
```

```
import ResizableTexField from "resizable-textfield";

const App = () => {
    return (
        <ResizableTexField placeholder="bar foo" />
    );
};
```

#### Important props
 - `value (String)`: Initial value (Optional) *
 - `placeholder (String)`: Placeholder (Optional) *
 - `styles (Object)`: Custom styles (Optional) 

(*) At least one of these fields must be passed or an exception will be thrown. 


