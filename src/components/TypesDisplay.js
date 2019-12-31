import React from 'react';



const TypesDisplay = (props) => {
    const types = props.types.map((s)=><li>{s}</li>);
return<ul>{types}</ul>

}

export default TypesDisplay;