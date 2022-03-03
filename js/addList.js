// const lists = document.getElementById("lists");
// const button = document.getElementById("addBtn");

// button.addEventListener("click", async function(){
//     //APIデータのやり取り
//     const res = await fetch("https://my-json-server.typicode.com/miyukiichan07/createJSONdata/coupon");
//     const coupons = await res.json();

//     //DOM操作
//     coupons.forEach(function(coupon) {
//         const list = document.createElement("li");
//         list.innerText = coupon.name;
//         lists.appendChild(list);
//     });
// });

// window.addEventListener("load", async function(){
//     //APIデータのやり取り
//     const res = await fetch("https://my-json-server.typicode.com/miyukiichan07/createJSONdata/coupon");
//     const coupons = await res.json();

//     //DOM操作
//     coupons.forEach(function(coupon) {
//         const list = document.createElement("li");
//         list.innerText = coupon.name;
//         lists.appendChild(list);
//     });
// });

//DOM
const lists = document.getElementById("lists");
const button = document.getElementById("addBtn");

//関数（メソッド）
async function getCoupons (){
    //データのやり取り
    const res = await fetch("https://my-json-server.typicode.com/miyukiichan07/createJSONdata/coupon");
    const users = await res.json();
    return users;
}

async function listCoupons(){
    const users = await getCoupons();
    users.forEach(addList);
}


function addList(user){
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list);
}

//イベント
window.addEventListener("load", listCoupons);
button.addEventListener("click",listCoupons);

