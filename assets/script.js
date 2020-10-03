// create elements on page using bootstrap
// add clickable to make active
// make save box save linked time row
//add clock to top of page - I want to!
// add class to date
        // if current time hour < make grey
        //if current time hour = make orange
        //if future time hour > make green... use their colors... cry
var nineAM = localStorage.getItem("9am")
var tenAM = localStorage.getItem("10am")
var elevenAM = localStorage.getItem("11am")
var twelvePM = localStorage.getItem("12pm")
var onePM = localStorage.getItem("1pm")
var twoPM = localStorage.getItem("2pm")
var threePM = localStorage.getItem("3pm")
var fourPM = localStorage.getItem("4pm")
var fivePM = localStorage.getItem("5pm")

//on load:
//$( "#tabs" ).tabs(); 
//document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
function refreshAtM_S(m,s) { refreshAt(0, 0, 5);}

var pullTask = function () {
  pulledTask = localStorage.getItem(parent,textIWant)
}

$(".btn").on("click", function() {
  // get the parent's id attribute
    var parent = $(this).closest('div').attr('id')
  //Get text I want from text field
    textIWant = $(this).siblings("#text").val()
  //save(has to be inside because parent and textIwant are inside- ask TA to confirm)
  var saveTask = function () {
    localStorage.setItem(parent, textIWant)   
  }
    saveTask()
  });
  
CurrentTime = moment().format("H") + "hate";
function updateClock2() {
  console.log(CurrentTime)
}
setInterval(updateClock2, 3000);
//reload page every 30 seconds to ensure colors changing
function updateClock() {
  CurrentTime = moment().format("H")+"love";
  console.log(CurrentTime)
  return(CurrentTime)
}
setInterval(updateClock, 1000);
//switching classes
// var currentHour = 2
// var timeBar = 4
// var switchTimeClass = function(){
//     if (currentHour =< timeBar) {
//       $( ".future" ).switchClass( "future", "present", 1000 )
//     }
//     else if (time === currentHour) {
//       $( ".present" ).switchClass( "present", "past", 1000 );
//     }
//     else () {
//       return
//     }
// }