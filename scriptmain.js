var caffeee=[{"name":"nescafe0","price":20000,"quantity":1},{"name":"nescafe1","price":40000,"quantity":7},{"name":"nescafe2","price":49999,"quantity":27},{"name":"nescafe3","price":49999,"quantity":30},{"name":"nescafe4","price":49999,"quantity":26},{"name":"nescafe5","price":49999,"quantity":30}];
localStorage.setItem("mycafe",JSON.stringify(caffeee));
var local_cart=[{"name":"abc","price":0,"quantity":0,"amount":0},{"name":"abc","price":0,"quantity":0,"amount":0},{"name":"abc","price":0,"quantity":0,"amount":0}];

function getprice(){
    var caffe=JSON.parse(localStorage.getItem('mycafe'));
    console.log(caffe.length);
    for(var i=0;i<caffe.length;i++){
    var list=document.getElementsByClassName("menu-group")[i];
    list.getElementsByClassName("menu-group__price")[0].innerHTML="price ="+caffe[i].price+"   amount ="+caffe[i].quantity+'<input id="thisip'+i+'"type="number" value=0> <Button id="buybtn'+i+'" onclick="buy_p('+i+')">Buy</Button';
    }
}
getprice();
var caffe_temp=JSON.parse(localStorage.getItem("mycafe"));
var str="";
var tongtien=0;
 var local_cart=[{"name":"abc","price":0,"quantity":0,"amount":0},{"name":"abc","price":0,"quantity":0,"amount":0},{"name":"abc","price":0,"quantity":0,"amount":0}];
count=0;
function buy_p(a){ 
    var caffe=JSON.parse(localStorage.getItem('mycafe'));
    var inpt_number=document.getElementById("thisip"+a).value;
    var amount=caffe[a].price*inpt_number;
    str+='<tr>'+'<td>'+caffe[a].name+'</td>'+''+'<td>'+caffe[a].price+'</td>'+''+'<td>'+inpt_number+'</td>'+''+'<td>'+amount+'</td>'+'<td>'+'<button>x</button>'+'</td>'+'</tr>';
    tongtien+=amount;
    console.log(str);
    flytocart();
    local_cart.length+=1;
  
   local_cart[count].name=caffe[a].name;
   local_cart[count].price=caffe[a].price;
   local_cart[count].quantity=inpt_number;
   local_cart[count].amount=amount;
   console.log(local_cart[count].name);
    count++;
    
} 

function flytocart(){
    console.log(str);
 
    document.getElementsByClassName("modal_inner")[0].innerHTML='<tr><th>Name</th><th>Quantity</th><th>Price</th><th>Amount</th></tr>'+str+'<tr><th></th><th></th><th>Sum=</th><th>'+tongtien+'</th></tr><button id="Checkout_btn" onclick="checkout()">CHECK OUT</button>';
}
function checkmerong(){
    var local_cart=[{"name":"abc","price":0,"quantity":0,"amount":0}]; localStorage.setItem("shopingdata",JSON.stringify(local_cart));
}
function checkout(){
   localStorage.setItem("shopingdata",JSON.stringify(local_cart));
   var my_cart=JSON.parse(localStorage.getItem('shopingdata'));
      var caffe=JSON.parse(localStorage.getItem('mycafe'));
    document.getElementsByClassName("modal_inner")[0].innerHTML='<tr><th>Rỗng</th></tr>';
    var k = 0;
    var i = 0;
   
    while(k<3){
        var string1=my_cart[k].name;
        var string2=caffe[i].name;
        if(string1===string2){
            caffe[i].quantity-=my_cart[k].quantity;
            k++;
            i=0;
        }
        else{
            i++;
        }
    }
    localStorage.setItem("mycafe",JSON.stringify(caffe));
    getprice();
}

function testpn(){
    var a = document.getElementsByClassName("modal");
    
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("cartbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  }


















(function () {
    "use strict";
  
    var carousels = function () {
      $(".owl-carousel1").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: false
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      });
    };
  
    (function ($) {
      carousels();
    })(jQuery);
  });
 
  