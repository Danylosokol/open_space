document.addEventListener('DOMContentLoaded', function(){
    let password = "TrustNo1";
    let state = true;
    let okButton = document.getElementById("ok-button");
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    stateOfPanel();

    okButton.addEventListener("click", function () {
        let input = document.querySelector("input[type=password]").value;
        if (input !== "") {
            if (input === password) {
                state = false;
                stateOfPanel();
            }
        }
    })

    for(let i = 0; i < checkboxes.length; i++){
        checkboxes[i].addEventListener("change", function(){
            if(this.checked) {
                console.log("checked");
            }
            else{
                console.log("unchecked");
            }
        })
    }

    function stateOfPanel() {
        let passwordInput = document.querySelector("input[type=password]");
        passwordInput.disabled = !state;
        okButton.disabled = !state;
        let launchButton = document.getElementById("launch-button");
        launchButton.disabled = state;
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].disabled = state;
        }
        let ranges = document.querySelectorAll("input[type=range]");
        for (let i = 0; i < ranges.length; i++) {
            ranges[i].disabled = state;
        }
    }
});