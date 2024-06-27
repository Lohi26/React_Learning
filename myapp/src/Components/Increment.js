import React from 'react'
let count=10;
function Increment(props)
{
    return <>
        <p>{props.children}</p>
        <h1>{count}</h1>
    </>
}
export default Increment;