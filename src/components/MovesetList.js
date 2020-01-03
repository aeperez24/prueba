import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

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
    const tutorMovesComponent =<Card style={{backgroundColor:'rgb(227, 226, 226)'}}> 
         <Typography gutterBottom variant="h5" component="h2">
            Tutor Moves
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <ul>{getNames(tutorMoves)}</ul>
          </Typography>
        </Card>;
    const machineComponent = <Card style={{backgroundColor:'rgb(227, 226, 226)'}}>
          <Typography gutterBottom variant="h5" component="h1">
          Machine Moves
          </Typography>
    
          <Typography variant="body2" color="textSecondary" component="p">
          <ul>{getNames(machineMoves)}
          </ul>
          </Typography>
        </Card>;

    const lvlMovesComponent = <Card style={{backgroundColor:'rgb(227, 226, 226)'}}>
    <Typography gutterBottom variant="h5" component="h1">
                  Level Moves</Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  <ul>{getNames(lvlMoves)}</ul>
      </Typography>
    </Card>;

return <Grid container spacing={4}>
    <Grid item xs={12} sm={12} md={4}>{lvlMovesComponent}</Grid>
    <Grid item xs={12} sm={12} md={4}>{machineComponent}</Grid>
    <Grid item xs={12} sm={12} md={4}>{tutorMovesComponent}</Grid>
      
    </Grid>
}

export default MovesetList;