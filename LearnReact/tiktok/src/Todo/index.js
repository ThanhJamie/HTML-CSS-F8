import { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { addJob, setJob, deleteJob } from "./actions";
import logger from "./logger"

function App() {
    //Dispatch
    const [state, dispatch] = useReducer(logger(reducer), initState);

    const { job, jobs } = state;
    const inputRef = useRef();
    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(""));
        inputRef.current.focus();
    };
    return (
        <div style={{ padding: 20 }}>
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder="Enter todo..."
                onChange={(e) => {
                    dispatch(setJob(e.target.value));
                }}
            />
            <button style={{ marginLeft: 20 }} onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span
                            style={{ margin: "5px", cursor: "pointer" }}
                            onClick={() => dispatch(deleteJob(index))}
                        >
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
