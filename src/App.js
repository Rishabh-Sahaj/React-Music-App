import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
 
  constructor(){
    super()
    this.state = {
      album: 'Surprise Without Flaws',
      songs: [
        {id: 1, title: 'Clouds In The Forest'},
        {id: 2, title: 'Rat In The River'},
        {id: 3, title: 'Giants And Companions'},
        {id: 4, title: 'Ashamed Of Light'},
        {id: 5, title: 'Doubting The Forests'},
        {id: 6, title: 'Crimials Of The Lake'},
        {id: 7, title: 'Curse Of Eternity'},
        {id: 8, title: 'Fog In Town'},
        {id: 9, title: 'Serpent In The Mountains'},
      ]
    }
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Header /> 
          <Main album={this.state.album} songsList={this.state.songs} />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;

//Always have tags like <Header /> in capitalised only, like here, <header /> was not working before.
