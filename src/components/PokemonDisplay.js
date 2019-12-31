import React from 'react';
import TypesDisplay from './TypesDisplay';
import MoveList from './MovesetList';
import VersionSelector from './VersionSelector';
const PokemonDisplay = (props) => {
    let name = "";
    if(props.name != null ){
        name = props.name;
    }

    return <div>
        <img src= {props.img}/>
        <div className='floatRight'>
        <h1>{name}</h1>
        <span>{props.desc}</span>
        <span> version: {props.verisonSelected}</span>
        {(props.types != null)?<TypesDisplay types={props.types}></TypesDisplay>:null}
        <div>
        {(props.moves != null)?<VersionSelector className='block' moves = {props.moves} handler = {props.versionHandler} versionSelected={props.versionSelected}></VersionSelector>:null}
        </div>
        {(props.moves != null)?<MoveList moves = {props.moves} versionSelected={props.versionSelected}></MoveList>:null}
    </div></div>;
  };
  export default PokemonDisplay;