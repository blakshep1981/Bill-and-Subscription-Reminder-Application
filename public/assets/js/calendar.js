
const date = new Date();


renderCalendar();
getSubs();

function renderCalendar() {
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

    //add a card div to every day that does not display
    //toggle display onclick
    //pull all db info into an array in this page, display all that are in this month
    //    maybe make sidebar one that lists all dues and bills due that month
    //add icon or color or somehting to days with a bill/other due on that day
    monthDays.addEventListener("click", () => {
        console.log("event works!");
    });

};

document.querySelector(".previous").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});


// function initializeRows() {
//     $todoContainer.empty();
//     var rowsToAdd = [];
//     for (var i = 0; i < todos.length; i++) {
//       rowsToAdd.push(createNewRow(todos[i]));
//     }
//     $todoContainer.prepend(rowsToAdd);
//   }

//<div class="uk-card pop-up uk-card-default"></div>

  function getSubs() {
    $.get("/api/users", function(data) {
      subs = data; //used to be todos

        console.log(subs);
    //   initializeRows();
    });
  }

