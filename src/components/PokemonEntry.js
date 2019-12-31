import react, { Fragment } from 'react';

const PokemonEntry=(props)=>{
return <Fragment>
    <img src={props.image}></img> <span>{props.name}</span>
</Fragment>
}
export default PokemonEntry;