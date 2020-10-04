// create elements on page using bootstrap
// add clickable to make active
// make save box save linked time row
//add clock to top of page - I want to!
// add class to date
        // if current time hour < make grey
        //if current time hour = make orange
        //if future time hour > make green... use their colors... cry

//text for times
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
var onLoad = function () {

      $( "#9am" ).children("#text").html( nineAM );
      $( "#10am" ).children("#text").html( tenAM );
      $( "#11am" ).children("#text").html( elevenAM );
      $( "#12pm" ).children("#text").html( twelvePM );
      $( "#1pm" ).children("#text").html( onePM );
      $( "#2pm" ).children("#text").html( twoPM );
      $( "#3pm" ).children("#text").html( threePM );
      $( "#4pm" ).children("#text").html( fourPM );
      $( "#5pm" ).children("#text").html( fivePM );

}
onLoad()

//save it! 
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
  

//get time  
CurrentTime = moment().format("H");

//reload page every 30 seconds to ensure colors changing
function updateClock() {
  CurrentTime = moment().format("H")+"love";
  console.log(CurrentTime)
  return(CurrentTime)
}
setInterval(updateClock, 300000);


//testing zone
function updateColors(){
$( "#5pm" ).switchClass( "future", "past", 1000 )
//       $( ".future" ).switchClass( "future", "present", 1000 )
}
//$( "#5pm" ).children("#text").html( fivePM );

var TimeID = ["#9am","#10am"]
$( function() {
  $( "#button" ).on( "click", function() {
    $( TimeID[0] ).switchClass( "newClass", "anotherNewClass", 1000 );
  });
} );

//var TimeID = ["#9am", "#10am", "#11am", "#12pm", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm"]
//switching classes
// var currentHour = 2
// var timeBar = 4
// var switchTimeClass = function(){
//     if (currentTime =< ) {
//       $( ".present" ).switchClass( "present", "future", 1000 )
//     }
//     else if (time === currentTime) {
//       $( ".present" ).switchClass( "present", "past", 1000 );
//     }
//     else () {
//       return
//     }
// }