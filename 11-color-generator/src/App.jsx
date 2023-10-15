import { useState } from "react";
import Values from "values.js";
import Form from "./Form";
import ColorList from "./ColorList";

const App = () => {
    const [colors, setColors] = useState(new Values("#f15025").all(10));
    return (
        <main>
            <Form />
            <ColorList />
        </main>
    );
};
export default App;
