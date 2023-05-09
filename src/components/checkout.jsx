import '../components/checkout.css';

const Checkout = () =>{
    return(
        <>
          <div className="CheckoutWrapper">
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
            <div className="Gobackbtn">
                <button>Go Back</button>
            </div>
            <div className="checkoutparent">
            <div className="checkoutForm">
                
                <div className="form">
                    <h1>CHECKOUT</h1>
                    <div>
                    <span>BILLING DETAILS</span>
                    <form>
                    
                        <div>
                        <label for='name'>Name</label><br/>
                        <input type="text" placeholder='Name' />
                        </div>
                        <div>
                        <label for='email'>Email</label><br/>
                        <input type="text" placeholder='Email' />
                        </div>
                        <div>
                        <label for='phone number'>Phone Number</label><br/>
                        <input type="text" placeholder='Phone Number' />
                        </div>
                    </form>
                    </div>
                    <div>
                    <span>SHIPING INFO</span>
                    <form>
                        <div>
                        <label for='address'>Address</label><br/>
                        <input id='addbtn' type="text" placeholder='Address' />
                        </div>
                        <div>
                        <label for='zipcode'>zip code</label><br/>
                        <input type="text" placeholder='Zip Code' />
                        </div>
                        <div>
                        <label for='email'>City</label><br/>
                        <input type="city" placeholder='City' />
                        </div>
                        <div>
                        <label for='Country'>Country</label><br/>
                        <input type="text" placeholder='Country' />
                        </div>
                    </form>
                    </div>
                    <div>
                        <span>PAYMENT DETAILS </span>
                       <div className="paydetails">
                       <div>
                            <p>payment Method</p>
                        </div>
                        <div className='radiobtn'>
                            <button>
                                <input type='radio'/>
                                e-Money
                            </button>
                            <button>
                                <input type='radio'/>
                                Cash on Delivery
                            </button>
                        </div>
                       </div>

                    </div>
                    <div className='emoney'>
                        <div>
                            <label for='emoney'>e-Money</label><br/>
                            <input type="text" placeholder='e-Money Number' />
                        </div>
                        <div>
                            <label for='emoneypin'>e-Money PIN</label><br/>
                            <input type="text" placeholder='pin' />
                        </div>
                    </div>


                    
                    
                </div>
            </div>

              <div className="summary">
                <h1> Summary</h1>
                <table>
                   
                    <tbody>
                        <tr>
                                <div className="tbwrapper">
                                    <div>
                                    <div className="boxparent">
                                <td>
                                    <div className="box">
                                    <img src='https://res.cloudinary.com/ilove2support/image/upload/v1679926285/ecommerce/headset1new_ttttfg.png'/>
                                    </div>
                                    <div>
                                        <span>XX99 MK II</span><br/>
                                        <p>$2.9999</p>
                                        </div> </td>
                                    </div>
                                    </div>
                                    <div>
                                    <td>1x</td>
                                    </div>
                                    </div>
                        </tr>
                        <tr>
                                <div className="tbwrapper">
                                    <div>
                                    <div className="boxparent">
                                <td>
                                    <div className="box">
                                    <img src='https://res.cloudinary.com/ilove2support/image/upload/v1679926286/ecommerce/speakernew_dg2rlj.png'/>
                                    </div>
                                    <div>
                                        <span>XX59</span><br/>
                                        <p>$8.999</p>
                                        </div> </td>
                                    </div>
                                    </div>
                                    <div>
                                    <td>3x</td>
                                    </div>
                                    </div>
                        </tr>
                        <tr>
                                <div className="tbwrapper">
                                    <div>
                                    <div className="boxparent">
                                <td>
                                    <div className="box">
                                    <img src='https://res.cloudinary.com/ilove2support/image/upload/v1679926285/ecommerce/earbudnew_xkqaqy.png'/>
                                    </div>
                                    <div>
                                        <span>YX1</span><br/>
                                        <p>$599</p>
                                        </div> </td>
                                    </div>
                                    </div>
                                    <div>
                                    <td>1x</td>
                                    </div>
                                    </div>
                        </tr>
                        </tbody>
                </table>


                <div className="total">
                    <div className='subtotal'>
                    <p>Total</p>
                     <h6>$5.396</h6>
                    </div>
                    <div className='subtotal'>
                        <p>Shiping</p>
                        <h6>$50</h6>
                    </div>
                    <div className='subtotal'>
                        <p>Vat(INCLUDED) </p>
                        <h6>$1,079</h6>
                    </div>
                    <div className="grandtotal">
                        <p>Grand Total</p>
                        <h6>$5.446</h6>
                    </div>

                    <button>CONTINUE & PAY</button>

                    
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

export default Checkout;