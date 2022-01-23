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
var nine30AM = localStorage.getItem("9:30am")
var tenAM = localStorage.getItem("10am")
var ten30AM = localStorage.getItem("10:30am")
var elevenAM = localStorage.getItem("11am")
var eleven30AM = localStorage.getItem("11:30am")
var twelvePM = localStorage.getItem("12pm")
var twelve30PM = localStorage.getItem("12:30am")
var onePM = localStorage.getItem("1pm")
var one30PM = localStorage.getItem("1:30pm")
var twoPM = localStorage.getItem("2pm")
var two30PM = localStorage.getItem("2:30pm")
var threePM = localStorage.getItem("3pm")
var three30PM = localStorage.getItem("2:30pm")
var fourPM = localStorage.getItem("4pm")
var four30PM = localStorage.getItem("4:30pm")
var fivePM = localStorage.getItem("5pm")
var five30PM = localStorage.getItem("5:30pm")
var notes = localStorage.getItem("Notes")


//on load: 
$(document).ready(function () {
//cound have writen the following section as :
//$( "#9am #text").html(localStorage.getItem("9am"));
      $( "#9am" ).children("#text").html( nineAM );
      $( "#930am" ).children("#text").html( nine30AM );
      $( "#10am" ).children("#text").html( tenAM );
      $( "#1030am" ).children("#text").html( ten30AM );
      $( "#11am" ).children("#text").html( elevenAM );
      $( "#930am" ).children("#text").html( eleven30AM );
      $( "#12pm" ).children("#text").html( twelvePM );
      $( "#1230pm" ).children("#text").html( twelve30PM );
      $( "#1pm" ).children("#text").html( onePM );
      $( "#130pm" ).children("#text").html( one30PM );
      $( "#2pm" ).children("#text").html( twoPM );
      $( "#230pm" ).children("#text").html( two30PM );
      $( "#3pm" ).children("#text").html( threePM );
      $( "330pm" ).children("#text").html( three30PM );
      $( "#4pm" ).children("#text").html( fourPM );
      $( "#430pm" ).children("#text").html( four30PM );
      $( "#5pm" ).children("#text").html( fivePM );
      $( "#530pm" ).children("#text").html( five30PM );
      $( "Notes" ).children("#text").html( notes );


})


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
  

//get time in military hours by themselves. 
//Note this is a STRING and in the format ##:  
//CurrentTime = moment().format("H");


//color change as hours change- updates every 5 minutes
var TimeID = ["#9am", "#930am", "#10am", "#1030am", "#11am", "#1130am", "#12pm", "#1230pm", "#1pm", "#130pm", "#2pm", "#230pm", "#3pm", "#330pm", "#4pm", "#430pm", "#5pm", "#530pm", "Notes"]
var hourCompCount= ["09:00:00", "09:30:00", "10:00:00", "10:30:00", "11:00:00", "11:30:00", "12:00:00", "12:30:00", "13:00:00", "13:30:00", "14:00:00", "14:30:00", "15:00:00", "15:30:00", "16:00:00", "16.30:00", "17:00:00", "17:30:00", "18:00:00"];
function updateClock() {
  //console.log("checking time")
$( function() {
  for (i=0;i < TimeID.length; i++) {
    CurrentTime = moment().format("HH:mm:ss");//check tomorrow if needed
    //console.log(typeof CurrentTime)//lets me know if number or string
    //console.log(CurrentTime)//lets me know the value as written

    if (hourCompCount[i] < CurrentTime && hourCompCount[i+1] > CurrentTime){
      //console.log(TimeID[i] + hourCompCount[i] +"present")
    $( TimeID[i] ).switchClass( "future", "present", 1000 );
    $( TimeID[i] ).switchClass( "past", "present", 1000 );

    }

    else if (hourCompCount[i] < CurrentTime){
      //console.log(TimeID[i] + hourCompCount[i] + CurrentTime +"past")
      $( TimeID[i] ).switchClass( "present", "past", 1000 );
      $( TimeID[i] ).switchClass( "future", "past", 1000 );

    }

    else{
     // console.log(TimeID[i] + hourCompCount[i] +"future")
     console.log(TimeID[i] + hourCompCount[i] +"future")
      $( TimeID[i] ).switchClass( "present", "future", 1000 );
      $( TimeID[i] ).switchClass( "past", "future", 1000 );

    }
  };
} );
}
updateClock()
setInterval(updateClock, 300000);//self updates colors every 5 minutes
