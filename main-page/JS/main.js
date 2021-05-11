//slideShow
let slideIndex = 1;
window.onload = setInterval(() => {
  showSlides((slideIndex += 1));
}, 10000);
showSlides(slideIndex);

function slideArrow(n) {
  showSlides((slideIndex += n));
}
function slideCircle(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("fadeImg");
  let dots = document.getElementsByClassName("circle");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


//list item
  productItem=[
    {
     image: "dis-product1.jpg",
     sale: "38%",
     price: "99.000 đ",
     progress: "75%",
     amount: "15"
   },
   {
    image: "dis-product1.jpg",
    sale: "38%",
    price: "99.000 đ",
    progress: "75%",
    amount: "15"
  },
  {
    image: "dis-product1.jpg",
    sale: "38%",
    price: "99.000 đ",
    progress: "75%",
    amount: "15"
  },
  {
    image: "dis-product1.jpg",
    sale: "38%",
    price: "99.000 đ",
    progress: "75%",
    amount: "15"
  },
  {
    image: "dis-product1.jpg",
    sale: "38%",
    price: "99.000 đ",
    progress: "75%",
    amount: "15"
  }
]
  function addDisProduct(image, sale, price, progress, amount){
    document.getElementById("main-dis-product-content__list").innerHTML+=`
    <a class="main-dis-product-content-list__item" href="">
    <div class="main-dis-product-content-list-item__img">
      <img 
      width= "192px"
      height= "192px" 
      src="./ASSET/image/`+image+`" alt="" />
      <div class="main-dis-product-content-list-item-img__number">
        `+sale+`
      </div>
    </div>
    <div class="main-dis-product-content-list-item__price">
      `+price+`
    </div>
    <div class="main-dis-product-content-list-item__amount">
      <div
        class="main-dis-product-content-list-item-amount__progress"
        style="width: `+progress+`"
      ></div>
      <span>Đã bán `+amount+`</span>
      <img src="./ASSET/image/fire_icon.svg" alt="" />
    </div>
  </a>
`
}
    for(Item of productItem){
      addDisProduct(Item.image, Item.sale, Item.price, Item.progress, Item.amount)
    }
//-------------------------------break-----------------------

//max key: 10 do dinh huong css width co dinh, neu se tu dong nhay xuong hang khac
navItem=[
  {
   image: "nav1.png",
   content: "Mã giảm giá",
 },
 {
  image: "nav2.png",
  content: "Bí kíp săn sale",
},
{
  image: "nav3.png",
  content: "Nạp thẻ & tiền điện",
},
{
  image: "nav4.png",
  content: "Free Ship",
},
{
  image: "nav5.png",
  content: "Hoàn tiền 15%",
},
{
  image: "nav6.png",
  content: "Dành cho hội viên",
},
{
  image: "nav7.png",
  content: "Hẹn giao & lắp đặt",
},
{
  image: "nav8.png",
  content: " Coupon 50%",
},
{
  image: "nav9.png",
  content: "Thực phẩm tươi sống",
},
{
  image: "nav10.png",
  content: "Ưu đãi đối tác",
}
]
function addNav(image, content){
document.getElementById("main__nav-1").innerHTML+=`
<a href="">
<img 
width= "48px"
height= "48px" 
src="./ASSET/image/`+image+`" alt="" />
<span> `+content+`</span>
</a>
`
}
for(Item of navItem){
 addNav(Item.image, Item.content)
}

//-------------------------------break-----------------------

brandItem=[
  {
   image: "dis-brand1.jpg",
 },
 {
  image: "dis-brand2.jpg",
},
{
  image: "dis-brand3.jpg",
},
{
  image: "dis-brand4.jpg",
}
]
function addBrand(image){
  document.getElementById("main__dis-brand").innerHTML+=`
  <a href="">
  <img src="./ASSET/image/`+image+`" alt="" />
  </a>
  `
  }
  
for(Item of brandItem){
  addBrand(Item.image)
}

//-------------------------------break-----------------------

//DANH MUC NOI BAT
listItem=[
  {
   image: "order-list1.jpg",
   content: "Trang trí nhà cửa"
 },
 {
  image: "order-list2.png",
  content: "Sửa chữa nhà cửa"
},
{
  image: "order-list3.jpg",
  content: "Đồ uống - Pha chế"
},
{
  image: "order-list4.jpg",
  content: "Nội thất"
},
{
  image: "order-list5.png",
  content: "Thực phẩm"
},
{
  image: "order-list6.jpg",
  content: "Chăm sóc nhà cửa"
},
{
  image: "order-list7.jpg",
  content: "Thiết bị gia đình"
},
{
  image: "order-list8.jpg",
  content: "Chăm sóc thú cưng"
},
{
  image: "order-list9.jpg",
  content: "Đồ dùng phòng ngủ"
},
{
  image: "order-list10.jpg",
  content: "Đồ dùng nhà bếp"
}
]
function addList(image, content){
  document.getElementById("main-order-list__product").innerHTML+=`
  <a href="">
  <img 
  width= "60px"
  height= "60px"
  src="./ASSET/image/`+image+`" alt="" />
  <span>`+content+`</span>
  </a>
  `
  }
  for(Item of listItem){
    addList(Item.image, Item.content)
  }

//-------------------------------break-----------------------

//Tim kiem noi bat
imageItem=[
  {
   image1: "search-group11.jpg",
   image2: "search-group12.jpg",
   image3: "search-group13.jpg",
   color: "rgb(255, 241, 241)",
   content: "sữa đặc ngôi sao phương nam",
   amount: "67 sản phẩm"
 },
 {
  image1: "search-group21.jpg",
  image2: "search-group22.jpg",
  image3: "search-group23.jpg",
  color: "rgb(211, 238, 255)",
  content: "tượng trang trí",
  amount: "1k+ sản phẩm"
},
{
  image1: "search-group31.jpg",
  image2: "search-group32.jpg",
  image3: "search-group33.jpg",
  color: "rgb(252, 248, 228)",
  content: "kính hàn điện tử",
  amount: "737 sản phẩm"
},
{
  image1: "search-group41.jpg",
  image2: "search-group42.jpg",
  image3: "search-group43.jpg",
  color: "rgb(231, 248, 241)",
  content: "cà phê",
  amount: "960 sản phẩm"
}
]
function addImage(image1, image2, image3, color, content, amount){
  document.getElementById("main-search__group").innerHTML+=`
  <a href="">
    <div class="main-search-group__picture">
      <img width="86px" 
      height="86px" src="./ASSET/image/`+image1+`" alt="" />
      <img width="86px" 
      height="86px" src="./ASSET/image/`+image2+`" alt="" />
      <img width="86px" 
      height="86px" src="./ASSET/image/`+image3+`" alt="" />
    </div>
    <div class="main-search-group__content" style="background-color: `+color+`">
      <span class="main-search-group-content__title">`+content+`</span>
      <span class="main-search-group-content__sub-title">`+amount+`</span>
    </div>
  </a>
`
  }
  for(Item of imageItem){
    addImage(Item.image1, Item.image2, Item.image3, Item.color, Item.content, Item.amount)
  }


//-------------------------------break-----------------------

//deal
dealItem=[
  {
   image: "dis-deal1.jpg"
 },
 {
  image: "dis-deal2.jpg"
},
{
  image: "dis-deal3.jpg"
}
]
function addDeal(image){
  document.getElementById("main__dis-deal").innerHTML+=`
  <a href=""><img src="./ASSET/image/`+image+`" alt="" /></a>
  `
  }
  for(Item of dealItem){
    addDeal(Item.image)
  }

//-------------------------------break-----------------------

//list product
function addProduct(link, name, rating, rate_amount, price, dis_price){
    document.getElementById("main-product-list-container__main").innerHTML+=`
    <a href="">
    <div class="main-product-list-container__main-img">
      <img src="`+link+`" alt="" />
    </div>
    <div class="main-product-list-container__main-name">
    `+name+`
    </div>
    <div class="main-product-list-container__main-review">
    <div class="main-product-list-container-main-review__rating">
      <div
        class="main-product-list-container-main-review-rating__rating-total"
      >
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <div
        style="width: `+rating+`"
        class="main-product-list-container-main-review-rating__rating-average"
      >
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
    </div>
    <div class="main-product-list-container-main-review__amount">
      (`+rate_amount+`)
    </div>
  </div>
<div class="main-product-list-container__main-price">
      <div class="main-product-list-container-main-price__1">
      `+price+`
      </div>
      <div class="main-product-list-container-main-price__2"> `+dis_price+`</div>
    </div>
  </a>
`
}
sumOfProduct=[
   {
    link: "https://salt.tikicdn.com/cache/280x280/ts/product/d0/e7/12/419d762bb926faa89c6140dd99d01638.jpg",
    name:"Gối cao su non gel lạnh làm mát – Hàng chính hãng Mehome Hàn Quốc – Mát lạnh sảng khoái êm ái cả đêm (MP-011)",
    rating: "80%",
    rate_amount: 50,
    price:  "339.000 đ",
    dis_price: "-42%"
  },
  {
    link: "https://salt.tikicdn.com/cache/280x280/ts/product/88/0a/da/e7ca449c225fb0944d6df8b33e244fcf.jpg",
    name:"Nệm cao su Vạn Thành Standard chính hãng",
    rating: "90%",
    rate_amount: 20,
    price:  "3.760.000 đ",
    dis_price: "-27%"
},
{
  link: "https://salt.tikicdn.com/cache/280x280/ts/product/d0/e7/12/419d762bb926faa89c6140dd99d01638.jpg",
  name:"Gối cao su non gel lạnh làm mát – Hàng chính hãng Mehome Hàn Quốc – Mát lạnh sảng khoái êm ái cả đêm (MP-011)",
  rating: "80%",
  rate_amount: 50,
  price:  "339.000 đ",
  dis_price: "-42%"
},
{
  link: "https://salt.tikicdn.com/cache/280x280/ts/product/88/0a/da/e7ca449c225fb0944d6df8b33e244fcf.jpg",
  name:"Nệm cao su Vạn Thành Standard chính hãng",
  rating: "90%",
  rate_amount: 20,
  price:  "3.760.000 đ",
  dis_price: "-27%"
}

]
    for (let product of sumOfProduct){
      
      addProduct(product.link, product.name, product.rating, product.rate_amount, product.price, product.dis_price)
      }
  
            // for(let i=0; i<2; i++){
              
            //   addProduct(sumOfProduct[i].link, sumOfProduct[i].name, sumOfProduct[i].price, sumOfProduct[i].dis_price)
            // }



  
  






