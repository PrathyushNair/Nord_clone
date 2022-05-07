function navbar(){
    return `
    <div id="rmain">
    <a href="index.html"> <img src="https://n.nordstrommedia.com/alias/nordstrom-rack-logo.svg" alt="blank" id="rimg"></a>
        <div id="rinput">
            <button id="rsearch"><i class="fa-solid fa-magnifying-glass"></i></button>
            <input type="search" id="rbar" name="keyword" autocomplete="off" placeholder="Search for products or brands" maxlength="140" value="">
            
        </div>
        <div>
            <!-- <span>Sign In</span>
            <select name="Sing In" id="rselect"></select> -->
            <div  class="loginDropdown">
                <span id="signInText" class="loginBtn" style="cursor: pointer; padding: 10px 0;">Sign In&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-angle-down"></i></span>

                <div class="loginDropdown-content">
                    <span><i class="fa-solid fa-sort-up"></i></span>
                    <li id ="sign-in-btn"><a href="signin.html">Sign In</a></li>
                    <li id = "sign-up-btn"><a href="signup.html">Create account</a></li>
                    <h3><a href="#">Your account</a></h3>
                    <p><i class="fa-solid fa-bag-shopping"></i>&nbsp;&nbsp;&nbsp;<a href="#">Purchases</a></p>
                    <p><i class="fa-regular fa-heart"></i>&nbsp;&nbsp;&nbsp;<a href="#">Wish List</a></p>
                    <p><i class="fa-solid fa-n"></i>&nbsp;&nbsp;&nbsp;<a href="#">The Nordy Club Rewards</a></p>
                    <p><i class="fa-solid fa-truck"></i>&nbsp;&nbsp;&nbsp;<a href="#">Shipping Addresses</a></p>
                    <p><i class="fa-solid fa-arrow-up-right-from-square"></i>&nbsp;&nbsp;&nbsp;<a href="#">Pay & Manage Nordstrom Card</a></p>
                    <p><i class="fa-solid fa-store"></i>&nbsp;&nbsp;&nbsp;<a href="#">Store Locator</a></p>
                    <p><a href="#">Account Settings</a></p>
                    <li id="signout" style="display:none">Logout</li>
                    <p><i class="fa-solid fa-passport"></i>&nbsp;&nbsp;&nbsp;<a href="#">Password & Personal Info</a></p>
                    <p><i class="fa-regular fa-envelope"></i>&nbsp;&nbsp;&nbsp;<a href="#">Email & Mail Preferences</a></p>
                    
                    <h3><a href="#">Need Help?</a></h3>
                    <p><a href="#">Contact Us</a></p>
                </div>

            </div>

        </div>
        <div  style="width:80px;display:flex; " id="cartStyle">
        <a id="shoppingbag" href="shopping_bag.html">
        
        <img style="width:50px ;height:50px" src="./styles/cartImg.PNG"> 
       
         </a>
         <p style="margin-left:0px;margin-top:15px" id="cartItems">0</p>
         
           
        </div>
    </div>
    <hr id="rline">
    <div id="rlist">
        <div class="dropdown">
            <div>
                <ul id="rul">
                    <li>
                        <div id="navClear">Clearance</div>
                    </li>
                    <li>
                        <div id="navWomen" class="select">Women</div>
                    </li>
                    <li>
                        <div id="navMen" class="select">Men</div>
                    </li>
                    <li>
                        <div id="navKid" class="select">Kids</div>
                    </li>
                    <li>
                        <div id="navShoes" class="select">Shoes</div>
                    </li>
                    <li>
                        <div id="navActive" class="select">Activewear</div>
                    </li>
                    <li>
                        <div id="navBags" class="select">Bags &amp; Accessories</div>
                    </li>
                    <li>
                        <div id="navHome" class="select">Home</div>
                    </li>
                    <li>
                        <div id="navBeauty" class="select">Beauty</div>
                    </li>
                    <li>
                        <div id="navGifts" class="select">Gifts</div>
                    </li>
                    <li>
                        <div id="navFlash" class="select">Flash Events</div>
                    </li>
                </ul>
            </div>
            <div class="dropdown-content">
                <div>
                    <table id="cateTable"></table>
                </div>       
            </div>
        </div>
    </div>
    `
}

export default navbar;