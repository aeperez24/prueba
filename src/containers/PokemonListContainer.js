import React,{ Component }  from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid'
import leftArr from '../left.png'
import rightArr from '../right.png'
import AppBar from '@material-ui/core/AppBar'
import Card from '@material-ui/core/Card'
const limit =10;
const defaultOffset=0;

const apiUrl='https://pokeapi.co/api/v2/pokemon/';
function extractId(uri){
    const aux =uri.split('pokemon/')[1];
    return aux.substring(0, aux.length - 1);

}
function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
class PokemonListContainer extends Component {

    state = {
        offset: defaultOffset,
        count:0,
        pokelist:[]
      }

    render(){
        console.log('rendering');
    return <div style={{backgroundColor:'#6a6262'}}><div style={{width: '80%', margin: '0 auto'}}>
                <AppBar  style={{backgroundColor:"#f44336"}} position="static">
        <h1 style={{textAlign: 'center'}}>Pokemon List</h1>
        </AppBar>
    <Card style={{backgroundColor:'#c1bcbc'}}>
    <Grid container spacing={1}>
    <Grid item xs={12} sm={12} md={3}></Grid>
    <Grid item xs={2} sm={3} md={2}><div style={{margin: 'auto'}}>{this.prevPage()}</div></Grid>
    <Grid item xs={8} sm={6} md={2} ><div style={{margin: 'auto',width: '50%'}}>{this.pokelist()}</div></Grid>
    <Grid item xs={2} sm={3} md={2} ><div style={{margin: 'auto'}}>{this.nextPage()}</div></Grid>
    </Grid>
    </Card>
          </div></div>
    }

    componentDidMount() {
        console.log('component mount');
        this.updatePokeList(this.state.offset)
    }

    nextPage() {
     return <input   style={{height:'auto',width:'100%'}} type="image" src={rightArr} onClick={()=>{this.updatePokeList(this.state.offset+limit)}}></input>   
    }
    
    prevPage() {
        return <input style={{height:'auto',width:'100%'}}  type="image" src={leftArr} onClick={()=>{this.updatePokeList(this.state.offset-limit)}}></input>   
    }
    pokelist(){
        return this.state.pokelist.map(s=>
            {
                return <List>        
                  
                        <ListItemLink href={"/pokemon/"+s.id}>
                            <ListItemText primary={s.name} />
                        </ListItemLink>
                        </List>
            }
            
        )
    }   
    updatePokeList(offset){

        const apicall = apiUrl+'?offset='+offset.toString()+"&limit="+limit.toString();
        fetch(apicall)
        .then(res => res.json())
        .then(data=>{
            data.results.forEach(element => {
                element.id= extractId(element.url);
            });
            this.setState({
                'count':data.count,
                'pokelist':data.results,
                'offset':offset
            })
                console.log(data);
        })
    }
}
//TODO: agregar estilo
//TODO:obtener imagenes

export default PokemonListContainer;