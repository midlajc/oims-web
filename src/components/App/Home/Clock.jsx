import React, { useEffect, useState } from "react";

function Clock() {
    const [clockState, setClockState] = useState();
    const [dateState, setDateState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            setClockState(date.toLocaleTimeString());
            setDateState(date.toLocaleDateString("en-US", options));
        }, 1000);
    }, []);

    return (
        <div>
            <div style={{ fontSize: "55px", margin: "0" }}>
                {clockState}
            </div>
            <div>
                {dateState}
            </div>
        </div>
    )
}

export default Clock;