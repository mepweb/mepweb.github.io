const pubgm_btn = document.getElementById('pubgm')
const purchase_btn = document.getElementById('purchase')
const shop_btn = document.getElementById('shop')

pubgm_btn.onclick =()=>{
    location.href = "https://www.midasbuy.com/midasbuy/tr/homepage/pubgm";
}
purchase_btn.onclick =()=>{
    location.href = "https://www.midasbuy.com/midasbuy/tr/buy/pubgm";
}
shop_btn.onclick =()=>{
    location.href = "https://www.midasbuy.com/midasbuy/tr/shop/pubgm";
}
function get(str) {
    $("#totalbp").html(str)
}

$(".ucler").click(function(){
    const ids = "#"+this.id
    $(ids).addClass('ucler_new')
    if (ids == "#600") {
        $('#3000').removeClass('ucler_new')
        $('#6000').removeClass('ucler_new')
        $('#15000').removeClass('ucler_new')
    }
    if (ids == "#3000") {
        $('#600').removeClass('ucler_new')
        $('#6000').removeClass('ucler_new')
        $('#15000').removeClass('ucler_new')
    }
    if (ids == "#6000") {
        $('#600').removeClass('ucler_new')
        $('#3000').removeClass('ucler_new')
        $('#15000').removeClass('ucler_new')
    }
    if (ids == "#15000") {
        $('#600').removeClass('ucler_new')
        $('#3000').removeClass('ucler_new')
        $('#6000').removeClass('ucler_new')
    }
})




























/*const activeimg1 = document.getElementById("activeimg1")
const activeimg2 = document.getElementById("activeimg2")
const activeimg3 = document.getElementById("activeimg3")
const activeimg4 = document.getElementById("activeimg4")*/
