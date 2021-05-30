//------------------Detail Product-----------------------------
// imageClick
function clickProduct(event){
  // erase
  let imageList=document.querySelectorAll(".main-detailProduct__imageList a img");
  for(let i=0; i<imageList.length; i++){
    if(imageList[i].classList.contains("imageList__active")){
      imageList[i].classList.remove("imageList__active");
    }
  }

// add
event.target.classList.add("imageList__active");
let number = event.target.getAttribute("color");
let mainImage=document.querySelector(".productImage_"+number);
mainImage.src = event.target.src;

}
// colorClick

function colorClick(event){
   // an noi dung khong lien quan
  let number = event.target.getAttribute("color");
 let variousContent = document.querySelector(".imageSection__part"+number);
 let sameContent = document.querySelectorAll(".productInformation-ColorSection__colorList a");
 let imageSection= document.getElementsByClassName("detailProduct__imageSection");
 let imageSmall= document.getElementsByClassName("colorList__stick");
// erase imageSection__part
 for(let i=0; i<imageSection.length;i++){
    imageSection[i].style.display="none";
// erase xóa class colorList__active
  if(sameContent[i].classList.contains("colorList__active")){
    sameContent[i].classList.remove("colorList__active");
  }
  //  erase colorList__img1
  imageSmall[i].style.display="none";
 }
 // add imageSection__part
 variousContent.style.display="block";

 let colorContent = document.querySelector(".colorList__a"+number);
 
 // add class colorList__active
 colorContent.classList.add("colorList__active");

 let smallImgContent = document.querySelector(".colorList__img"+number);
 smallImgContent.style.display="block";
  //noi dung chon mau

 
}
//------------------- san pham tuong tu-----------------------------
let stepNumber = 0;
function stepSlide(n){
arrowRun(stepNumber+=n);
}
let step = document.getElementById("main-parrityProduct__productList");
let front = document.getElementById("arrowFront");
let back = document.getElementById("arrowBack");
front.style.display="none";
function arrowRun(m){
  // Hiện nút
  if (m>=2){
    back.style.display="none";
    front.style.display="flex";
  }else if(m<=0){
    front.style.display="none";
    back.style.display="flex";
  }  else{
    front.style.display="flex";
    back.style.display="flex";
  }
  
    let sum = 0;
    sum = -1236*m;
    step.style.marginLeft=sum+"px";
    step.style.transitionDuration = "0.5s";
  
  }
  
// add san pham
function addProduct(link, name, width ,amount ,dis_price ,percent , price ){
  document.getElementById("main-parrityProduct__productList").innerHTML+=`
    <a href="">
      <div class="productList__productImage">
        <img
          width="200px"
          height="200px"
          src="./ASSET/image/`+link+`"
          alt=""
        />
      </div>
      <div class="productList__productContent">
        <div class="productList-productContent__productName">
          `+name+`
        </div>
        <div class="productList-productContent__productRating">
          <div class="productList-productRating__star">
            <div class="productList-productRating__grayStar">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <div
              style="width: `+width+`"
              class="productList-productRating__yellowStar"
            >
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
          <div class="productList-productRating__review">
            (`+amount+` nhận xét)
          </div>
        </div>
        <div class="productList-productContent__disPrice">
          <span> `+dis_price+`</span>
          <p>`+percent+`</p>
        </div>
        <div class="productList-productContent__originalPrice">
        `+price+`
        </div>
      </div>
    </a>
    `
}
    parrityProduct=[
      {
        link: "OPPO-A12-31.jpg",
        name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
        width: "80%",
        amount: 194,
        dis_price: "2.420.000 ₫",
        percent: "-19%",
        price: "2.990.000 ₫"
      },
      {
        link: "redmi9.jpg",
        name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
        width: "100%",
        amount: 96,
        dis_price: "2.890.000 ₫",
        percent: "-19%",
        price: "3.590.000 ₫"
      },
      {
        link: "galaxy-a72.jpg",
        name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
        width: "80%",
        amount: 24,
        dis_price: "10.990.000 ₫",
        percent: "-4%",
        price: "11.450.000 ₫"
      },
      {
        link: "OPPO-A12-31.jpg",
        name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
        width: "80%",
        amount: 194,
        dis_price: "2.420.000 ₫",
        percent: "-19%",
        price: "2.990.000 ₫"
      },
      {
        link: "redmi9.jpg",
        name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
        width: "100%",
        amount: 96,
        dis_price: "2.890.000 ₫",
        percent: "-19%",
        price: "3.590.000 ₫"
      },
      {
        link: "galaxy-a72.jpg",
        name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
        width: "80%",
        amount: 24,
        dis_price: "10.990.000 ₫",
        percent: "-4%",
        price: "11.450.000 ₫"
      },
      {
        link: "OPPO-A12-31.jpg",
        name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
        width: "80%",
        amount: 194,
        dis_price: "2.420.000 ₫",
        percent: "-19%",
        price: "2.990.000 ₫"
      },
      {
        link: "redmi9.jpg",
        name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
        width: "100%",
        amount: 96,
        dis_price: "2.890.000 ₫",
        percent: "-19%",
        price: "3.590.000 ₫"
      },
      {
        link: "galaxy-a72.jpg",
        name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
        width: "80%",
        amount: 24,
        dis_price: "10.990.000 ₫",
        percent: "-4%",
        price: "11.450.000 ₫"
      },
      {
        link: "OPPO-A12-31.jpg",
        name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
        width: "80%",
        amount: 194,
        dis_price: "2.420.000 ₫",
        percent: "-19%",
        price: "2.990.000 ₫"
      },
      {
        link: "redmi9.jpg",
        name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
        width: "100%",
        amount: 96,
        dis_price: "2.890.000 ₫",
        percent: "-19%",
        price: "3.590.000 ₫"
      },
      {
        link: "galaxy-a72.jpg",
        name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
        width: "80%",
        amount: 24,
        dis_price: "10.990.000 ₫",
        percent: "-4%",
        price: "11.450.000 ₫"
      }
  ]
  for(Item of parrityProduct){
    addProduct(Item.link, Item.name, Item.width, Item.amount, Item.dis_price, Item.percent, Item.price);
  }
    
  
//ProductList
function addProductList(image, name, width ,amount ,dis_price ,percent ){
  document.getElementById("main-moreDiscover__productList").innerHTML+=`
  <a class="moreDiscover-productList__product" href="#">
  <div class="productList-product__container">
    <div class="productList-product__productImage">
      <img
        width="200px"
        height="200px"
        src="./ASSET/image/`+image+`"
        alt=""
      />
    </div>
    <div class="productList-product__productName">
    `+name+`
    </div>
    <div class="productList-product__ratingNumber">
      <div class="productList-product__rating">
        <div class="productList-product__grayRating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>

        <div
          style="width: `+width+`"
          class="productList-product__yellowRating"
        >
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
      </div>

      <div class="productList-product__number">(`+amount+`)</div>
    </div>
    <div class="productList-product__productDisPrice">
      <p>`+dis_price+` ₫</p>
      <span>`+percent+`</span>
    </div>
  </div>
</a>

  `
}

productList=[
  {
    image: "OPPO-A12-31.jpg",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 194,
    dis_price: "2.420.000 ₫",
    percent: "-19%",
  },
  {
    image: "redmi9.jpg",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    width: "100%",
    amount: 96,
    dis_price: "2.890.000 ₫",
    percent: "-19%", 
  },
  {
    image: "galaxy-a72.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 24,
    dis_price: "10.990.000 ₫",
    percent: "-4%",
  },
  {
    image: "OPPO-A12-31.jpg",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 194,
    dis_price: "2.420.000 ₫",
    percent: "-19%",
  },
  {
    image: "redmi9.jpg",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    width: "100%",
    amount: 96,
    dis_price: "2.890.000 ₫",
    percent: "-19%", 
  },
  {
    image: "galaxy-a72.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 24,
    dis_price: "10.990.000 ₫",
    percent: "-4%",
  },
  {
    image: "OPPO-A12-31.jpg",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 194,
    dis_price: "2.420.000 ₫",
    percent: "-19%",
  },
  {
    image: "redmi9.jpg",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    width: "100%",
    amount: 96,
    dis_price: "2.890.000 ₫",
    percent: "-19%", 
  },
  {
    image: "galaxy-a72.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 24,
    dis_price: "10.990.000 ₫",
    percent: "-4%",
  },
  {
    image: "OPPO-A12-31.jpg",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 194,
    dis_price: "2.420.000 ₫",
    percent: "-19%",
  },
  {
    image: "redmi9.jpg",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    width: "100%",
    amount: 96,
    dis_price: "2.890.000 ₫",
    percent: "-19%", 
  },
  {
    image: "galaxy-a72.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 24,
    dis_price: "10.990.000 ₫",
    percent: "-4%",
  },
  {
    image: "OPPO-A12-31.jpg",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 194,
    dis_price: "2.420.000 ₫",
    percent: "-19%",
  },
  {
    image: "redmi9.jpg",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    width: "100%",
    amount: 96,
    dis_price: "2.890.000 ₫",
    percent: "-19%", 
  },
  {
    image: "galaxy-a72.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 24,
    dis_price: "10.990.000 ₫",
    percent: "-4%",
  },
  {
    image: "OPPO-A12-31.jpg",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 194,
    dis_price: "2.420.000 ₫",
    percent: "-19%",
  },
  {
    image: "redmi9.jpg",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    width: "100%",
    amount: 96,
    dis_price: "2.890.000 ₫",
    percent: "-19%", 
  },
  {
    image: "galaxy-a72.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 24,
    dis_price: "10.990.000 ₫",
    percent: "-4%",
  },
  {
    image: "OPPO-A12-31.jpg",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 194,
    dis_price: "2.420.000 ₫",
    percent: "-19%",
  },
  {
    image: "redmi9.jpg",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    width: "100%",
    amount: 96,
    dis_price: "2.890.000 ₫",
    percent: "-19%", 
  },
  {
    image: "galaxy-a72.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 24,
    dis_price: "10.990.000 ₫",
    percent: "-4%",
  },
  {
    image: "OPPO-A12-31.jpg",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 194,
    dis_price: "2.420.000 ₫",
    percent: "-19%",
  },
  {
    image: "redmi9.jpg",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    width: "100%",
    amount: 96,
    dis_price: "2.890.000 ₫",
    percent: "-19%", 
  },
  {
    image: "galaxy-a72.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 24,
    dis_price: "10.990.000 ₫",
    percent: "-4%",
  },
  {
    image: "OPPO-A12-31.jpg",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 194,
    dis_price: "2.420.000 ₫",
    percent: "-19%",
  },
  {
    image: "redmi9.jpg",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    width: "100%",
    amount: 96,
    dis_price: "2.890.000 ₫",
    percent: "-19%", 
  },
  {
    image: "galaxy-a72.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 24,
    dis_price: "10.990.000 ₫",
    percent: "-4%",
  },
  {
    image: "OPPO-A12-31.jpg",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 194,
    dis_price: "2.420.000 ₫",
    percent: "-19%",
  },
  {
    image: "redmi9.jpg",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    width: "100%",
    amount: 96,
    dis_price: "2.890.000 ₫",
    percent: "-19%", 
  },
  {
    image: "galaxy-a72.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 24,
    dis_price: "10.990.000 ₫",
    percent: "-4%",
  },
  {
    image: "OPPO-A12-31.jpg",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 194,
    dis_price: "2.420.000 ₫",
    percent: "-19%",
  },
  {
    image: "redmi9.jpg",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    width: "100%",
    amount: 96,
    dis_price: "2.890.000 ₫",
    percent: "-19%", 
  },
  {
    image: "galaxy-a72.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 24,
    dis_price: "10.990.000 ₫",
    percent: "-4%",
  },
  {
    image: "OPPO-A12-31.jpg",
    name: "Điện Thoại Oppo A12 (3GB/32GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 194,
    dis_price: "2.420.000 ₫",
    percent: "-19%",
  },
  {
    image: "redmi9.jpg",
    name: "Điện Thoại Xiaomi Redmi 9 - Hàng Chính Hãng",
    width: "100%",
    amount: 96,
    dis_price: "2.890.000 ₫",
    percent: "-19%", 
  },
  {
    image: "galaxy-a72.jpg",
    name: "Điện Thoại Samsung Galaxy A72 (8GB/256GB) - Hàng Chính Hãng",
    width: "80%",
    amount: 24,
    dis_price: "10.990.000 ₫",
    percent: "-4%",
  }
]

for(Item of productList){
  addProductList(Item.image, Item.name, Item.width, Item.amount, Item.dis_price, Item.percent);
}

// xem them productDescription

function whatToSeeing(){
  let content = document.getElementById("main-productDescription__content");
  let buttonName = document.getElementById("moreSeeing");
  if(content.classList.contains("heightMinus")){
  content.classList.remove("heightMinus");
  buttonName.innerHTML="Thu gọn nội dung";

}else{ 
  content.classList.add("heightMinus");
}
}

// xem them productDescription
function whatToSeeing2(){
  let content = document.getElementById("main-moreDiscover__productList");
  let buttonName = document.getElementById("moreDiscover__moreInf");
  if(content.classList.contains("moreInf")){
  content.classList.remove("moreInf");
  buttonName.innerHTML="Thu gọn nội dung";

}else{ 
  content.classList.add("moreInf");
}
}
//------------------ pagation----------------------------
let figure = 1;
function clickPagation(figure){
  let li = document.querySelectorAll(".productRating-pagination__pages ul li a");
  // erase class pagination__active
  for(let i=0;i<li.length;i++){
    if(li[i].classList.contains("pagination__active")){
      li[i].classList.remove("pagination__active");
    }
  }
let frontArrow = document.getElementById("frontArrow");
let backArrow = document.getElementById("backArrow");

  if(figure==1){
    frontArrow.style.display="none";
    backArrow.style.display="block";
  }
  if(figure==5){
    frontArrow.style.display="block";
    backArrow.style.display="none";
  }
  if(figure>1&&figure<5){
    frontArrow.style.display="block";
    backArrow.style.display="block";
  }
      // figure = event.target.getAttribute("step");
  let mainTarget = document.querySelector(".active"+figure);
  // add class pagination__active
  mainTarget.classList.add("pagination__active");

  let categoryTarget = document.querySelector("#productRating-childSection__step"+figure);
  // diplay none .productCategory
  let categoryNumber  = document.querySelectorAll(".childSection");
  console.log(categoryNumber.length);
  for(let i=0;i<categoryNumber.length;i++){
    if(categoryNumber[i].style.display="block"){
      categoryNumber[i].style.display="none";
    }
  }
// diplay flex .productCategory target
  categoryTarget.style.display="block"; 
}





// or dung content.classList.toggle("heightMinus"))
// content.style.height = '';

//------------------- dang nhap-----------------------------

// FUNCTION OPEN ĐĂNG NHẬP
function registerFormOpen(){
  let form = document.getElementById("bottom");
  form.style.display="block";
}
// FUNCTION CLOSE ĐĂNG NHẬP
function registerFormClose(){
  let form = document.getElementById("bottom");
  form.style.display="none";
}
// FUNCTION ĐĂNG NHẬP
          function validate(){
             var email = document.getElementById("registerEmail").value;
             var password = document.getElementById("registerPassword").value;
            if((email=="USERNAME@gmail.com")&&(password=="123456")){
              alert("Chúc mừng ban, đăng nhập thành công!");

            }else{
              alert("Bạn nhập sai tên đăng nhập hoặc mật khẩu");
          }
        }