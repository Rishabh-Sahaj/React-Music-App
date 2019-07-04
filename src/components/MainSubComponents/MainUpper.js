import React, { Component } from 'react';
import Cd from '../../cd.png';
import Rewind from '../../rewind.png';
import Pause from '../../pause.png';
import Forward from '../../forward.png';

class MainUpper extends Component {
    constructor(){
      super()
      this.state = {
        seekbarReset: true
      }
    }
    componentDidMount(){
      this.seekbarReset();
    }

    seekbarReset = () => {
      const seekBar = document.querySelector(".fill");
      // seekBar.style.transition = 'none'; 
      // seekBar.style.width = 0;
      // window.onload = () => {
      //   if(this.state.seekbarReset) {
      //     seekBar.style.transition = 'width 2s linear'; 
      //     seekBar.style.width = '100%';
      //   }
      // };
      let width = 0;
      seekBar.style.width = width;
		  const id = setInterval(frame, 10);
		  function frame() {
		    if (width === 100) {
          width = 0;
          seekBar.style.width = width;
		      clearInterval(id);
		    } else {
		      width++; 
		      seekBar.style.width = width + '%'; 
		    }
		  }
    }

    componentDidUpdate(){   
      this.seekbarReset();
    }
    render() {
      const {album, currentSong} = this.props;
      return (
        <div className='d-flex justify-content-center'>                            
            <div className='cd_img pt-5'>
              <div><img src={Cd} className="d-block w-100 img-fluid" alt="..." />    </div>
            </div> 
            <div className="player pt-5">
              <div className='pl-5'>
                <h3>Now Playing</h3>    
                <p className="album">{album}</p>
                <p className="song_title">0{currentSong.id}&nbsp; {currentSong.currentSong}</p>
                <div className='controls text-center'>
                  <img className='mr-4' src={Rewind} alt="..." width='40px'></img>
                  <img className='mr-4' src={Pause} alt="..." width='60px'></img> 
                  <img src={Forward} alt="..." width='40px'></img>  
                </div>
                <div className="seek_bar">
                    <div className="fill">
                      <div className="handle"></div>	
                    </div>
                </div>
            </div>
            </div> 
        </div> 
      );
    }
}

export default MainUpper
