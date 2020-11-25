// function onClickAddFlight() {
//     let flightNo = document.querySelector('form input[name="flight-no"]').value;
//     alert(flightNo);
// }

function onClickAddFlight() {
    let flightNo = document.querySelector('form input[name="flight-no"]').value;
    let origin = document.querySelector('form input[name="from"]').value;
    let destination = document.querySelector('form input[name="to"]').value;
    if (validateInput(flightNo, origin, destination)) {
        alert("Success!");
    }
}

function round(value) {
    var multiplier = Math.pow(10, 1 || 0);
    var result = +value
    result = Math.round(result * multiplier) / multiplier;
    return result.toFixed(1)
}

function validateInput() {
    var title = document.forms[0]["title"].value
    var date = document.getElementById("date").value
    var hour = document.getElementById("start-hour").value
    var minute = document.getElementById("start-minute").value
    var duration = document.forms[0]["duration"].value
    var hall = document.getElementById("movie-hall").value
    // alert(typeof hall)
    var price = +document.forms[0]["price"].value
    if (title.length === 0) {
        alert("Please Input Title")
        return false;
    }
    if (date == 'null' || date === "" || date === "NULL") {
        alert("Please Select a Date")
        return false;
    }
    if (hour == 'null' || hour === "" || hour === "NULL") {
        alert("Please Select an Hour")
        return false;
    }
    if (minute == 'null' || minute === "" || minute === "NULL") {
        alert("Please Select Minute")
        return false;
    }
    if (isNaN(duration)) {
        alert("Duration's Input Should be Number")
        return false;
    }
    if (duration < 30 || duration > 300) {
        alert("Duration Time Shoube Between 30 And 300")
        return false;
    }
    if (hall == 'null' || hall === "" || hall === "NULL") {
        alert("Please Select a Hall")
        return false;
    }
    if (isNaN(price)) {
        alert("Price's Input Should be Number")
        return false;
    }
    if (price <= 0) {
        alert("Price Should be Positive")
        return false;
    }

    // let flightNoRegex = new RegExp(/^[A-Z0-9]{2}\d{3,4}$/);
    // let airportCodeRegex = new RegExp(/^[A-Z]{3}$/);
    // if (!flightNoRegex.test(flightNo)) {
    //     alert("Invalid Flight No.");
    //     return false;
    // }
    // if (!airportCodeRegex.test(origin)) {
    //     alert("Invalid origin airport code.");
    //     return false;
    // }
    // if (!airportCodeRegex.test(destination)) {
    //     alert("Invalid destination airport code.");
    //     return false;
    // }
    // if (!airportCodeRegex.test(destination)) {
    //     alert("Invalid destination airport code.");
    //     return false;
    // }
    return true;
}

// function initial() {
//     let year = document.getElementById("year");
//     year.innerHTML = "";
//     year.options.add(new Option("--", null));
//     for (let i = 2000; i <= 2020; i++) {
//         year.options.add(new Option(i, i));
//     }
// }

function setHour() {
    let hour = document.getElementById("start-hour");
    hour.innerHTML = "";
    hour.options.add(new Option("--", null));
    for (let i = 0; i <= 24; i++) {
        hour.options.add(new Option(i, i));
    }
}

function setMinute() {
    let minute = document.getElementById("start-minute");
    minute.innerHTML = "";
    minute.options.add(new Option("--", null));
    for (let i = 0; i <= 59; i++) {
        minute.options.add(new Option(i, i));
    }
}

function setHall() {
    let hall = document.getElementById("movie-hall");
    hall.innerHTML = "";
    hall.options.add(new Option("--", null));
    for (let i = 1; i <= 7; i++) {
        hall.options.add(new Option(i, i));
    }
}

function setMonth() {
    let month = document.getElementById("month");
    month.innerHTML = "";
    month.options.add(new Option("--", null));
    for (let i = 1; i <= 12; i++) {
        month.options.add(new Option(i, i));
    }
}

function setDay() {
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day");
    let data = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // clear the items
    day.innerHTML = "";
    // add new items
    day.options.add(new Option("--", null));
    for (let i = 1; i <= data[month - 1]; i++) {
        day.options.add(new Option(i, i));
    }
    if (((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) && month ===
        2) {
        day.options.add(new Option(29, 29));
    }
}

function addRow() {
    let bodyObj = document.getElementById("tbody");
    if (!bodyObj) {
        alert("Body of Table not Exist!");
        return;
    }

    // let year = document.getElementById("year").value;
    // let month = document.getElementById("month").value;
    // let day = document.getElementById("day").value;
    let date = document.getElementById("date").value;
    let starthour = document.getElementById("start-hour").value;
    starthour = ("0" + starthour).slice(-2)
    let startminute = document.getElementById("start-minute").value;
    startminute = ("0" + startminute).slice(-2)
    let hall = document.getElementById("movie-hall").value;
    var choice
    if (document.form1.choice[0].checked) {
        choice = document.form1.choice[0].value
    } else {
        choice = document.form1.choice[1].value
    }
    if (validateInput()) {
        if (noControversy(choice)) {
            let rowCount = bodyObj.rows.length;
            let cellCount = bodyObj.rows[0].cells.length;
            bodyObj.style.display = ""; // display the tbody
            let newRow = bodyObj.insertRow(rowCount++);
            newRow.insertCell(0).innerHTML = document.forms[0]["title"].value;
            newRow.insertCell(1).innerHTML = date;
            newRow.insertCell(2).innerHTML = starthour + ":" + startminute;
            newRow.insertCell(3).innerHTML = document.forms[0]["duration"].value;
            newRow.insertCell(4).innerHTML = hall
            newRow.insertCell(5).innerHTML = round(document.forms[0]["price"].value);
            newRow.insertCell(6).innerHTML = choice
            newRow.insertCell(7).innerHTML = bodyObj.rows[0].cells[cellCount - 1].innerHTML; // copy the "delete" button
            bodyObj.rows[0].style.display = "none"; // hide first row
        }
    }
}

function noControversy(choice) {
    let bodyObj = document.getElementById("tbody")
    let title = document.forms[0]["title"].value
    let hall = document.getElementById("movie-hall").value
    for (rowcounter = 1; rowcounter < bodyObj.rows.length; rowcounter++) {
        let current_title = bodyObj.rows[rowcounter].cells[0].innerText
        // alert(current_title)
        if (current_title === title) {
            let current_hall = bodyObj.rows[rowcounter].cells[4].innerText
            // alert(current_hall)
            if (current_hall === hall) {
                let current_choice = bodyObj.rows[rowcounter].cells[6].innerText
                // alert(current_choice)
                if (current_choice !== choice) {
                    alert("Controversy Data")
                    return false;
                }
            }
        }
    }
    return true;
}

function removeRow(inputobj) {
    if (!inputobj) return;
    let parentTD = inputobj.parentNode;
    let parentTR = parentTD.parentNode;
    let parentTBODY = parentTR.parentNode;
    parentTBODY.removeChild(parentTR);
}

//
// mobiscroll.settings = {
//     theme: 'ios',
//     themeVariant: 'light',
//     display: 'bubble'
// };
//
// var now = new Date();
//
// mobiscroll.calendar('#demo-calendar-mobile', {
//     controls: ['calendar', 'time'],
//     onInit: function (event, inst) {
//         inst.setVal(now, true);
//     }
// });
//
// mobiscroll.calendar('#demo-calendar-desktop', {
//     controls: ['calendar', 'time'],
//     touchUi: false,
//     onInit: function (event, inst) {
//         inst.setVal(now, true);
//     }
// });
//
// mobiscroll.calendar('#demo-calendar-header', {
//     controls: ['calendar', 'time'],
//     headerText: '{value}',
//     onInit: function (event, inst) {
//         inst.setVal(now, true);
//     }
// });
//
// mobiscroll.calendar('#demo-calendar-non-form', {
//     controls: ['calendar', 'time'],
//     onInit: function (event, inst) {
//         inst.setVal(now, true);
//     }
// });
//
// var instance = mobiscroll.calendar('#demo-calendar-external', {
//     controls: ['calendar', 'time'],
//     showOnTap: false,
//     showOnFocus: false,
//     onInit: function (event, inst) {
//         inst.setVal(new Date(), true);
//     }
// });
//
// document
//     .getElementById('show-demo-calendar-external')
//     .addEventListener('click', function () {
//         instance.show();
//     }, false
//    );

function GetDateTime() {
    n = new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate() + 1;
    var strDate = y + "-" + m + "-" + d
    // alert(strDate)
    setHour()
    document.getElementById('date').innerHTML = '<input type="date" onchange="setHour()" type="date" min="' + GetDateTime() + '"/>';
    return strDate
}