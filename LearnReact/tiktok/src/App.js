import { useState } from "react";

function App() {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    const [job, setJob] = useState("");
    const [jobs, setJobs] = useState(storageJobs ?? []);


    const handleSubmit = () => {
        setJobs((prev) => {
            const newJobs = [...prev, job];

            // Lưu trong LOCALSTORAGE
            const jsonJobs = JSON.stringify(newJobs);
            localStorage.setItem("jobs", jsonJobs);
            return newJobs;
        });
        setJob("");
    };

    return (
        <div style={{ padding: 32 }}>
            <input value={job} onChange={(e) => setJob(e.target.value)} />

            <button onClick={handleSubmit} style={{ margin: 20 }}>
                Add
            </button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
