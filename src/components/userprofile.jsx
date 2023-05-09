import '../components/userprofile.css'


const Userprofile = () => {


    return(
       <>
         <div className="userwrapper">
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

            <div className="username">
                <div className='name'>
                    <h1>Michael Campbell</h1>
                    <p>New York, USA</p>
                </div>

                <div>
                    <button>SIGN OUT</button>
                </div>
            </div>
            
            <div className="whitebg">

            <div class="d-flex align-items-start">
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Profile</button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Orders</button>
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Addresses</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Payment</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Wishlist</button>
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                 <h1>Orders</h1>
                    <p>8 ITEMS</p>
                    <div className="orderbox">
                        <div>
                            <h1>Order 45154</h1>
                            <button>VIEW ORDER</button>
                        </div>
                        <div>
                            <p>Shipped on 15 Apr,2019</p>
                        </div>
                        <div className='imgbox1'></div>
                        
                    </div>
                    <div className="orderbox">
                    <div>
                            <h1>Order 45154</h1>
                            <button>VIEW ORDER</button>
                        </div>
                        <div>
                            <p>Shipped on 15 Apr,2019</p>
                        </div>
                        <div className='imgbox2'></div>
                    </div>
                    <div className="orderbox">
                    <div>
                            <h1>Order 45154</h1>
                            <button>VIEW ORDER</button>
                        </div>
                        <div>
                            <p>Shipped on 15 Apr,2019</p>
                        </div>
                        <div className='imgbox3'></div>
                    </div>
                   
                    <div className="orderbox">
                    <div>
                            <h1>Order 45154</h1>
                            <button>VIEW ORDER</button>
                        </div>
                        <div>
                            <p>Shipped on 15 Apr,2019</p>
                        </div>
                        <div className='imgbox4'></div>
                    </div>
              
    </div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
  </div>
</div>
                {/*<div className="profilebox">
                    <button>Profile</button>
                    <button>Orders</button>
                    <button>Addresses</button>
                    <button>Payments</button>
                    <button>Wishlist</button>
                </div>
          <h1>Orders</h1>
                    <p>8 ITEMS</p>
                    <div className="orderbox">
                        <div>
                            <h1>Order 45154</h1>
                            <button>VIEW ORDER</button>
                        </div>
                        <div>
                            <p>Shipped on 15 Apr,2019</p>
                        </div>
                        <div className='imgbox1'></div>
                        
                    </div>
                    <div className="orderbox">
                    <div>
                            <h1>Order 45154</h1>
                            <button>VIEW ORDER</button>
                        </div>
                        <div>
                            <p>Shipped on 15 Apr,2019</p>
                        </div>
                        <div className='imgbox2'></div>
                    </div>
                    <div className="orderbox">
                    <div>
                            <h1>Order 45154</h1>
                            <button>VIEW ORDER</button>
                        </div>
                        <div>
                            <p>Shipped on 15 Apr,2019</p>
                        </div>
                        <div className='imgbox3'></div>
                    </div>
                   
                    <div className="orderbox">
                    <div>
                            <h1>Order 45154</h1>
                            <button>VIEW ORDER</button>
                        </div>
                        <div>
                            <p>Shipped on 15 Apr,2019</p>
                        </div>
                        <div className='imgbox4'></div>
                    </div>
                </div
                <div className="orders">
          >*/}
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

export default Userprofile;