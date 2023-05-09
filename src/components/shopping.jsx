import '../components/shopping.css'


const shopping = () =>{

    return(
        <>

        <div className="shoppingWrapper">
            <div className="wrapper">
        <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div>
                    <a class="navbar-brand" href="#">audiophile</a></div>
                    <div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">HEADPHONES</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled">SPEAKERS</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled">EARPHONES</a>
                        </li>
                    </ul>
                    </div>
                    </div>
                    <div>
                    <i class="fa-regular fa-cart-shopping"></i>
                    </div>
                </div>
            </nav>
            </div>
            <div className="xx99container">
                <div className="xx99container1">
                <button>Go Back</button>
                </div>
                <div className="row">
                <div className="xx99containercol1">
                    <div className='col-12 col-md-6'>
                        <img src='https://res.cloudinary.com/ilove2support/image/upload/v1679926285/ecommerce/headset1new_ttttfg.png'/>
                    </div>
                    </div>
                    <div className="xx99containercol2">
                    <div className='col-12 col-md-6'>
                        <span>NEW PRODUCT</span>
                        <h1>XX99MARK II<br/>
                        HEADPHONES</h1>
                        <p>The new XX99 Mark II headphones is the pinnacle of pristine
                            audio. It redefines your premium headphones experience by
                            reproducing the balanced depth and precision of studio-quality
                            sound.
                        </p>
                        <h5>$2,999</h5>
                        <div className="btn">
                        <button className="arrow-button">
                                <span class="left-arrow">&#8592;</span>
                                <span class="button-number">1</span>
                                <span class="right-arrow">&#8594;</span>
                        </button>
                        <button>ADD TO CART</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="Features">
                <div className="row">
                <div className='col-12 col-md-6'>
                   <div className="col1">
                   <h1>FEATURES</h1>
                    <p>Features a genuine leather head strap and premium earcups. these headphones deliver
                        superior comfort for those who like to enjoy endless listening .it includes intultive controls 
                        designed for any situation. Whether you're taking a business call or just in your own
                        personal space, the auto on/off and pause features ensure that you'll never miss a beat.</p>

                        <p>Features a genuine leather head strap and premium earcups. these headphones deliver
                        superior comfort for those who like to enjoy endless listening .it includes intultive controls 
                        designed for any situation. Whether you're taking a business call or just in your own
                        personal space, the auto on/off and pause features ensure that you'll never miss a beat.</p>

                   </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className="col2">
                <table>
                    <thead>
                        
                        <th>IN THE BOX</th>
                        
                      
                    </thead>
                    <tbody>
                        <tr>
                        <td><span>1x</span> Headphone Unit</td>
                        </tr>
                        <tr>
                        <td><span>2x</span> Replacement Earcups</td>
                        </tr>
                        <tr>
                        <td><span>1x</span> User Manual</td>
                        </tr>
                        <tr>
                        <td><span>1x</span> 3.5mm 5m Audio Cable</td>
                        </tr>
                        <tr>
                        <td><span>1x</span> Travel Bag</td>
                        </tr>
                        </tbody>
                    </table>

                    </div>
                    </div>

                    </div>
                </div>

                <div className="imgcol">
                    <div className="row">
                    <div className='col-12 col-md-5'>
                        <div className="col1">
                            <div className="firstimg"></div>
                            <div className="secondimg"></div>
                        </div>

                    </div>
                    <div className='col-12 col-md-7'>
                        <div className="col2">
                            <div className="thirdimg">

                            </div>
                            
                        </div>
                        
                    </div>

                    </div>
                </div>


                <div className="AlsoLike">
                    <h1>YOU MAY ALSO LIKE</h1>
                    <div className="cardcontainer">
                    <div className="card">
                        <div className="whitebg">
                            <img src='https://res.cloudinary.com/ilove2support/image/upload/v1679926285/ecommerce/headset1new_ttttfg.png'/>
                        </div>
                        <h3>XX99 MARK I</h3>
                            <button>SEE PRODUCT</button>
                    </div>
                    <div className="card">
                        <div className="whitebg">
                            <img src='https://res.cloudinary.com/ilove2support/image/upload/v1679926285/ecommerce/earbudnew_xkqaqy.png'/> 
                        </div>
                        <h3>XX59</h3>
                            <button>SEE PRODUCT</button>
                    </div>
                    <div className="card">
                        <div className="whitebg">
                            <img src='https://res.cloudinary.com/ilove2support/image/upload/v1679926286/ecommerce/speakernew_dg2rlj.png'/>
                        </div>
                            <h3>ZX9 SPEAKER</h3>
                            <button>SEE PRODUCT</button>
                    </div>
                </div>
                </div>

               {/* this shop class was copied from home.jsx and the styling was on app.css*/}
                <div className="shop">
                <div className="box">
                <img src="https://res.cloudinary.com/ilove2support/image/upload/v1679926285/ecommerce/headset1new_ttttfg.png"/>
                <h5>HEADPHONES</h5>
                <p>shop <span><i class="fa-solid fa-angle-right"></i></span></p>

                </div>
                
                <div className="box">
                <img src="https://res.cloudinary.com/ilove2support/image/upload/v1679926286/ecommerce/speakernew_dg2rlj.png"/>
                <h5>SPEAKERS</h5>
                <p>shop <span><i class="fa-solid fa-angle-right"></i></span></p>
                </div>
                <div className="box">
                <img src="https://res.cloudinary.com/ilove2support/image/upload/v1679926285/ecommerce/earbudnew_xkqaqy.png"/>
                <h5>EARPHONES</h5>
                <p>shop <span><i class="fa-solid fa-angle-right"></i></span></p>
                </div>
            </div>
            {/*----------------*/}

            <div className="AudiogearWrapper">
            <div className="Audiogear">
                <div className="row">
                <div class="col-12 col-md-6">
                   <div className="col1">
                   <h1>BRINGING YOU THE<br/> <span>BEST </span>
                     AUDIO GEAR</h1>
                    <p>Located at the heart of New York City.Audiophile is the premier
                        store for high end headphones, earphones, speakers, and 
                        audio accessories. We have a large showroom and luxury
                        demonstration rooms available for you to browse and experience 
                        a wide range of our products  Stop by our store to
                        meet some of the fantastic people who make Audiophile the 
                        best place to buy your portable audio equipment.
                    </p>
                   </div>
                </div>
                <div class="col-12 col-md-6">
                <div className="col2">
                </div>
                    
                </div>
                    
                </div>
            </div>
            
           </div>

           <div className="copyright">
            <div className="row">
            <div class="col-12 col-md-6">
                <div className="col1">
                <h1>audiophile</h1>
                <p>Audiophile is an all in one stop to fulfil your audio needs. we're a small team 
                    of music lovers and sound specialists who are devoted to helping you get the 
                    most out of personal audio. Come and visit demo facility -we're open 7
                    days a week. </p>

                    <p>copyright 2021. All Rights Reserved</p>
                </div>

            </div>
            <div class="col-12 col-md-6">
                <div className="col2">
                    <ul>
                        <li>HOME</li>
                        <li>HEADPHONES</li>
                        <li>SPEAKERS</li>
                        <li>EARPHONES</li>
                    </ul>
                    <div className="logo">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>



                    </div>


                </div>
                
            </div>
            </div>
           </div>
                            
                        
                       
                   
                  
                   
               



            </div>
                       
                       
                      
                       
                      
                        
                        
                        

                        
                       
                       
                        
                       
            
                        
                       
                        
                    
                        
                   
        </>
    )
        
    
}

export default shopping;