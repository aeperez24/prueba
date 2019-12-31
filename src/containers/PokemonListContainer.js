import React,{ Component }  from 'react';
const limit =10;
const defaultOffset=0;

const apiUrl='https://pokeapi.co/api/v2/pokemon/';
function extractId(uri){
    const aux =uri.split('pokemon/')[1];
    return aux.substring(0, aux.length - 1);

}
class PokemonListContainer extends Component {

    state = {
        offset: defaultOffset,
        count:0,
        pokelist:[]
      }

    render(){
        console.log('rendering');
    return <div>{this.prevPage()} {this.nextPage()} <ul>{this.pokelist()}</ul></div>
    }

    componentDidMount() {
        console.log('component mount');
        this.updatePokeList(this.state.offset)
    }

    nextPage() {
     return <button onClick={()=>{this.updatePokeList(this.state.offset+limit)}}>next</button>   
    }
    
    prevPage() {
        return <button onClick={()=>{this.updatePokeList(this.state.offset-limit)}}>previous</button>   
    }
    pokelist(){
        return this.state.pokelist.map(s=>
            {
                return <li ><a href={"/pokemon/"+s.id}>{s.name}</a></li>
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