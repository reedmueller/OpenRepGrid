// testimonials

var testimonials = 
[ 
      {
        "user": "Prof. Dr. Richard C. Bell<br>University of Melbourne",
        "statement": "OpenRepGrid really is a great option for grid researchers." 
      },
      {
        "user": "Prof. Dr. Guillem Feixas-Viaplana<br>University of Barcelona",
        "statement": "OpenRepGrid strongly facilitates research and the calculation of many repgrid indexes."
      },
      {
        "user": "Adrian Montasano<br>University of Barcelona",
        "statement": "I use OpenRepGrid for almost all my research problems concerning grids." 
      }
]


var counter = 0;
$("#testimonial-statement").html(testimonials[counter].statement);
$("#testimonial-user").html(testimonials[counter].user);
setInterval(change, 3000);
function change() {
  $("#testimonial-statement").html(testimonials[counter].statement);
  $("#testimonial-user").html(testimonials[counter].user);
 counter++;
 if (counter >= testimonials.length) { 
  counter = 0; 
 }
}

// part 2
/*
var terms = ["term 1", "term 2", "term 3"];

function rotateTerm() {
  var ct = $("#testimonials").data("term") || 0;
  $("#testimonial-text").data("term", ct == terms.length -1 ? 0 : ct + 1)
    .text(testimonials[ct].statement).fadeIn()
    .delay(2000).fadeOut(200, rotateTerm);
}

rotateTerm();
 */
 

// ------------------------------------------- //

// testimonial3


