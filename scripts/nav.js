import navbar from "../components/navbar.js";
let bag=JSON.parse(localStorage.getItem("bag"))||[]
document.getElementById("navContainer").innerHTML = navbar();
document.querySelector("#cartItems").innerText=bag.length
var categoriesArray=[
    [
      '<tr>  <th><a href="#">Clearance: Get Inspired</a></th> <th><a href="#">Men</a></th>  <th><a href="#">Kids</a></th>  <th><a href="#">Home</a></th>   </tr>',
      '<tr>  <th><a href="#">Women</a></th>  <td><a href="#">Clothing</a></td>  <td><a href="#">Girls Clothing</a></td>  <td><a href="#">Art & Wall Decor</a></td>   </tr>',
      '<tr>  <td><a href="#">Clothing</a></td>  <td><a href="#">Shoes</a></td>  <th><a href="#">Girls Shoes</a></th>  <td><a href="#">Bath</a></td>   </tr>',
      '<tr>  <td><a href="#">Shoes</a></td>  <td><a href="#">Watches</a></td>  <td><a href="#">Boys Clothing</a></td>  <td><a href="#">Bedding</a></td>   </tr>',
      '<tr>  <td><a href="#">Suit Sets</a></td>  <td><a href="#">Accessories</a></td>  <td><a href="#">Boys Shoes</a></td>  <td><a href="#">Decor</a></td>   </tr>',
      '<tr>  <td><a href="#">Handbags</a></td>  <th><a href="#">Designer</a></th>  <td><a href="#">Kids Shoes</a></td>  <td><a href="#">Electronic & Tech Accessories</a></td>   </tr>',
      '<tr>  <td><a href="#">Sunglasses & Eyewear</a></td>  <td></td>  <td><a href="#">Baby Clothing & Shoes</a></td>  <td><a href="#">Kitchen & Tabletop</a></td>   </tr>',
      '<tr>  <td><a href="#">Jewellery</a></td>  <td></td>  <th><a href="#">Activewear</a></th>  <td><a href="#">Storage & Cleaning</a></td>   </tr>',
      '<tr>  <td><a href="#">Watches</a></td>  <td></td>  <td></td>  <th><a href="#">Beauty</a></th>   </tr>',
      '<tr>  <th><a href="#">Accessories</a></th>  <td></td>  <td></td>  <td><a href="#">Makeup</a></td>   </tr>',
      '<tr>  <td></td>  <td></td>  <td></th>  <td><a href="#">Skin Care</a></td>   </tr>'
    ],
    [
      '<tr>  <th><a href="#">Women: Get Inspired</a></th>  <th><a href="#">Clothing</a></th>  <th><a href="#">Shoes</a></th>  <th><a href="#">Young Adult</a></th>  <th><a href="#">Activewear</a></th> </tr>',
      '<tr>  <th><a href="#">Mothers Day Gifts</a></th>  <td><a href="#">Activewear</a></td>  <td><a href="#">Athletic & Running</a></td>  <td><a href="#">Accessories </a></td> <td><a href="#">Crops & Capris </a></td>  </tr>',
      '<tr>  <th><a href="#">New Arrivals</a></th>  <td><a href="#">Shorts</a></td>  <td><a href="#">Workwear Watches</a></td>  <td><a href="#">Backpacks</a></td> <td><a href="#">Jackets </a></td>  </tr>',
      '<tr>  <th><a href="#">Best Sellers</a></th>  <td><a href="#">Sweat Shirts</a></td>  <td><a href="#">Casual Watches</a></td>  <th><a href="#">Fashion Accessories</a></th> <td><a href="#">Leggings </a></td>  </tr>',
      '<tr>  <th><a href="#">Designer Brands</a></th>  <td><a href="#">Casual Jackets</a></td>  <td><a href="#">Partywear Watches</a></td>  <td><a href="#">Belts</a></td> <td><a href="#">Shirts </a></td>  </tr>',
      '<tr>  <th><a href="#">Contemporary Brands</a></th>  <td><a href="#">Formal Shirts</a></td>  <td><a href="#">Digital watches</a></td>  <td><a href="#">Hats & Caps</a></td> <td><a href="#">Shorts & Skirts </a></td>  </tr>',
      '<tr>  <th><a href="#">Trend Brands</a></th>  <td><a href="#">Formal Trousers</a></td>  <td><a href="#">Multifunctional watches</a></td>  <td><a href="#">Ties & Cufflinks</a></td> <td><a href="#">Sports Bras </a></td>  </tr>',
      '<tr>  <th><a href="">Dresses Under $50</a></th>  <th><a href="#">Inner & Nightwear</a></th>  <th><a href="#">The Watch Store</a></th>  <td><a href="#">Writing Instruments</a></td> <td><a href="#">Sweatpants & Joggers </a></td>  </tr>',
      `<tr>  <th><a href="#">Denim Under $50</a></th>  <th><a href="#">View All Clothing</a></th>  <th><a href="#">Bags & Backpacks</a></th>  <td><a href="#">Men's Gift Sets</a></td> <td><a href="#">Sweatshirts & Hoodies </a></td>  </tr>`,
      '<tr>  <th><a href="#">Swim & Sun Under $50</a></th>  <th><a href="#">Sports Wear</a></th>  <td><a href="#">Backpacks</a></td>  <th><a href="#">Jewellery</a></th> <td><a href="#">Tanks </a></td>  </tr>',
      '<tr>  <th><a href="#">Sandals Under $50</a></th>  <td><a href="#">T-shirts & Jerseys</a></td>  <td><a href="#">Wallets</a></td>  <td><a href="#">Mens Jewellery</a></td> <th><a href="#">Active Shoes </a></th>  </tr>',
      '<tr>  <th><a href="#">Wedding Shop</a></th>  <td><a href="#">Shorts</a></td>  <td><a href="#">Messenger Bags</a></td>  <td><a href="#">Coins and Bars</a></td> <td><a href="#">Hiking & Trail </a></td>  </tr>',
      '<tr>  <th><a href="#">Shop by Occasion</a></th>  <td><a href="#">Sports Jackets</a></td>  <td><a href="#">Cross Body Bags</a></td>  <th><a href="#">Sunglasses</a></th> <td><a href="#">Running </a></td>  </tr>',
      '<tr>  <th><a href="#">Shop by Trend</a></th>  <td><a href="#">Joggers</a></td>  <th><a href="#">Luggage & Trolleys</a></th>  <td><a href="#">Aviator</a></td> <td><a href="#">Training </a></td>  </tr>',
      '<tr>  <th><a href="#">Nike for the Family</a></th>  <td><a href="#">Trunks</a></td>  <td><a href="#">Trolleys Bags & Suitcases</a></td>  <td><a href="#"></a></td> <td><a href="#">Walking </a></td>  </tr>',
      '<tr>  <th><a href="#">Rack Essentials</a></th>  <td><a href="#">Trunks</a></td>  <td><a href="#">Trolleys Bags & Suitcases</a></td>  <td><a href="#"></a></td> <th><a href="#">Athletic Gear & Equipment </a></th>  </tr>'
    ],
    [
        '<tr>  <th><a href="#">Men: Get Inspired</a></th>  <th><a href="#">Clothing</a></th>  <th><a href="#">Shoes</a></th>  <th><a href="#">Young Adult</a></th>  <th><a href="#">Activewear</a></th> </tr>',
        '<tr>  <th><a href="#">Mothers Day Gifts</a></th>  <td><a href="shop.html">Activewear</a></td>  <td><a href="#">Athletic & Running</a></td>  <td><a href="#">Accessories </a></td> <td><a href="#">Crops & Capris </a></td>  </tr>',
        '<tr>  <th><a href="#">New Arrivals</a></th>  <td><a href="#">Shorts</a></td>  <td><a href="#">Workwear Watches</a></td>  <td><a href="#">Backpacks</a></td> <td><a href="#">Jackets </a></td>  </tr>',
        '<tr>  <th><a href="#">Best Sellers</a></th>  <td><a href="#">Sweat Shirts</a></td>  <td><a href="#">Casual Watches</a></td>  <th><a href="#">Fashion Accessories</a></th> <td><a href="#">Pants </a></td>  </tr>',
        '<tr>  <th><a href="#">Designer Brands</a></th>  <td><a href="#">Casual Jackets</a></td>  <td><a href="#">Partywear Watches</a></td>  <td><a href="#">Belts</a></td> <td><a href="#">Shirts </a></td>  </tr>',
        '<tr>  <th><a href="#">Contemporary Brands</a></th>  <td><a href="#">Formal Shirts</a></td>  <td><a href="#">Digital watches</a></td>  <td><a href="#">Hats & Caps</a></td> <td><a href="#">Shorts </a></td>  </tr>',
        '<tr>  <th><a href="#">Trend Brands</a></th>  <td><a href="#">Formal Trousers</a></td>  <td><a href="#">Multifunctional watches</a></td>  <td><a href="#">Ties & Cufflinks</a></td> <td><a href="#">Sports Wear </a></td>  </tr>',
        '<tr>  <th><a href="">Dresses Under $50</a></th>  <th><a href="#">Inner & Nightwear</a></th>  <th><a href="#">The Watch Store</a></th>  <td><a href="#">Writing Instruments</a></td> <td><a href="#">Joggers </a></td>  </tr>',
        `<tr>  <th><a href="#">Denim Under $50</a></th>  <th><a href="#">View All Clothing</a></th>  <th><a href="#">Bags & Backpacks</a></th>  <td><a href="#">Men's Gift Sets</a></td> <td><a href="#">Hoodies </a></td>  </tr>`,
        '<tr>  <th><a href="#">Swim & Sun Under $50</a></th>  <th><a href="#">Sports Wear</a></th>  <td><a href="#">Backpacks</a></td>  <th><a href="#">Jewellery</a></th> <td><a href="#">Tanks </a></td>  </tr>',
        '<tr>  <th><a href="#">Sandals Under $50</a></th>  <td><a href="#">T-shirts & Jerseys</a></td>  <td><a href="#">Wallets</a></td>  <td><a href="#">Mens Jewellery</a></td> <th><a href="#">Active Shoes </a></th>  </tr>',
        '<tr>  <th><a href="#">Wedding Shop</a></th>  <td><a href="#">Shorts</a></td>  <td><a href="#">Messenger Bags</a></td>  <td><a href="#">Coins and Bars</a></td> <td><a href="#">Hiking & Trail </a></td>  </tr>',
        '<tr>  <th><a href="#">Shop by Occasion</a></th>  <td><a href="#">Sports Jackets</a></td>  <td><a href="#">Cross Body Bags</a></td>  <th><a href="#">Sunglasses</a></th> <td><a href="#">Running </a></td>  </tr>',
        '<tr>  <th><a href="#">Shop by Trend</a></th>  <td><a href="#">Joggers</a></td>  <th><a href="#">Luggage & Trolleys</a></th>  <td><a href="#">Aviator</a></td> <td><a href="#">Training </a></td>  </tr>',
        '<tr>  <th><a href="#">Nike for the Family</a></th>  <td><a href="#">Trunks</a></td>  <td><a href="#">Trolleys Bags & Suitcases</a></td>  <td><a href="#"></a></td> <td><a href="#">Walking </a></td>  </tr>',
        '<tr>  <th><a href="#">Rack Essentials</a></th>  <td><a href="#">Trunks</a></td>  <td><a href="#">Trolleys Bags & Suitcases</a></td>  <td><a href="#"></a></td> <th><a href="#">Athletic Gear & Equipment </a></th>  </tr>'
    ],
    [
        '<tr>  <th><a href="#">Boys Clothing</a></th>  <td><a href="#">Tops</a></td>  <td><a href="#">Jeans & Trousers</a></td>  <th><a href="#">Girls Footwear</a></th>   </tr>',
        '<tr>  <td><a href="#">T shirts and Polos</a></td>  <td><a href="#">Jeans And Trousers</a></td>  <td><a href="#">Tops & T-shirts</a></td>  <th><a href="#">Watches</a></th>   </tr>',
        '<tr>  <td><a href="#">Shirts</a></td>  <td><a href="#">Dresses</a></td>  <td><a href="#">Combo Sets</a></td>  <td><a href="#"></a></td>   </tr>',
        '<tr>  <td><a href="#">Jeans And Trousers</a></td>  <td><a href="#">Sportswear</a></td>  <td><a href="#">Jumpsuits & Dungarees</a></td>  <td><a href="#"></a></td>   </tr>',
        '<tr>  <td><a href="#">Shorts And Dungarees</a></td>  <td><a href="#">Jumpsuits & Dungarees</a></td>  <td><a href="#">Dresses</a></td>  <td><a href="#"></a></td>   </tr>',
        '<tr>  <td><a href="#">Sportswear</a></td>  <td><a href="#">Skirts, Short, & Jumpsuits</a></td>  <td><a href="#">Shirts</a></td>  <td><a href="#"></a></td>   </tr>',
        '<tr>  <td><a href="#">Ethnic Wear</a></td>  <td><a href="#">Ethnic Wear</a></td>  <td><a href="#">Ethnic Wear</a></td>  <td><a href="#"></a></td>   </tr>',
        '<tr>  <td><a href="#">Inner Wear</a></td>  <td><a href="#">Combo Suits</a></td>  <td><a href="#">Shorts & Jumpsuits</a></td>  <td><a href="#"></a></td>   </tr>',
        '<tr>  <td><a href="#">Night wear</a></td>  <td><a href="#">Night Wear</a></td>  <td><a href="#">Winter Wear</a></td>  <td><a href="#"></a></td>   </tr>',
        '<tr>  <td><a href="#">Winter Wear</a></td>  <td><a href="#">Winter Wear</a></td>  <th><a href="#">Shop By Age</a></th>  <td><a href="#"></a></td>   </tr>',
        '<tr>  <th><a href="#">Shop By Age</a></th>  <th><a href="#">Shop By Age</a></th>  <td><a href="#">0 - 6 months</a></td>  <td><a href="#"></a></td>   </tr>',
        '<tr>  <td><a href="#">2 - 6 Years</a></td>  <td><a href="#">2 - 6 Years</a></td>  <td><a href="#">6 - 12 months</a></td>  <td><a href="#"></a></td>   </tr>',
        '<tr>  <td><a href="#">6 - 12 Years</a></td>  <td><a href="#">6 - 12 Years</a></td>  <td><a href="#">1 - 2 Years</a></td>  <td><a href="#"></a></td>   </tr>',
        '<tr>  <td><a href="#">12 - 16 Years</a></td>  <td><a href="#">12 - 16 Years</a></td>  <td><a href="#">View All Clothing</a></td>  <td><a href="#"></a></td>   </tr>',
        '<tr>  <th><a href="#">Girls Clothing</a></th>  <th><a href="#">Infants</a></th>  <th><a href="#">Boys Footwear</a></th>  <td><a href="#"></a></td>   </tr>'
    ],
    [
      '<tr>  <th><a href="#">Electronics Deals</a></th>  <td><a href="#">OnePlus</a></td>  <td><a href="#">Screen Protectors</a></td>  <td><a href="#">Apple Watch</a></td>   </tr>',
      '<tr>  <th><a href="#">Mobile Phones Store</a></th>  <th><a href="#">Shop by Feature</a></th>  <td><a href="#">Chargers</a></td>  <td><a href="#">Fitness Trackers</a></td>   </tr>',
      '<tr>  <td><a href="#">Mobile Phones</a></td>  <td><a href="#">5G Phones</a></td>  <td><a href="#">Cables</a></td>  <th><a href="#">Value-Added Services</a></th>   </tr>',
      '<tr>  <td><a href="#">iPhone</a></td>  <td><a href="#">Gaming Phones</a></td>  <td><a href="#">Power Banks</a></td>  <td><a href="#">Extended Warranty</a></td>   </tr>',
      '<tr>  <td><a href="#">New Launches</a></td>  <td><a href="#">Selfie Phones</a></td>  <td><a href="#">Memory Cards</a></td>  <td><a href="#">Exchange Offers</a></td>   </tr>',
      '<tr>  <td><a href="#">Flagship Phones</a></td>  <td><a href="#">Long Battery Life</a></td>  <td><a href="#">Mobile Holders</a></td>  <th><a href="#">View Other Categories</a></th>   </tr>',
      '<tr>  <td><a href="#">Feature Phones</a></td>  <th><a href="#">Shop by Price</a></th>  <td><a href="#">Apple Accessories</a></td>  <td><a href="#">Appliances</a></td>   </tr>',
      '<tr>  <th><a href="#">Shop by Brand</a></th>  <td><a href="#">Under Rs. 10,000</a></td>  <th><a href="#">Audio Store</a></th>  <td><a href="#">Televisions</a></td>   </tr>',
      '<tr>  <td><a href="#">Apple</a></td>  <td><a href="#">From 10,001 to 20,000</a></td>  <td><a href="#">Earphones</a></td>  <td><a href="#">Laptops</a></td>   </tr>',
      '<tr>  <td><a href="#">Samsung</a></td>  <td><a href="#">From 20,001 to 30,000</a></td>  <td><a href="#">Headsets</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Vivo</a></td>  <td><a href="#">From 30,001 to 50,000</a></td>  <td><a href="#">True Wireless</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Oppo</a></td>  <td><a href="#">Above 50,000</a></td>  <td><a href="#">Neckbands</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Realme</a></td>  <th><a href="#">Mobile Accessories</a></th>  <td><a href="#">Bluetooth Speakers</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Nokia</a></td>  <td><a href="#">Accessories Store</a></td>  <th><a href="#">Wearables Store</a></th>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Xiaomi</a></td>  <td><a href="#">Cases & Covers</a></td>  <td><a href="#">Smart Watches</a></td>  <td><a href="#"></a></td>   </tr>'
    ],
    [
      '<tr>  <th><a href="#">Electronics Deals</a></th>  <th><a href="#">IT Accessories Store</a></th>  <td><a href="#">Instant Camera</a></td>  <td><a href="#">Home Audio</a></td>   </tr>',
      '<tr>  <th><a href="#">Laptops Store</a></th>  <td><a href="#">Printer Store</a></td>  <td><a href="#">Security Camera</a></td>  <th><a href="#">Wearable Devices</a></th>   </tr>',
      '<tr>  <td><a href="#">All Laptops</a></td>  <td><a href="#">Printers</a></td>  <td><a href="#">Tripod</a></td>  <td><a href="#">Fitness Tracker</a></td>   </tr>',
      '<tr>  <td><a href="#">Intel Core i3 laptop</a></td>  <td><a href="#">Cartridges & Toners</a></td>  <td><a href="#">Camera Accessories</a></td>  <td><a href="#">Apple Watches</a></td>   </tr>',
      '<tr>  <td><a href="#">Intel Core i5 laptop</a></td>  <td><a href="#">PC Components</a></td>  <td><a href="#">Camera Bags</a></td>  <th><a href="#">Personal Care Store</a></th>   </tr>',
      '<tr>  <td><a href="#">i7 Laptops</a></td>  <td><a href="#">Keyboards & Mouse</a></td>  <th><a href="#">Gaming</a></th>  <td><a href="#">Trimmers & Shavers</a></td>   </tr>',
      '<tr>  <td><a href="#">AMD Laptops</a></td>  <td><a href="#">Routers & Modems</a></td>  <td><a href="#">Software</a></td>  <td><a href="#">Hair Dryers</a></td>   </tr>',
      '<tr>  <td><a href="#">MacBook</a></td>  <td><a href="#">Desktops & Monitors</a></td>  <td><a href="#">Mouse</a></td>  <td><a href="#">Hair Straighteners</a></td>   </tr>',
      '<tr>  <td><a href="#">Gaming Laptops</a></td>  <td><a href="#">Peripherals & Software</a></td>  <td><a href="#">Controllers</a></td>  <td><a href="#">Epilators</a></td>   </tr>',
      '<tr>  <th><a href="#">Tablets & iPads</a></th>  <td><a href="#">Laptop Bags</a></td>  <td><a href="#">Gaming Headphones</a></td>  <td><a href="#">Health Care Devices</a></td>   </tr>',
      '<tr>  <th><a href="#">Storage Devices</a></th>  <th><a href="#">Camera & Accessories</a></th>  <td><a href="#">Explore All Gaming</a></td>  <td><a href="#">Weighing Scales</a></td>   </tr>',
      '<tr>  <td><a href="#">External Hard Disks</a></td>  <td><a href="#">DSLR</a></td>  <th><a href="#">Audio Store</a></th>  <td><a href="#">Massagers</a></td>   </tr>',
      '<tr>  <td><a href="#">Storage Device Store</a></td>  <td><a href="#">Camera Lens</a></td>  <td><a href="#">Earphones</a></td>  <th><a href="#">Smart Home Devices</a></th>   </tr>',
      '<tr>  <td><a href="#">Pen Drive</a></td>  <td><a href="#">Point and Shoot</a></td>  <td><a href="#">Headsets</a></td>  <th><a href="#">Extended Warranty</a></th>   </tr>',
      '<tr>  <td><a href="#">SSDs</a></td>  <td><a href="#">Action Camcorders</a></td>  <td><a href="#">Bluetooth Speakers</a></td>  <th><a href="#">View Other Categories</a></th>   </tr>'
    ],
    [
      '<tr>  <th><a href="#">Boys Clothing</a></th>  <td><a href="#">Tops</a></td>  <td><a href="#">Jeans & Trousers</a></td>  <th><a href="#">Girls Footwear</a></th>   </tr>',
      '<tr>  <td><a href="#">T shirts and Polos</a></td>  <td><a href="#">Jeans And Trousers</a></td>  <td><a href="#">Tops & T-shirts</a></td>  <th><a href="#">Watches</a></th>   </tr>',
      '<tr>  <td><a href="#">Shirts</a></td>  <td><a href="#">Dresses</a></td>  <td><a href="#">Combo Sets</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Jeans And Trousers</a></td>  <td><a href="#">Sportswear</a></td>  <td><a href="#">Jumpsuits & Dungarees</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Shorts And Dungarees</a></td>  <td><a href="#">Jumpsuits & Dungarees</a></td>  <td><a href="#">Dresses</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Sportswear</a></td>  <td><a href="#">Skirts, Short, & Jumpsuits</a></td>  <td><a href="#">Shirts</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Ethnic Wear</a></td>  <td><a href="#">Ethnic Wear</a></td>  <td><a href="#">Ethnic Wear</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Inner Wear</a></td>  <td><a href="#">Combo Suits</a></td>  <td><a href="#">Shorts & Jumpsuits</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Night wear</a></td>  <td><a href="#">Night Wear</a></td>  <td><a href="#">Winter Wear</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Winter Wear</a></td>  <td><a href="#">Winter Wear</a></td>  <th><a href="#">Shop By Age</a></th>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <th><a href="#">Shop By Age</a></th>  <th><a href="#">Shop By Age</a></th>  <td><a href="#">0 - 6 months</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">2 - 6 Years</a></td>  <td><a href="#">2 - 6 Years</a></td>  <td><a href="#">6 - 12 months</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">6 - 12 Years</a></td>  <td><a href="#">6 - 12 Years</a></td>  <td><a href="#">1 - 2 Years</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">12 - 16 Years</a></td>  <td><a href="#">12 - 16 Years</a></td>  <td><a href="#">View All Clothing</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <th><a href="#">Girls Clothing</a></th>  <th><a href="#">Infants</a></th>  <th><a href="#">Boys Footwear</a></th>  <td><a href="#"></a></td>   </tr>'
    ],
    [
      '<tr>  <th><a href="#">Bedding and Linen</a></th>  <td><a href="#">Bathrobes</a></td>  <th><a href="#">Kitchen</a></th>  <td><a href="#">Other Home Accents</a></td>   </tr>',
      '<tr>  <td><a href="#">Bed Sheet Sets</a></td>  <td><a href="#">Kids Bath Linen</a></td>  <td><a href="#">Cookware and Bakeware</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Bed Linen Sets</a></td>  <th><a href="#">Room Furnishings</a></th>  <th><a href="#">Tableware</a></th>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Bed Covers</a></td>  <td><a href="#">Cushions</a></td>  <td><a href="#">Table Cloth</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Pillow Covers and Shams</a></td>  <td><a href="#">Cushion covers</a></td>  <td><a href="#">Table Runners</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Quilts and Rajais</a></td>  <td><a href="#">Rugs and Dhurries</a></td>  <td><a href="#">Table Napkins</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Duvet Covers</a></td>  <td><a href="#">Carpets</a></td>  <th><a href="#">Home Decor</a></th>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Comforters</a></td>  <td><a href="#">Door Mats</a></td>  <td><a href="#">Candles</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Dohars</a></td>  <td><a href="#">Curtains</a></td>  <td><a href="#">Home Fragrances</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Kids Bedding Linen</a></td>  <th><a href="#">Lamps and Lighting</a></th>  <td><a href="#">Candle Holders</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Bed Pillows</a></td>  <td><a href="#">LED Bulbs</a></td>  <td><a href="#">Wall Art</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <th><a href="#">Bath Linen and</a></th>  <td><a href="#">Table Lamps</a></td>  <td><a href="#">Clocks</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <th><a href="#"> Accessories</a></th>  <td><a href="#">Wall Lamps</a></td>  <td><a href="#">Art Pieces</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Towels</a></td>  <td><a href="#">Ceiling Lamps</a></td>  <td><a href="#">Vases</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Bath Mats and Rugs</a></td>  <td><a href="#">Study Table Lamps</a></td>  <td><a href="#">Photoframes</a></td>  <td><a href="#"></a></td>   </tr>'
    ],
    [
        '<tr>  <th><a href="#"> Fragrance Store</a></th>  <th><a href="#"> Skin</a></th>  <td><a href="#"> Hair Oils</a></td>   </tr>',
        '<tr>  <td><a href="#"> Men</a></td>  <td><a href="#"> Cleansers</a></td>  <td><a href="#"> Hair Masks</a></td>   </tr>',
        '<tr>  <td><a href="#"> Women</a></td>  <td><a href="#"> Moisturizers & Serums</a></td>  <th><a href="#"> Professional Hair care</a></th>   </tr>',
        '<tr>  <td><a href="#"> Perfumes</a></td>  <td><a href="#"> Facial Peels & Masks</a></td>  <th><a href="#"> Natural Hair care</a></th>   </tr>',
        '<tr>  <td><a href="#"> Gift Sets</a></td>  <td><a href="#"> Eye creams</a></td>  <td><a href="#"> All Hair</a></td>   </tr>',
        `<tr>  <th><a href="#"> View By Note</a></th>  <td><a href="#"> Combo Sets</a></td>  <th><a href="#"> Men's Grooming</a></th>   </tr>`,
        `<tr>  <td><a href="#"> Woody & Spicy Fragrances</a></td>  <td><a href="#"> Men's Skin care</a></td>  <td><a href="#"> Shaving</a></td>   </tr>`,
        '<tr>  <td><a href="#"> Floral & Fruity Fragrances</a></td>  <th><a href="#"> Natural Skin Care</a></th>  <td><a href="#"> Beard & Moustache Care</a></td>   </tr>',
        '<tr>  <td><a href="#"> Fresh & Citrus Fragrances</a></td>  <th><a href="#"> K-Skin care</a></th>  <td><a href="#"> Grooming Kits</a></td>   </tr>',
        `<tr>  <td><a href="#"> Makeup</a></td>  <th><a href="#"> Derma Skin care</a></th>  <td><a href="#"> Overall Men's Grooming</a></td>   </tr>`,
        '<tr>  <td><a href="#"> Eyes</a></td>  <td><a href="#"> All skin</a></td>  <th><a href="#"> All Beauty & Grooming</a></th>   </tr>',
        '<tr>  <td><a href="#"> Face</a></td>  <th><a href="#"> Bath, Body & Hygiene</a></th>  <td><a href="#"></a></td>   </tr>',
        '<tr>  <td><a href="#"> Lips</a></td>  <th><a href="#"> Hair</a></th>  <td><a href="#"></a></td>   </tr>',
        '<tr>  <td><a href="#"> Nails</a></td>  <td><a href="#"> Shampoos & Conditioners</a></td>  <td><a href="#"></a></td>   </tr>',
        '<tr>  <td><a href="#"> All Makeup</a></td>  <td><a href="#"> Hair Styling & Care</a></td>  <td><a href="#"></a></td>   </tr>'
    ],
    [
      '<tr>  <th><a href="#">Bedding and Linen</a></th>  <td><a href="#">Bathrobes</a></td>  <th><a href="#">Kitchen</a></th>  <td><a href="#">Other Home Accents</a></td>   </tr>',
      '<tr>  <td><a href="#">Bed Sheet Sets</a></td>  <td><a href="#">Kids Bath Linen</a></td>  <td><a href="#">Cookware and Bakeware</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Bed Linen Sets</a></td>  <th><a href="#">Room Furnishings</a></th>  <th><a href="#">Tableware</a></th>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Bed Covers</a></td>  <td><a href="#">Cushions</a></td>  <td><a href="#">Table Cloth</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Pillow Covers and Shams</a></td>  <td><a href="#">Cushion covers</a></td>  <td><a href="#">Table Runners</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Quilts and Rajais</a></td>  <td><a href="#">Rugs and Dhurries</a></td>  <td><a href="#">Table Napkins</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Duvet Covers</a></td>  <td><a href="#">Carpets</a></td>  <th><a href="#">Home Decor</a></th>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Comforters</a></td>  <td><a href="#">Door Mats</a></td>  <td><a href="#">Candles</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Dohars</a></td>  <td><a href="#">Curtains</a></td>  <td><a href="#">Home Fragrances</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Kids Bedding Linen</a></td>  <th><a href="#">Lamps and Lighting</a></th>  <td><a href="#">Candle Holders</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Bed Pillows</a></td>  <td><a href="#">LED Bulbs</a></td>  <td><a href="#">Wall Art</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <th><a href="#">Bath Linen and</a></th>  <td><a href="#">Table Lamps</a></td>  <td><a href="#">Clocks</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <th><a href="#"> Accessories</a></th>  <td><a href="#">Wall Lamps</a></td>  <td><a href="#">Art Pieces</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Towels</a></td>  <td><a href="#">Ceiling Lamps</a></td>  <td><a href="#">Vases</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#">Bath Mats and Rugs</a></td>  <td><a href="#">Study Table Lamps</a></td>  <td><a href="#">Photoframes</a></td>  <td><a href="#"></a></td>   </tr>'
    ],
    [
      '<tr>  <th><a href="#"> Fragrance Store</a></th>  <th><a href="#"> Skin</a></th>  <td><a href="#"> Hair Oils</a></td>   </tr>',
      '<tr>  <td><a href="#"> Men</a></td>  <td><a href="#"> Cleansers</a></td>  <td><a href="#"> Hair Masks</a></td>   </tr>',
      '<tr>  <td><a href="#"> Women</a></td>  <td><a href="#"> Moisturizers & Serums</a></td>  <th><a href="#"> Professional Hair care</a></th>   </tr>',
      '<tr>  <td><a href="#"> Perfumes</a></td>  <td><a href="#"> Facial Peels & Masks</a></td>  <th><a href="#"> Natural Hair care</a></th>   </tr>',
      '<tr>  <td><a href="#"> Gift Sets</a></td>  <td><a href="#"> Eye creams</a></td>  <td><a href="#"> All Hair</a></td>   </tr>',
      `<tr>  <th><a href="#"> View By Note</a></th>  <td><a href="#"> Combo Sets</a></td>  <th><a href="#"> Men's Grooming</a></th>   </tr>`,
      `<tr>  <td><a href="#"> Woody & Spicy Fragrances</a></td>  <td><a href="#"> Men's Skin care</a></td>  <td><a href="#"> Shaving</a></td>   </tr>`,
      '<tr>  <td><a href="#"> Floral & Fruity Fragrances</a></td>  <th><a href="#"> Natural Skin Care</a></th>  <td><a href="#"> Beard & Moustache Care</a></td>   </tr>',
      '<tr>  <td><a href="#"> Fresh & Citrus Fragrances</a></td>  <th><a href="#"> K-Skin care</a></th>  <td><a href="#"> Grooming Kits</a></td>   </tr>',
      `<tr>  <td><a href="#"> Makeup</a></td>  <th><a href="#"> Derma Skin care</a></th>  <td><a href="#"> Overall Men's Grooming</a></td>   </tr>`,
      '<tr>  <td><a href="#"> Eyes</a></td>  <td><a href="#"> All skin</a></td>  <th><a href="#"> All Beauty & Grooming</a></th>   </tr>',
      '<tr>  <td><a href="#"> Face</a></td>  <th><a href="#"> Bath, Body & Hygiene</a></th>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#"> Lips</a></td>  <th><a href="#"> Hair</a></th>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#"> Nails</a></td>  <td><a href="#"> Shampoos & Conditioners</a></td>  <td><a href="#"></a></td>   </tr>',
      '<tr>  <td><a href="#"> All Makeup</a></td>  <td><a href="#"> Hair Styling & Care</a></td>  <td><a href="#"></a></td>   </tr>'
    ]
    
  ]


  var navClear =document.getElementById("navClear")
  var navWomen =document.getElementById("navWomen")
  var navMen =document.getElementById("navMen")
  var navKid =document.getElementById("navKid")
  var navShoes =document.getElementById("navShoes")
  var navActive =document.getElementById("navActive")
  var navBags =document.getElementById("navBags")
  var navHome =document.getElementById("navHome")
  var navBeauty =document.getElementById("navBeauty")
  var navGifts =document.getElementById("navGifts")
  var navFlash =document.getElementById("navFlash")



var cateTable=document.querySelector("#cateTable");
  
    navClear.onmouseover=function(){
        cateTable.innerHTML=categoriesArray[0].join('')
    }
    navWomen.onmouseover=function(){
        cateTable.innerHTML=categoriesArray[1].join('')
    }
    navMen.onmouseover=function(){
        cateTable.innerHTML=categoriesArray[2].join('')
    } 
    navKid.onmouseover=function(){
        cateTable.innerHTML=categoriesArray[3].join('')
    } 
    navShoes.onmouseover=function(){
        cateTable.innerHTML=categoriesArray[4].join('')
    } 
    navActive.onmouseover=function(){
        cateTable.innerHTML=categoriesArray[5].join('')
    } 
    navBags.onmouseover=function(){
        cateTable.innerHTML=categoriesArray[6].join('')
    } 
    navHome.onmouseover=function(){
        cateTable.innerHTML=categoriesArray[7].join('')
    } 
    navBeauty.onmouseover=function(){
        cateTable.innerHTML=categoriesArray[8].join('')
    }
    navGifts.onmouseover=function(){
        cateTable.innerHTML=categoriesArray[9].join('')
    }
    navFlash.onmouseover=function(){
        cateTable.innerHTML=categoriesArray[10].join('')
    }