// banner
let stepNumber = 0;
function stepBanner(n) {
  arrowRun((stepNumber += n));
}
function arrowRun(m) {
  let step = document.getElementById("banner__BannerList");
  let sum = 0;
  switch (m) {
    case 0:
      sum = 0;
      step.style.marginLeft = sum + "px";
      break;
    case 1:
      sum = -804;
      step.style.marginLeft = sum + "px";
      break;
    case 2:
      sum = -1606;
      step.style.marginLeft = sum + "px";
      break;
    default:
  }
}

function addProduct(link, name, price, dis_price) {
  document.getElementById("main_product_list_container_main").innerHTML +=
    `
    <a href="">
    <div class="main_product_list_container_main_img">
      <img src="` +
    link +
    `" alt="" />
    </div>
    <div class="main_product_list_container_main_name">
    ` +
    name +
    `
    </div>
    <div class="main_product_list_container_main_review">
      <div class="main_product_list_container_main_review_rating">
        <div
          class="main_product_list_container_main_review_rating_rating-total"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            size="12"
            color="#c7c7c7"
            height="12"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
            style="color: rgb(199, 199, 199)"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            ></path>
          </svg>

          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            size="12"
            color="#c7c7c7"
            height="12"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
            style="color: rgb(199, 199, 199)"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            ></path>
          </svg>

          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            size="12"
            color="#c7c7c7"
            height="12"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
            style="color: rgb(199, 199, 199)"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            ></path>
          </svg>

          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            size="12"
            color="#c7c7c7"
            height="12"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
            style="color: rgb(199, 199, 199)"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            ></path>
          </svg>

          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            size="12"
            color="#c7c7c7"
            height="12"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
            style="color: rgb(199, 199, 199)"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            ></path>
          </svg>
        </div>
        <div
          class="main_product_list_container_main_review_rating_rating-average"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            size="12"
            color="#fdd836"
            height="12"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
            style="color: rgb(253, 216, 54)"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            ></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            size="12"
            color="#fdd836"
            height="12"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
            style="color: rgb(253, 216, 54)"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            ></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            size="12"
            color="#fdd836"
            height="12"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
            style="color: rgb(253, 216, 54)"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            ></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            size="12"
            color="#fdd836"
            height="12"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
            style="color: rgb(253, 216, 54)"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            ></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            size="12"
            color="#fdd836"
            height="12"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
            style="color: rgb(253, 216, 54)"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="main_product_list_container_main_review_amount">
        (24)
      </div>
    </div>
    <div class="main_product_list_container_main_price">
      <div class="main_product_list_container_main_price_1">
      ` +
    price +
    `
      </div>
      <div class="main_product_list_container_main_price_2"> ` +
    dis_price +
    `</div>
    </div>
  </a>
`;
}
// function addProduct(link, name, price, dis_price)
// addProduct("product-order-list1.jpg","Kệ Đựng Cốc Trà Sữa Bằng Nhựa 4 Ngăn - Màu Đen",5000, 1000);
let link = [
  "https://salt.tikicdn.com/cache/280x280/ts/product/d0/e7/12/419d762bb926faa89c6140dd99d01638.jpg",
  "https://salt.tikicdn.com/cache/280x280/ts/product/88/0a/da/e7ca449c225fb0944d6df8b33e244fcf.jpg",
  "https://salt.tikicdn.com/cache/280x280/ts/product/e3/51/a3/570b7f7fcbf38a7921e2cb81038210fa.jpg",
  "https://salt.tikicdn.com/cache/280x280/ts/product/13/c0/1b/f2b7c6c63c60e6c8c9ff78935453a307.jpg",
  "https://salt.tikicdn.com/cache/280x280/ts/product/0f/5a/1f/8e30dc37a3be03b7e89ce49c66751abf.JPG",
];

let name = [
  "Gối cao su non gel lạnh làm mát – Hàng chính hãng Mehome Hàn Quốc – Mát lạnh sảng khoái êm ái cả đêm (MP-011)",
  "Nệm cao su Vạn Thành Standard chính hãng",
  "Giá kệ để giày dép 3/4/5/6 tầng Inox cao cấp bền đẹp Vando - kệ đa năng để đồ siêu chắc chắn",
  "Bộ Chăn Ga Gối Lụa Tencel 60s Đơn Sắc LIDACO Cao Cấp",
  "Nệm Đa Năng Everon",
];
let price = ["339.000 đ", "3.760.000 đ", "259.000 đ", "974.000 đ", "722.000đ"];

let dis_price = ["-42%", "-27%", "-30%", "-46%", "-52%"];

for (let i = 0; i < link.length; i++) {
  addProduct(link[i], name[i], price[i], dis_price[i]);
}

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
