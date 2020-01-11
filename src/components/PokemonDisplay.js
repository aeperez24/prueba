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
import leftArr from '../left.png'
import rightArr from '../right.png'
import upArr from '../up.png'
import { Redirect } from 'react-router-dom'

const POKEMON_URI="/pokemon/"

function nextPage(pkId) {
    const id=POKEMON_URI+String(parseInt(pkId)+1);
    return <a href={id}><input   style={{height:'auto',width:'100%'}} type="image" src={rightArr} onClick={()=>{}}></input> </a>  
   }
   
function  prevPage(pkId) {
    const id=POKEMON_URI+String(parseInt(pkId)-1);
       return <a href={id}><input style={{height:'auto',width:'100%'}}  type="image" src={leftArr} onClick={()=>{
       }}></input></a>   
   }
function  upPage(){
       return <a href="/"><input style={{height:'auto',width:'100%'}}  type="image" src={upArr} onClick={()=>{}}></input></a>
   }
   
const PokemonDisplay = (props) => {
    let name = "";
    if(props.name != null ){
        name = props.name;
    }
    console.log(props);
//COMO MODIFICAR LA PALETA
    return <div style={{width: '80%', margin: '0 auto'}}>
        
        <AppBar  style={{backgroundColor:"#f44336"}} position="static">
        <h1 style={{textAlign: 'center'}}>Pokemon detail</h1>
        </AppBar>
        <Card style={{backgroundColor:'#c1bcbc'}}>
        <Grid container spacing={1}>
    <Grid item xs={2} sm={2} md={2}><div style={{margin: 'auto'}}>{prevPage(props.pkId)}</div></Grid>
    <Grid item xs={3} sm={3} md={3}><div style={{margin: 'auto'}}></div></Grid>
    <Grid item xs={2} sm={2} md={2}><div style={{margin: 'auto'}}>{upPage()}</div></Grid>
    
    <Grid item xs={3} sm={3} md={3}><div style={{margin: 'auto'}}></div></Grid>

    <Grid item xs={2} sm={2} md={2} ><div style={{margin: 'auto'}}>{nextPage(props.pkId)}</div></Grid>
    </Grid>
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
       
       </CardContent>
        <CardContent>
        <div style={{textAlign: 'center'}}>
        {(props.moves != null)?<VersionSelector className='block' moves = {props.moves} handler = {props.versionHandler} versionSelected={props.versionSelected}></VersionSelector>:null}
        </div>
       {(props.moves != null)?<MoveList moves = {props.moves} versionSelected={props.versionSelected}></MoveList>:null}
        </CardContent>
       </Grid>

        </Grid>
        
        </Card>        
       
        </div>
  };
  export default PokemonDisplay;