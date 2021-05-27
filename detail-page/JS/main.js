// san pham tuong tu
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
  
//   
// function arrowRun(m){
// let step = document.getElementById("main-parrityProduct__productList");
//   if ((m > 2)||(m < 0) ){
  
//   }else{
//   let sum = 0;
//   sum = -1236*m;
  
//   step.style.marginLeft=sum+"px";
//   }
// }
// let movement = [
//   {
//     marginLeft="0px",
//   },
//   {
//     marginLeft="-100%",
//   },
//   {
//     marginLeft="-200%",
//   }
// ]

// let step = document.getElementById("main-parrityProduct__productList");
// function running(m){
//   if ((m > 2)||(m < 0) ){
  
//   }else{
//   let sum = 0;
//   sum = -1236*m;
//   console.log(sum);
//   step.style.marginLeft=sum+"px";
//   }
  
// }
// step.animate(running, {
//   duration: 5000,
//   fill: 'forwards'
// });


// san pham tuong tu

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
        link: "OPPO-A12.jpg",
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
        link: "OPPO-A12.jpg",
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
        link: "OPPO-A12.jpg",
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
        link: "OPPO-A12.jpg",
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
        link: "OPPO-A12.jpg",
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
        link: "OPPO-A12.jpg",
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
              

// for(let i=0; i<link.length; i++){
//   addProduct(link[i], name[i], price[i], dis_price[i]);
// }
// function accountDropdown(){
//   document.querySelector(".header-listDropMenu__menuInner").classList.toggle("showDisappear");
// }
// function dropdown(){
//   // let dropdownContent=document.getElementsByClassName("header-listDropMenu__menuInner");
//   document.querySelector(".header-listDropMenu__menuInner").classList.toggle("showDisappear");
// }
// function unDropdown(){
//   // let dropdownContent=document.getElementsByClassName("header-listDropMenu__menuInner");
//   if (document.querySelector(".header-listDropMenu__menuInner").classList.contains("showDisappear")) {
//     document.querySelector(".header-listDropMenu__menuInner").classList.remove("showDisappear");
// }
// }
// function btn xem them noi dung, xoa class, thay doi ten noi dung btn
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