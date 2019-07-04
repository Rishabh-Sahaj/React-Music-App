import React, { Component } from 'react';
// import Cd from '../cd.png';
import MainUpper from './MainSubComponents/MainUpper';
import MainLower from './MainSubComponents/MainLower';

class Main extends Component {

  constructor(){
    super()
    this.state = {
      id: 1,
      currentSong: 'Clouds In The Forest'
    }
  }

    setMainState = (id, currentSong) => {
      this.setState({
        id,
        currentSong
      })
    }
    // setPlayingOnState = (playing) => {
    //   this.setState({
    //     playing
    //   })
    // }

    render(){
    
        const {album, songsList} = this.props;
        console.log(album, songsList);
         
        console.log(this.state);
        return (
          <div className="main">    
            <MainUpper album={album} currentSong={this.state} />
            <MainLower album={album} songsList={songsList} setMainState ={this.setMainState} />
          </div>
        );
      }
}

export default Main;