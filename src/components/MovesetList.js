import React, { Fragment } from 'react';
import { func } from 'prop-types';

const MovesetList=(props)=>{
   
   const getNames = function(moves){
    return moves.map(move=><li>{move.name}</li>);
   }
   
    const filtered = (props.versionSelected==null)? 
        props.moves:
        props.moves.filter(s=> s.versions.filter(v=>v.name===props.versionSelected).length>0)
        .map(
            s=>{
                const move={...s};
                move.versions = s.versions.filter(v=>v.name===props.versionSelected);
                return move;
            }
        );
    
    console.log(filtered);
    const machineMoves = filtered.filter(s=>s.versions.filter(v=>v.method==='machine').length>0);
    const lvlMoves = filtered.filter(s=>s.versions.filter(v=>v.method==='level-up').length>0);
    const tutorMoves = filtered.filter(s=>s.versions.filter(v=>v.method==='tutor').length>0);
    console.log(machineMoves);
    const tutorMovesComponent = <div className='inline'><h3>tutor</h3><ul>{getNames(tutorMoves)}</ul></div>;
    const machineComponent = <div className='inline' ><h3>machine</h3><ul>{getNames(machineMoves)}</ul></div>;
    const lvlMovesComponent = <div className='inline'><h3>level</h3><ul>{getNames(lvlMoves)}</ul></div>;

return <Fragment className='block'>{lvlMovesComponent} {machineComponent} {tutorMovesComponent}</Fragment>
}

export default MovesetList;