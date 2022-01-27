import { useState } from "react";

// const gifts = [
// 	'CPU i9',
// 	'RAM 32GB RGB',
// 	'RGB Keyboard',
// ]

function App() {
    const [name, setName] = useState("");
    console.log(name);
    return (
        <div style={{ padding: 20 }}>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></input>
            <button onClick={() => setName("Dang Chi Thanh")}>Change</button>
        </div>
    );
}

export default App;
