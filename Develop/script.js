// create elements on page using bootstrap
// add clickable to make active
// make save box save linked time row
//add clock to top of page - I want to!
// add class to date
        // if current time hour < make grey
        //if current time hour = make orange
        //if future time hour > make green



$(".time-bar").on("blur", "textarea", function() {
    // get the textarea's current value/text
    var text = $(this)
      .val()
      .trim();
  
    // get the parent ul's id attribute
    var status = $(this)
      .closest(".time-bar")
      .attr("id")
      .replace("list-", "");
  
    // get the task's position in the list of other li elements
    var index = $(this)
      .closest(".time-bar")
      .index();
  
    tasks[status][index].text = text;//track item by parent's id, and index to replace text
    saveTasks();//update local storage
  
    // recreate p element
    var taskP = $("<p>")
      .addClass("m-1")
      .text(text);
  
    // replace textarea with p element
      $(this).replaceWith(taskP);
  });
  