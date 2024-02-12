AOS.init();


function handleOnScroll() {
  const header = document.getElementById('header');
  header.classList.toggle('sticky', scrollY > 150);
  header.color('white');
  const element = document.getElementsByTagName('nav');
  element.style.backgroundColor('black');
}

var typed = new Typed('#element', {
  strings: [' FullStack Java Developer ','Programmer','Coder' ,'Problem Solver','FullStack Java Developer'],
  typeSpeed: 100,
});

var typed = new Typed('#element1', {
  strings: [' "Crafting beautiful, high-performing websites from server-side to userinterface." '],
  typeSpeed: 50,
});

document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  scrollToTopBtn.addEventListener("click", function () {
    // Scroll to the top smoothly
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});

//owl carousel 
$(document).ready(function(){
  $('.myCarousel').owlCarousel({
    items : 3,
    margin: 10,
    loop: true,
    mouseDrag : false,
    nav : true,
    lazyLoad : true, 
    autoplay : true,
    autoplayTimeout : 4000,
    autoplayHoverPause : true,
    responsive : {
      0 : {
        items : 1
      },
      480 : {
        items : 1
      },
      768 : {
        items : 2
      },
      992 : {
        items : 2
      }
    }
  });


  $('.owl-prev').empty().append('<i class="bi bi-arrow-left-square-fill"></i>');
  $('.owl-next').empty().append('<i class="bi bi-arrow-right-square-fill"></i>');
});


const typedText = "Full Stack Java Developer ";

const outputElement = document.getElementById("output");

setInterval(() => {
  outputElement.textContent += typedText;
}, 1000);



// Footer year
  
let currentDate = new Date();
let output = currentDate.getFullYear();

document.getElementById('currentYear').innerHTML = `<span>${output}</span>`;

// function emailSend(){
//   let Username =document.getElementById('exampleInputtext').value;
//   let phone =document.getElementById('exampleInputEmail1').value;
//   let Email =document.getElementById('exampleInputNumber').value;

//   let messageBody ="Name" + Username+
//   "<br/> phone" + phone+
//   "<br/> Email " + Email;

//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "abhichakane15@gmail.comme",
//     Password : "6A945DCBFBB2A64A2C9885792AA042B982C5",
//     To : 'abhichakane7@gmail.com',
//     From : "abhichakane15@gmail.com",
//     Subject : "This is the subject",
//     Body : "messageBody"
// }).then(
//   message => alert(message)
// );
// }



const sumBtn = document.getElementById("buttonMain");

      sumBtn.addEventListener('click',function(){

        setTimeout(() => {
          let form = document.getElementById('form');
          form.reset();
          
        },5000);
      })

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  sumBtn.value = "sending..";

  const serviceId = "service_2ukgn4d";
  const templetId = "template_08akrh6";
  emailjs.send("service_2ukgn4d", "template_08akrh6", {
    user_name: document.getElementById("user_name").value,
    user_email: document.getElementById("user_email").value,
   

    message: document.getElementById("message").value,
  });

  emailjs.sendForm(serviceId, templetId, this).then(
    () => {
      sumBtn.value = " Send Email";

      // alert('Mail Send Successfully Thank You!..')
      (function function3() {
        swal("Thank You!", "Mail Send Successfully!", "success");
      })();
    },
    (error) => {
      sumBtn.value = " ";
      //   alert(JSON.stringify(error));
      (function function4() {
        error(
          swal(
            "Sorry!",
            "Opps, something went wrong. Please try again later.",
            "error"
          )
        );
      })();
    }
    );
      });

