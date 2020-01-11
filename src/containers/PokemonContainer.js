
import React,{ Component }  from 'react';
import PokemonDisplay from '../components/PokemonDisplay'

class PokemonContainer extends Component {
    apiImg = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';//TODO VER COMO VOLVER CONSTANTE
    apiInfo ='https://pokeapi.co/api/v2/';//TODO VER COMO VOLVER CONSTANTE
    state = {
        img: null,
        info:null,
        versionSelected:null
      }
    handleVersion = this.handleChangeVersionSelected.bind(this);  

    componentDidMount() {
        const apicall = this.apiInfo + "pokemon/"+this.props.pkId;
        fetch(apicall)
        .then(res => res.json())
        .then((data) => {
          this.setState({ info: data });
          const specApi= data.species.url;
          fetch(specApi)
            .then(res=>res.json())
            .then((data) => {
              this.setState({specInfo: data });
            })
        })
        .catch(console.log)//TODO FIX ESTO
      }

    handleChangeVersionSelected(event) {
        this.setState({versionSelected: event.target.value});
      }
    render(){
        const padded = this.props.pkId.padStart(3,'0');
        const urlImg = this.apiImg + padded + ".png";
        let name;
        let desc;
        let types =[];
        let moves=[];
        if(this.state.info != null){
          name = (this.state.info!=null?this.state.info.name:null);
          types= this.state.info.types.map(s=>s.type.name);
          moves = this.state.info.moves.map((s)=>{
            const moveAux={}
            const versions = s.version_group_details.map((det)=>{
              const version = {};
              version.level = det.level_learned_at;
              version.name = det.version_group.name;
              version.method = det.move_learn_method.name;
              version.method_url=det.move_learn_method.utl;
              return  version;
            });
            moveAux.name = s.move.name;
            moveAux.versions= versions;
            return moveAux;
          })
        }

        if(this.state.specInfo != null) {;
            let arr = this.state.specInfo
            .flavor_text_entries;
            desc = arr.find((s)=>s.language.name=='en').flavor_text;
        }
        return<div style={{backgroundColor:'#6a6262'}}> <PokemonDisplay name={name} img={urlImg} desc={desc} types={types} moves={moves} versionSelected={this.state.versionSelected} versionHandler={this.handleVersion} pkId={this.props.pkId}/>
        </div>
    }

}


export default PokemonContainer;