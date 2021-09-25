let state = true;
stateOfPanel(state);

function stateOfPanel(state){
    let launchButton = document.getElementById("launch-button");
    launchButton.disabled = state;
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].disabled = state;
    }
    let ranges = document.querySelectorAll("input[type=range]");
    for (let i = 0; i < ranges.length; i++) {
        ranges[i].disabled = state;
    }
}