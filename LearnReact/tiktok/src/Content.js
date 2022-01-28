import { useEffect, useState } from "react";


function Content() {
    const [countDown, setcountDown] = useState(180)

    useEffect(() => {
        const timerId = setInterval(() => {
            setcountDown(prevState => prevState - 1);
        }, 1000)

        return () => clearInterval(timerId)
    }, [])

    return (
        <div>
            <h1>{countDown}</h1>
        </div>
    );
}

export default Content;
