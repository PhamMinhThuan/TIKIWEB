// ------------------BANNER-------------------

let stepNumber = 0;

function stepBanner(n) {
  arrowRun((stepNumber += n));
}
let step = document.getElementById("banner__BannerList");
let front = document.getElementById("banner__arrowFront");
let back = document.getElementById("banner__arrowBack");
front.style.display = "none";
function arrowRun(m) {
  let sum = 0;
  switch (m) {
    case 0:
      sum = 0;
      step.style.marginLeft = sum + "px";
      front.style.display = "none";
      back.style.display = "flex";
      break;
    case 1:
      sum = -803;
      step.style.marginLeft = sum + "px";
      front.style.display = "flex";
      back.style.display = "flex";
      break;
    case 2:
      sum = -1606;
      step.style.marginLeft = sum + "px";
      back.style.display = "none";
      front.style.display = "flex";
      break;
    default:
  }
  document.getElementById("banner__BannerList").style.transitionDuration = "1s";
}

// ------------------PRODUCTLIST-------------------
// FUNCTION THÊM BORDER
 
function hoverBorder(event) {
  const productId = event.target.getAttribute("productid");
  let changeImage = document.querySelector("#mainImage_"+productId);
  let imageList = document.getElementsByClassName("imageList"+productId);
  for (let i = 0; i < imageList.length; i++) {
    if (imageList[i].classList.contains("imageList__hover")) {
      imageList[i].classList.remove("imageList__hover");
    }
  }

  event.target.classList.add("imageList__hover");
  changeImage.src = event.target.src;
}

// FUNCTION TẠO DANH SÁCH SẢN PHẨM
function addProduct(productid, link, mainImage, image1, image2, image3, display4, image4, name, rating, amount, disprice, dispercent, underPrice, loan, gift, color){
  document.getElementById("productList__productCategory").innerHTML+=`
  <a class="productCategory__container" href="`+link+`">  
  <div class="productCategory__mainImage">
  <div class="mainImage">
    <img  id="mainImage_`+productid+`"
      class="mainImage__img"
      width="200px"
      height="200px"
      src="./ASSET/image/`+mainImage+`"
      alt=""
    />
  </div>
</div>
<div class="productCategory__imageList">
  <img
    productId = `+productid+`
    class="imageList`+productid+` imageList__hover"
    onmouseover="hoverBorder(event)"
    src="./ASSET/image/`+image1+`"
    alt=""
  />
  <img
  productId = `+productid+`
    class="imageList`+productid+`"
    onmouseover="hoverBorder(event)"
    src="./ASSET/image/`+image2+`"
    alt=""
  />
  <img
  productId = `+productid+`
    class="imageList`+productid+`"
    onmouseover="hoverBorder(event)"
    src="./ASSET/image/`+image3+`"
    alt=""
  />
  <img 
  productId = `+productid+`
    class="imageList`+productid+`"
    style="display: `+display4+`"
    onmouseover="hoverBorder(event)"
    src="./ASSET/image/`+image4+`"
    alt=""
  />
</div>
<div class="productCategory__content">
  <div class="tikinowImage">
    <img src="./ASSET/image/tiki-now.png" alt="" />
  </div>
  <div class="nameProduct">
    <p>`+name+`</p>
  </div>
  <div class="rateReview">
    <div class="rateReview__starSection">
      <div class="rateReview-starSection__grayStar">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <div
        style="width: `+rating+`"
        class="rateReview-starSection__yellowStar"
      >
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
    </div>
    <div class="rateReview__contentSection">(`+amount+`)</div>
  </div>
  <div class="priceDiscount">
    <p>`+disprice+` <u>đ</u></p>
    <span>`+dispercent+`</span>
  </div>
  <div style="display: `+underPrice+`" class="badgeUnderPrice">
    <img src="./ASSET/image/badge-under-price.png" alt="" />
  </div>
  <div style="display: `+loan+`" class="badgeBenefits">
    <img src="./ASSET/image/badge-benefit1.png" alt="" />
    <span>Trả góp</span>
  </div>
  <div style="display: `+gift+`" class="freegiftList">
    <img
      class="smallFreeGift"
      src="./ASSET/image/free-gift1.png"
      alt=""
    />

    <span>Quà tặng kèm</span>
    <img
      class="bigFreeGift"
      src="./ASSET/image/free-gift2.jpg"
      alt=""
    />
  </div>
  <div style="display: `+color+`" class="badgeAdditionalInfo">
    <span style="color: rgb(120, 120, 120)">Nhiều màu</span>
  </div>
</div>
</a>
  `
}

// ------------------REGISTER-------------------

// FUNCTION OPEN ĐĂNG NHẬP
function registerFormOpen() {
  let form = document.getElementById("bottom");
  form.style.display = "block";
}
// FUNCTION CLOSE ĐĂNG NHẬP
function registerFormClose() {
  let form = document.getElementById("bottom");
  form.style.display = "none";
}
// FUNCTION ĐĂNG NHẬP
function validate() {
  var email = document.getElementById("registerEmail").value;
  var password = document.getElementById("registerPassword").value;
  console.log(email);
  console.log(password);
  if (email == "USERNAME@gmail.com" && password == "123456") {
    alert("Chúc mừng ban, đăng nhập thành công!");
  } else {
    alert("Bạn nhập sai tên đăng nhập hoặc mật khẩu");
  }
}

// ------------------DATA-------------------
// DANH SÁCH SẢN PHẨM
ProductList=[
  { 
    productid: 1,
    link:"../detail-page/main.html", 
    mainImage: "category11.jpg",
    image1: "category11.jpg",
    image2: "category12.jpg",
    image3: "category13.jpg",
    display4: "none",
    image4: "",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    rating: "80%",
    amount: 194,
    disprice: "2.420.000",
    dispercent: "-19%",
    underPrice: "block",
    loan: "flex",
    gift: "flex",
    color: "none",
  },
  {
    productid: 2,
    link:"#",
    mainImage: "category21.jpg",
    image1: "category21.jpg",
    image2: "category22.png",
    image3: "category23.png",
    display4: "inline-block",
    image4: "category24.png",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    rating: "100%",
    amount: 96,
    disprice: "2.890.000",
    dispercent: "-19%",
    underPrice: "block",
    loan: "flex",
    gift: "none",
    color: "block",
  },
  {
    productid: 3,
    link:"#",
    mainImage: "category31.jpg",
    image1: "category31.jpg",
    image2: "category32.jpg",
    image3: "category33.jpg",
    display4: "inline-block",
    image4: "category34.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    rating: "80%",
    amount: 24,
    disprice: "10.990.000",
    dispercent: "-4%",
    underPrice: "block",
    loan: "flex",
    gift: "flex",
    color: "block",
  },
  {
    productid: 4,
    link:"#",
    mainImage: "category11.jpg",
    image1: "category11.jpg",
    image2: "category12.jpg",
    image3: "category13.jpg",
    display4: "none",
    image4: "",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    rating: "80%",
    amount: 194,
    disprice: "2.420.000",
    dispercent: "-19%",
    underPrice: "block",
    loan: "flex",
    gift: "flex",
    color: "none",
  },
  {
    productid: 5,
    link:"#",
    mainImage: "category21.jpg",
    image1: "category21.jpg",
    image2: "category22.png",
    image3: "category23.png",
    display4: "inline-block",
    image4: "category24.png",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    rating: "100%",
    amount: 96,
    disprice: "2.890.000",
    dispercent: "-19%",
    underPrice: "block",
    loan: "flex",
    gift: "none",
    color: "block",
  },
  {
    productid: 6,
    link:"#",
    mainImage: "category31.jpg",
    image1: "category31.jpg",
    image2: "category32.jpg",
    image3: "category33.jpg",
    display4: "inline-block",
    image4: "category34.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    rating: "80%",
    amount: 24,
    disprice: "10.990.000",
    dispercent: "-4%",
    underPrice: "block",
    loan: "flex",
    gift: "flex",
    color: "block",
  },
  { 
    productid: 7,
    link:"../detail-page/main.html", 
    mainImage: "category11.jpg",
    image1: "category11.jpg",
    image2: "category12.jpg",
    image3: "category13.jpg",
    display4: "none",
    image4: "",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    rating: "80%",
    amount: 194,
    disprice: "2.420.000",
    dispercent: "-19%",
    underPrice: "block",
    loan: "flex",
    gift: "flex",
    color: "none",
  },
  {
    productid: 8,
    link:"#",
    mainImage: "category21.jpg",
    image1: "category21.jpg",
    image2: "category22.png",
    image3: "category23.png",
    display4: "inline-block",
    image4: "category24.png",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    rating: "100%",
    amount: 96,
    disprice: "2.890.000",
    dispercent: "-19%",
    underPrice: "block",
    loan: "flex",
    gift: "none",
    color: "block",
  },
  {
    productid: 9,
    link:"#",
    mainImage: "category31.jpg",
    image1: "category31.jpg",
    image2: "category32.jpg",
    image3: "category33.jpg",
    display4: "inline-block",
    image4: "category34.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    rating: "80%",
    amount: 24,
    disprice: "10.990.000",
    dispercent: "-4%",
    underPrice: "block",
    loan: "flex",
    gift: "flex",
    color: "block",
  },
  { 
    productid: 10,
    link:"../detail-page/main.html", 
    mainImage: "category11.jpg",
    image1: "category11.jpg",
    image2: "category12.jpg",
    image3: "category13.jpg",
    display4: "none",
    image4: "",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    rating: "80%",
    amount: 194,
    disprice: "2.420.000",
    dispercent: "-19%",
    underPrice: "block",
    loan: "flex",
    gift: "flex",
    color: "none",
  },
  {
    productid: 11,
    link:"#",
    mainImage: "category21.jpg",
    image1: "category21.jpg",
    image2: "category22.png",
    image3: "category23.png",
    display4: "inline-block",
    image4: "category24.png",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    rating: "100%",
    amount: 96,
    disprice: "2.890.000",
    dispercent: "-19%",
    underPrice: "block",
    loan: "flex",
    gift: "none",
    color: "block",
  },
  {
    productid: 12,
    link:"#",
    mainImage: "category31.jpg",
    image1: "category31.jpg",
    image2: "category32.jpg",
    image3: "category33.jpg",
    display4: "inline-block",
    image4: "category34.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    rating: "80%",
    amount: 24,
    disprice: "10.990.000",
    dispercent: "-4%",
    underPrice: "block",
    loan: "flex",
    gift: "flex",
    color: "block",
  },
  { 
    productid: 13,
    link:"../detail-page/main.html", 
    mainImage: "category11.jpg",
    image1: "category11.jpg",
    image2: "category12.jpg",
    image3: "category13.jpg",
    display4: "none",
    image4: "",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    rating: "80%",
    amount: 194,
    disprice: "2.420.000",
    dispercent: "-19%",
    underPrice: "block",
    loan: "flex",
    gift: "flex",
    color: "none",
  },
  {
    productid: 14,
    link:"#",
    mainImage: "category21.jpg",
    image1: "category21.jpg",
    image2: "category22.png",
    image3: "category23.png",
    display4: "inline-block",
    image4: "category24.png",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    rating: "100%",
    amount: 96,
    disprice: "2.890.000",
    dispercent: "-19%",
    underPrice: "block",
    loan: "flex",
    gift: "none",
    color: "block",
  },
  {
    productid: 15,
    link:"#",
    mainImage: "category31.jpg",
    image1: "category31.jpg",
    image2: "category32.jpg",
    image3: "category33.jpg",
    display4: "inline-block",
    image4: "category34.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    rating: "80%",
    amount: 24,
    disprice: "10.990.000",
    dispercent: "-4%",
    underPrice: "block",
    loan: "flex",
    gift: "flex",
    color: "block",
  },
  { 
    productid: 16,
    link:"../detail-page/main.html", 
    mainImage: "category11.jpg",
    image1: "category11.jpg",
    image2: "category12.jpg",
    image3: "category13.jpg",
    display4: "none",
    image4: "",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    rating: "80%",
    amount: 194,
    disprice: "2.420.000",
    dispercent: "-19%",
    underPrice: "block",
    loan: "flex",
    gift: "flex",
    color: "none",
  },
  {
    productid: 17,
    link:"#",
    mainImage: "category21.jpg",
    image1: "category21.jpg",
    image2: "category22.png",
    image3: "category23.png",
    display4: "inline-block",
    image4: "category24.png",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    rating: "100%",
    amount: 96,
    disprice: "2.890.000",
    dispercent: "-19%",
    underPrice: "block",
    loan: "flex",
    gift: "none",
    color: "block",
  },
  {
    productid: 18,
    link:"#",
    mainImage: "category31.jpg",
    image1: "category31.jpg",
    image2: "category32.jpg",
    image3: "category33.jpg",
    display4: "inline-block",
    image4: "category34.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    rating: "80%",
    amount: 24,
    disprice: "10.990.000",
    dispercent: "-4%",
    underPrice: "block",
    loan: "flex",
    gift: "flex",
    color: "block",
  },
  { 
    productid: 19,
    link:"../detail-page/main.html", 
    mainImage: "category11.jpg",
    image1: "category11.jpg",
    image2: "category12.jpg",
    image3: "category13.jpg",
    display4: "none",
    image4: "",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    rating: "80%",
    amount: 194,
    disprice: "2.420.000",
    dispercent: "-19%",
    underPrice: "block",
    loan: "flex",
    gift: "flex",
    color: "none",
  },
  {
    productid: 20,
    link:"#",
    mainImage: "category21.jpg",
    image1: "category21.jpg",
    image2: "category22.png",
    image3: "category23.png",
    display4: "inline-block",
    image4: "category24.png",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    rating: "100%",
    amount: 96,
    disprice: "2.890.000",
    dispercent: "-19%",
    underPrice: "block",
    loan: "flex",
    gift: "none",
    color: "block",
  },
  {
    productid: 21,
    link:"#",
    mainImage: "category31.jpg",
    image1: "category31.jpg",
    image2: "category32.jpg",
    image3: "category33.jpg",
    display4: "inline-block",
    image4: "category34.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    rating: "80%",
    amount: 24,
    disprice: "10.990.000",
    dispercent: "-4%",
    underPrice: "block",
    loan: "flex",
    gift: "flex",
    color: "block",
  },
  { 
    productid: 22,
    link:"../detail-page/main.html", 
    mainImage: "category11.jpg",
    image1: "category11.jpg",
    image2: "category12.jpg",
    image3: "category13.jpg",
    display4: "none",
    image4: "",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    rating: "80%",
    amount: 194,
    disprice: "2.420.000",
    dispercent: "-19%",
    underPrice: "block",
    loan: "flex",
    gift: "flex",
    color: "none",
  },
  {
    productid: 23,
    link:"#",
    mainImage: "category21.jpg",
    image1: "category21.jpg",
    image2: "category22.png",
    image3: "category23.png",
    display4: "inline-block",
    image4: "category24.png",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    rating: "100%",
    amount: 96,
    disprice: "2.890.000",
    dispercent: "-19%",
    underPrice: "block",
    loan: "flex",
    gift: "none",
    color: "block",
  },
  {
    productid: 24,
    link:"#",
    mainImage: "category31.jpg",
    image1: "category31.jpg",
    image2: "category32.jpg",
    image3: "category33.jpg",
    display4: "inline-block",
    image4: "category34.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    rating: "80%",
    amount: 24,
    disprice: "10.990.000",
    dispercent: "-4%",
    underPrice: "block",
    loan: "flex",
    gift: "flex",
    color: "block",
  },
  { 
    productid: 25,
    link:"../detail-page/main.html", 
    mainImage: "category11.jpg",
    image1: "category11.jpg",
    image2: "category12.jpg",
    image3: "category13.jpg",
    display4: "none",
    image4: "",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    rating: "80%",
    amount: 194,
    disprice: "2.420.000",
    dispercent: "-19%",
    underPrice: "block",
    loan: "flex",
    gift: "flex",
    color: "none",
  },
  {
    productid: 26,
    link:"#",
    mainImage: "category21.jpg",
    image1: "category21.jpg",
    image2: "category22.png",
    image3: "category23.png",
    display4: "inline-block",
    image4: "category24.png",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    rating: "100%",
    amount: 96,
    disprice: "2.890.000",
    dispercent: "-19%",
    underPrice: "block",
    loan: "flex",
    gift: "none",
    color: "block",
  },
  {
    productid: 27,
    link:"#",
    mainImage: "category31.jpg",
    image1: "category31.jpg",
    image2: "category32.jpg",
    image3: "category33.jpg",
    display4: "inline-block",
    image4: "category34.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    rating: "80%",
    amount: 24,
    disprice: "10.990.000",
    dispercent: "-4%",
    underPrice: "block",
    loan: "flex",
    gift: "flex",
    color: "block",
  },
  { 
    productid: 28,
    link:"../detail-page/main.html", 
    mainImage: "category11.jpg",
    image1: "category11.jpg",
    image2: "category12.jpg",
    image3: "category13.jpg",
    display4: "none",
    image4: "",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    rating: "80%",
    amount: 194,
    disprice: "2.420.000",
    dispercent: "-19%",
    underPrice: "block",
    loan: "flex",
    gift: "flex",
    color: "none",
  },
  {
    productid: 29,
    link:"#",
    mainImage: "category21.jpg",
    image1: "category21.jpg",
    image2: "category22.png",
    image3: "category23.png",
    display4: "inline-block",
    image4: "category24.png",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    rating: "100%",
    amount: 96,
    disprice: "2.890.000",
    dispercent: "-19%",
    underPrice: "block",
    loan: "flex",
    gift: "none",
    color: "block",
  },
  {
    productid: 30,
    link:"#",
    mainImage: "category31.jpg",
    image1: "category31.jpg",
    image2: "category32.jpg",
    image3: "category33.jpg",
    display4: "inline-block",
    image4: "category34.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    rating: "80%",
    amount: 24,
    disprice: "10.990.000",
    dispercent: "-4%",
    underPrice: "block",
    loan: "flex",
    gift: "flex",
    color: "block",
  }

]
for(Item of ProductList){
  addProduct(Item.productid ,Item.link, Item.mainImage, Item.image1, Item.image2, Item.image3, Item.display4,Item.image4, Item.name, Item.rating, Item.amount, Item.disprice, Item.dispercent, Item.underPrice, Item.loan, Item.gift, Item.color);
}

//------------------ count result----------------------------
function countResult(){
  let number = document.getElementById("title__number");
  let count = document.getElementsByClassName("productCategory__container");
  number.innerHTML=count.length;
}
  window.onload=countResult();
