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
    const [checked, setChecked] = useState([]);

    console.log(checked);

    const handleCheck = (id) => {
        setChecked((prev) => {
            const isChecked = checked.includes(id);
            if (isChecked) {
                return checked.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const handleSubmit = () => {
        console.log({
            ids: checked,
        });
    };

    return (
        <div style={{ padding: 32 }}>
            {courses.map((course) => (
                <div key={course.id}>
                    <input
                        type="checkbox"
                        checked={checked.includes(course.id)}
                        onChange={() => handleCheck(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit}>SUBMIT</button>
        </div>
    );
}

export default App;
