import React from 'react';

const MainLower = (props) => {
    const {album, songsList, setMainState} = props;

    const handleClick = (e,songId,songToPlay) => {
        console.log(e.target,songId,songToPlay);
        const triangle = document.querySelectorAll('.triangle');
        triangle.forEach(element => {
          element.classList.remove('active');
        });
        e.target.classList.add('active');
        setMainState(songId,songToPlay);
    }
   
    const SongsList = songsList.map(song => {
        return <li key={song.id}><div className='triangle' onClick={ (e) => {handleClick(e,song.id,song.title)} }></div> <small>0{song.id} {song.title}</small></li>;
    });

    return (
        <div className='d-flex justify-content-center'>                           
          <div className='disco pt-5'>
            <div>
                <h3>Discography</h3>
                <ul>
                  <li className='row mt-3'>
                    <div className='col-sm-6'>
                      Surprise Without Flaws
                      <div className='circle'></div>
                    </div>
                    <div className='col-sm-6'>
                      2015
                      <button className='listen-btn ml-4'>Listen</button>
                      <button className='buy-btn ml-3'>Buy</button>
                    </div>
                  </li> 
                  <li className='row mt-3'>
                    <div className='col-sm-6'>
                      Mists Of A Shadow
                      <div className='circle'></div>
                    </div>
                    <div className='col-sm-6'>
                      2014
                      <button className='listen-btn ml-4'>Listen</button>
                      <button className='buy-btn ml-3'>Buy</button>
                    </div>
                  </li> 
                  <li className='row mt-3'>
                    <div className='col-sm-6'>
                      Heroes Of The Sun
                      <div className='circle'></div>
                    </div>
                    <div className='col-sm-6'>
                      2013
                      <button className='listen-btn ml-4'>Listen</button>
                      <button className='buy-btn ml-3'>Buy</button>
                    </div>
                  </li> 
                  <li className='row mt-3'>
                    <div className='col-sm-6'>
                      Picture Of The Past
                      <div className='circle'></div>
                    </div>
                    <div className='col-sm-6'>
                      2012
                      <button className='listen-btn ml-4'>Listen</button>
                      <button className='buy-btn ml-3'>Buy</button>
                    </div>
                  </li>         
                </ul>  
            </div>
          </div> 
          <div className="songsList pt-5">
            <div className='pl-5'>   
              <p className="album">{album}</p>
              <ul>
                {SongsList}   
              </ul> 
            </div>
          </div> 
        </div>  
    )
}

export default MainLower
