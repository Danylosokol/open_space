document.addEventListener('DOMContentLoaded', function(){
    let password = "1";
    let state = true;
    let okButton = document.getElementById("ok-button");
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    let ranges = document.querySelectorAll("input[type=range]");
    let checkboxesOn = false;
    let rangesOn = false;
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
            checkboxesOn = stateOfCheckboxes();
            if(checkboxesOn === true){
                stateOfLaunchButton();
            }
        })
    }

    for(let i = 0; i < ranges.length; i++){
        ranges[i].onchange = function(){
            rangesOn = stateOfRanges()
            if(rangesOn === true){
                stateOfLaunchButton();
            }
        }
    }

    function stateOfPanel() {
        let passwordInput = document.querySelector("input[type=password]");
        passwordInput.disabled = !state;
        okButton.disabled = !state;
        let launchButton = document.getElementById("launch-button");
        launchButton.disabled = true;
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].disabled = state;
        }
        for (let i = 0; i < ranges.length; i++) {
            ranges[i].disabled = state;
        }
    }

    function stateOfCheckboxes(){
        for(let i = 0; i < checkboxes.length; i++){
            if(!checkboxes[i].checked){
                return false;
            }
        }
        return true;
    }

    function stateOfRanges(){
        for(let i = 0; i < ranges.length; i++){
            if(ranges[i].value < 100){
                return false;
            }
        }
        return true;
    }

    function stateOfLaunchButton(){
        console.log("we in");
        if(checkboxesOn === true && rangesOn === true) {
            let launchButton = document.getElementById("launch-button");
            launchButton.disabled = false;
            launchButton.addEventListener("click", function(){
                launchRocket();
            });
        }
    }

    let id = null;
    function launchRocket(){
        let rocket = document.querySelector(".rocket");
        let positionLeft = 159;
        let positionBottom = 149;
        clearInterval(id);
        id = setInterval(trajectory, 10);
        function trajectory(){
            if(positionLeft === 1440){
                clearInterval(id);
                console.log("launched");
            }
            else{
                positionLeft++;
                positionBottom++;
                rocket.style.bottom = positionBottom + 'px';
                rocket.style.left = positionLeft + 1 + 'px';
            }
        }
        return 0;
    }
});