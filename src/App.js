import React from 'react';
import logo from './logo.svg';
import PokemonContainer from './containers/PokemonContainer'
import PokemonListContainer from './containers/PokemonListContainer'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function range(start, end) {
  var ans = [];
  for (let i = start; i <= end; i++) {
      ans.push(i);
  }
  return ans;
}

function App() {
 
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact 
          component={PokemonListContainer}/>
          <Route path='/pokemon/:id' 
          render={(props)=><PokemonContainer pkId={props.match.params.id}/>} />
        </Switch>
      </BrowserRouter>
    );
  // <PokemonListContainer/>
    //<PokemonContainer pkId='3' ></PokemonContainer>
 
}

export default App;
