const calendar = document.querySelector("#app-calendar");



for(let day = 1; day <= 31; day ++) {

    // const date = Date.now();
    // const options = { weekday: "short"};
    // const dayName = new Intl.DateTimeFormat("en-US", options).format(date);
   
    const dayName = getDayName(day);
    const weekend = isWeekend(day);
    const UIKit = "uk-card uk-card-default uk-card-body";

    // if weekend === true {return "weekend"} else {return ""};
    // console.log(weekend ? "weekend" : "");
    calendar.insertAdjacentHTML("beforeend", `<div class="day ${weekend ? "weekend" : ""}"><div class = "name">${dayName}</div>${day}</div>`);
}

document.querySelectorAll("#app-calendar .day").forEach((day) => {
    day.addEventListener("click", (event) => {
        event.currentTarget.classList.toggle("selected");
        //add function to pull up 
    })
});


function isWeekend(day) {
    const weekDay = (day % 7);
    if (weekDay === 6 || weekDay ===0) return true;
    return false;
}

function getDayName(day) {
    //                 year, month[], day of the week
    const date = new Date(2018, 0, day);
    if(day <= 7) {
    return new Intl.DateTimeFormat("en-US", { weekday: "short"}).format(date);
    } else return "";
}