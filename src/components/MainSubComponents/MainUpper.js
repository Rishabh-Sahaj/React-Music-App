import React from 'react';
import Cd from '../../cd.png';
import Rewind from '../../rewind.png';
import Pause from '../../pause.png';
import Forward from '../../forward.png';

const MainUpper = (props) => {

    const {album, currentSong} = props;

    window.onload = function(){
        const seekBar = document.querySelector(".fill"); 
        seekBar.style.width = '100%';
    }

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

export default MainUpper
