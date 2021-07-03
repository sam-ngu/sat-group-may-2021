const timeContainer = document.getElementById("time-container");
const currentDay = document.getElementById("current-day");

currentDay.textContent = moment().format("dddd, Do MMM YY");

function saveNote(event) {

    event.preventDefault();

    // grab the time
    const button = event.target;

    const buttonId = button.id;
    
    const time = buttonId.slice(-4);

    // grab user input
    const textarea = document.getElementById('textarea-' + time);

    const userInput = textarea.value;
    
    // store in Local storage

    // check if local storage already has the data
    const noteData = getNoteData();

    // if yes , update
    noteData[time] = userInput;

    console.log(noteData);

    localStorage.setItem('notes', JSON.stringify(noteData));
}

function getNoteData(){
    return JSON.parse(localStorage.getItem("notes")) || {};
}

function getNoteByTime(time) {
    const noteData = getNoteData();
    return noteData[time] || ""
}


function createTimeRow(time) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    row.setAttribute("id", "row-" + time);

    // add a timestamp col to the row
    const timestampCol = document.createElement("div");
    timestampCol.setAttribute("class", "col-2");

    timestampCol.textContent = time;
    row.appendChild(timestampCol);

    // add a textarea col to the row
    const textareaCol = document.createElement("div");
    textareaCol.setAttribute("class", "col-8");

    const textarea = document.createElement("textarea");
    textarea.setAttribute("cols", "30");
    textarea.setAttribute("id", "textarea-" + time);
    textarea.textContent = getNoteByTime(time);

    textareaCol.appendChild(textarea);

    row.appendChild(textareaCol);

    // add a button col to the row
    const buttonCol = document.createElement("div");
    buttonCol.setAttribute("class", "col-2");
    const button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary");
    button.setAttribute("id", "button-" + time);
    button.textContent = "Save";

    button.addEventListener("click", saveNote);

    buttonCol.appendChild(button);
    row.appendChild(buttonCol);

    return row;
}

function main(){

    // Goal : generate the timeblocks
    // we will loop for 9 times to generate these blocks
    for (let index = 0; index < 9; index++) {
        // for each loop we will create a row
        let time = index + 9 + "00";
    
        if (time.length === 3) {
            time = "0" + time;
        }
        const row = createTimeRow(time);
    
        timeContainer.appendChild(row);
    }
}

main();
