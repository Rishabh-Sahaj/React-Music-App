import React from 'react';
import Boy from '../boy.png';

const Header = () => {

    return(
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              
              <div className="carousel-item active">  
                <div className="d-flex pt-5 justify-content-center">
                  <div className='carousel_image'>                   
                    <div className='position-relative'>
                      <img src={Boy} className="d-block w-100 img-fluid" alt="..." />
                      <h1>
                        <span className='fName'>CURT</span> <br /><span className='lName'>SHEARD</span>
                      </h1>
                    </div>                    
                  </div>
                  <div className='carousel_content'>                    
                    <div className='pl-5'>
                      <h3>Meet our band</h3>
                      <p>Court Sheard, swag iPhone neutra willimasburg, sriracha you probably haven't heard of them PBR&amp;B marfa seitan. Four dollor toast waferers helvetcaetsy, affogato, pinterest, Schlitz. Lorem Ipsum Dolor Sumit Elit Adipscing. Lorem Ipsum Dolor Sumit Elit Adipscing</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">  
                <div className="d-flex pt-5 justify-content-center">
                  <div className='carousel_image'>                   
                    <div className='position-relative'>
                      <img src={Boy} className="d-block w-100 img-fluid" alt="..." />
                      <h1>
                        <span className='fName'>CURT</span> <br /><span className='lName'>SHEARD</span>
                      </h1>
                    </div>                    
                  </div>
                  <div className='carousel_content'>                    
                    <div className='pl-5'>
                      <h3>Meet our band</h3>
                      <p>Court Sheard, swag iPhone neutra willimasburg, sriracha you probably haven't heard of them PBR&amp;B marfa seitan. Four dollor toast waferers helvetcaetsy, affogato, pinterest, Schlitz. Lorem Ipsum Dolor Sumit Elit Adipscing. Lorem Ipsum Dolor Sumit Elit Adipscing</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">  
                <div className="d-flex pt-5 justify-content-center">
                  <div className='carousel_image'>                   
                    <div className='position-relative'>
                      <img src={Boy} className="d-block w-100 img-fluid" alt="..." />
                      <h1>
                        <span className='fName'>CURT</span> <br /><span className='lName'>SHEARD</span>
                      </h1>
                    </div>                    
                  </div>
                  <div className='carousel_content'>                    
                    <div className='pl-5'>
                      <h3>Meet our band</h3>
                      <p>Court Sheard, swag iPhone neutra willimasburg, sriracha you probably haven't heard of them PBR&amp;B marfa seitan. Four dollor toast waferers helvetcaetsy, affogato, pinterest, Schlitz. Lorem Ipsum Dolor Sumit Elit Adipscing. Lorem Ipsum Dolor Sumit Elit Adipscing</p>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
      
    );
};

export default Header;

// for single tags '/' in the end is imp. in jsx

