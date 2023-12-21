'use client';

import { useState } from "react";

export default function Count() {
    const [count, setCount] = useState(0);
    console.log('hello------client');
    return (
        <>  
            <p>{count}</p>
            <button onClick={() => setCount((num)=> num+1)}>숫자증가시키기</button>
        </>
    );
}

