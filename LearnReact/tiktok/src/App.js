import { useState } from "react";

// const gifts = [
// 	'CPU i9',
// 	'RAM 32GB RGB',
// 	'RGB Keyboard',
// ]

const courses = [
    {
        id: 1,
        name: "Hoc HTML,CSS",
    },
    {
        id: 2,
        name: "Hoc JavaScript cơ bản",
    },
    {
        id: 3,
        name: "Hoc JavaScript cơ bản",
    },
    {
        id: 4,
        name: "Hoc React",
    },
];

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        console.log({
            name,
            email,
        });
    };

    // console.log(name);
    return (
        <div style={{ padding: 32 }}>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></input>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            ></input>
            <button onClick={handleSubmit}>SUBMIT</button>
        </div>
    );
}

export default App;
