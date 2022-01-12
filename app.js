const currentDay= document.querySelector("#currentDay");
const description= document.querySelector(".description");
const container= document.querySelector(".container")
let hour= moment().hour(9)
console.log(hour.format("hA"));
schedule = [{
    activityIndex: 1,
    saved: "hello"
}];
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
currentDay.textContent = moment().format("dddd, MMM YYYY");

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
let time= moment(hour)
for (var i =0; i < 9; i++) {
    div = document.createElement("div");
    div.className = "row w-100";
    div.setAttribute("data-index", i);
    h2 = document.createElement("h2");
    h2.textContent = time.format("hA");
    time = hour.add(1,"hours")
    h2.className = "hour col-2";
    // WHEN I click into a timeblock
    // THEN I can enter an event
    textArea= document.createElement("textarea");
    textArea.className = "col-9 description";
    button= document.createElement("button");
    button.innerHTML = '<i class="fas fa-save"></i>';
    button.className = "saveBtn col-1";
    container.appendChild(div)
    div.appendChild(h2)
    div.appendChild(textArea)
    div.appendChild(button)

}
// WHEN I view the timeblocks for that day

// THEN each timeblock is color coded to indicate whether it is in the past, present, or future


// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
container.addEventListener("click", function(event) {
    var element = event.target;
  
    // Checks if element is a button
    if (element.matches("button") === true) {
      // Get its data-index value 
      var index = element.parentElement.getAttribute("data-index");
      console.log(element.parentElement.querySelector("textarea").value)
      var activity = {
          activityIndex: index,
          saved : element.parentElement.querySelector("textarea").value
      }
      schedule.push(activity);
      // Store updated activities in localStorage
      storeActivity();
    }
  });

  function storeActivity() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
  }
// WHEN I refresh the page
// THEN the saved events persist
function init() {
    // Get stored todos from localStorage
    var storedSchedule = JSON.parse(localStorage.getItem("schedule"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedSchedule !== null) {
      schedule = storedSchedule;
    }
  
    // This is a helper function that will render todos to the DOM
    renderSchedules();
  }

function renderSchedules() {
    for (var i =0; schedule.length; i++) {
        querry = "[data-index='"+schedule.activityIndex+"'"
       console.log( document.querySelector(querry))
}}
