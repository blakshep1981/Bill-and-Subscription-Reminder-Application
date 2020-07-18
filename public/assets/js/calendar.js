// const calendar = document.querySelector("#app-calendar");

// for(let day = 1; day <= 31; day ++) {
//     // const date = Date.now();
//     // const options = { weekday: "short"};
//     // const dayName = new Intl.DateTimeFormat("en-US", options).format(date);
//     const dayName = getDayName(day);
//     const weekend = isWeekend(day);
//     const UIKit = "uk-card uk-card-default uk-card-body";
//     // if weekend === true {return "weekend"} else {return ""};
//     // console.log(weekend ? "weekend" : "");
//     calendar.insertAdjacentHTML("beforeend", `<div class="day ${weekend ? "weekend" : ""}"><div class = "name">${dayName}</div>${day}</div>`);
// }

// document.querySelectorAll("#app-calendar .day").forEach((day) => {
//     day.addEventListener("click", (event) => {
//         event.currentTarget.classList.toggle("selected");
//         //add function to pull up 
//     })
// });

// function isWeekend(day) {
//     const weekDay = (day % 7);
//     if (weekDay === 6 || weekDay ===0) return true;
//     return false;
// }

// function getDayName(day) {
//     //                 year, month[], day of the week
//     const date = new Date(2018, 0, day);
//     if(day <= 7) {
//     return new Intl.DateTimeFormat("en-US", { weekday: "short"}).format(date);
//     } else return "";
// }




const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];
    document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date day">${prevLastDay - x + 1}</div>`;
    };

    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
        days += `<div class="today day">${i}</div>`;
    } else {
        days += `<div class="day">${i}</div>`;
    };
  };

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date day">${j}</div>`;
        monthDays.innerHTML = days;
    };
};

// document.querySelector(".previous").addEventListener("click", () => {
//     date.setMonth(date.getMonth() - 1);
//     renderCalendar();
//  });

// document.querySelector(".next").addEventListener("click", () => {
//     date.setMonth(date.getMonth() + 1);
//     renderCalendar();
// });

// document.querySelector(".day").addEventListener("click", () => {
//     alert("IT WORKS!")
//     renderCalendar();
// });

renderCalendar();