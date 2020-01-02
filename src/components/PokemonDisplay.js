import React from 'react';
import TypesDisplay from './TypesDisplay';
import MoveList from './MovesetList';
import VersionSelector from './VersionSelector';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { typography } from '@material-ui/system';
import Grid from '@material-ui/core/Grid'

const PokemonDisplay = (props) => {
    let name = "";
    if(props.name != null ){
        name = props.name;
    }
//COMO MODIFICAR LA PALETA
    return <div>
        
        <AppBar  style={{backgroundColor:"#f44336"}} position="static">
        <h1 style={{textAlign: 'center'}}>Pokemon detail</h1>
        </AppBar>
        <Card style={{display: 'flex'}}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
            <img src={props.img} style={{height:'auto',width:'100%'}}/>
        </Grid>

        <Grid item xs={12} sm={6} md={9}>
       
        <CardContent >
       
       <typography component="h5">
           <h1>{name}</h1>
       </typography>
       <typography>
           <span>{props.desc}</span>    
       </typography>
       {(props.types != null)?<TypesDisplay types={props.types}></TypesDisplay>:null}
       {(props.moves != null)?<VersionSelector className='block' moves = {props.moves} handler = {props.versionHandler} versionSelected={props.versionSelected}></VersionSelector>:null}

       </CardContent>
       </Grid>

        </Grid>
        
        </Card>        
       
       <Card>
       {(props.moves != null)?<MoveList moves = {props.moves} versionSelected={props.versionSelected}></MoveList>:null}

        </Card> 
        </div>
  };
  export default PokemonDisplay;