// Số hàng ban đầu
var soHang = 3;

// Thêm hàng
function CreateNewRow() {
    soHang++;
    $("div").removeClass("last");
    $("<div class='row-hp last columns is-mobile'><div class='column is-6'><label class='label'>Điểm HP:</label><select name='' placeholder='Điểm HP' class='input diemHP is-primary' id='diemHP" + soHang.toString() + "'><option value='A'>A</option><option value='B+'>B+</option><option value='B'>B</option><option value='C+'>C+</option><option value='C'>C</option><option value='D+'>D+</option><option value='D'>D</option><option value='F'>F</option></select></div > <div class='column is-6'><label class='label'>Số tín chỉ HP:</label><select name='' id='soTC" + soHang.toString() + "' placeholder='Số TC' class='input soTC is-primary'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option></select></div></div > " ).insertBefore( $( ".block" ) );
    soHPs = document.querySelectorAll(".row-hp").length;
}

// Xoá hàng
function RemoveLastRow() {
    $("div").remove(".row-hp.last");
    $("div.row-hp.columns:last").addClass("last");
    soHPs = document.querySelectorAll(".row-hp").length;
    soHang--;
}

// Tính điểm
function Calculate() {
    var diemHPAll = document.querySelectorAll('[id^=diemHP]');
    var soTCAll = document.querySelectorAll('[id^=soTC]');

    var tongDiem=0;
    var tongSoTC = 0;
    
    for(var i=0;i<soHang;i++){
    let diemHP =diemHPAll[i].value;
    let soTC = soTCAll[i].value;
    
    if(!soTC || soTC< 0 || soTC > 4) return "Số tín chỉ không hợp lệ.";
    diemHP=CheckDiem(diemHP);
    tongDiem+=diemHP*soTC;
    tongSoTC+= +soTC;
        
            // console.log(tongDiem);
            // console.log(tongSoTC);
    }
    return "Điểm trung bình học kì: " + Number.parseFloat(tongDiem/tongSoTC).toFixed(2);
}

function ShowCalculate() {
    document.getElementById("modal-content").innerHTML =  Calculate();
}


function CheckDiem(diemHP) {
    if(diemHP=='A') return 4;
    else if(diemHP=='B+') return 3.5;
    else if(diemHP=='B') return 3;
    else if(diemHP=='C+') return 2.5;
    else if(diemHP=='C') return 2;
    else if(diemHP=='D+') return 1.5;
    else if (diemHP == 'D') return 1;
    else if (diemHP == 'F') return 0;
    else return 0;
}

// Modal
const calcBtn = document.querySelector('#calcBtn');
const closeModalBtn1 = document.querySelector('#closeModalBtn1');
const closeModalBtn2 = document.querySelector('#closeModalBtn2');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

calcBtn.addEventListener('click', () => {
    modal.classList.add('is-active');
})
closeModalBtn1.addEventListener('click', () => {
    modal.classList.remove('is-active');
})
closeModalBtn2.addEventListener('click', () => {
    modal.classList.remove('is-active');
})

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
})

// Timer
var countDownDate = new Date("Feb 10, 2024 00:00:00").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("day-count").innerHTML = days ;
  document.getElementById("hour-count").innerHTML = hours ;
  document.getElementById("minute-count").innerHTML = minutes ;
  document.getElementById("second-count").innerHTML = seconds ;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "HẸN GẶP LẠI NĂM SAU NHÉ";
  }
}, 1000);
let mybutton = document.getElementById("backToTopBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
