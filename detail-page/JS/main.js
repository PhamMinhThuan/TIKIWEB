//------------------Detail Product-----------------------------
// imageClick
function clickProduct(event){
  // erase
  let imageList=document.querySelectorAll(".main-detailProduct__imageList a img");
  for(let i=0; i<imageList.length; i++){
    if(imageList[i].classList.contains("imageList__active")){
      imageList[i].classList.remove("imageList__active");
    }
    console.log(imageList);
  }

// add
event.target.classList.add("imageList__active");
let mainImage=document.querySelector(".main-detailProduct__productImage img");
mainImage.src = event.target.src;
}
// colorClick

function colorClick(event){
  //noi dung chon mau
  let number = event.target.getAttribute("color");
 let variousContent = document.querySelector(".imageSection__part"+number);
 console.log(variousContent);
 let sameContent = document.getElementsByClassName("detailProduct__imageSection");
 for(let i=0; i<sameContent.length;i++){
  sameContent[i].style.display="none";
 }
 variousContent.style.display="block";

  // an noi dung khong lien quan
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
      }
  ]
  for(Item of parrityProduct){
    addProduct(Item.link, Item.name, Item.width, Item.amount, Item.dis_price, Item.percent, Item.price);
  }
              

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
             console.log(email);
             console.log(password);
            if((email=="USERNAME@gmail.com")&&(password=="123456")){
              alert("Chúc mừng ban, đăng nhập thành công!");

            }else{
              alert("Bạn nhập sai tên đăng nhập hoặc mật khẩu");
          }
        }