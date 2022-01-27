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
	const [checked, setChecked] = useState(2);

	console.log(checked);
	const handleSubmit = () => {};

	// console.log(name);
	return (
		<div style={{ padding: 32 }}>
			{courses.map((course) => (
				<div key={course.id}>
					<input
						type="radio"
						checked = {checked === course.id}
						onChange={() => setChecked(course.id)}
					/>
					{course.name}
				</div>
			))}
			
			<button onClick={handleSubmit}>SUBMIT</button>
		</div>
	);
}

export default App;
