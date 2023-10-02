let string = "";

let display = document.getElementById('calc-display'); // Get the input field by its id

let inputs = document.querySelectorAll('input[type="button"]');

Array.from(inputs).forEach((input) => {
    input.addEventListener('click', (event) => {

        if(event.target.value == '='){
            string = eval(string);
            display.value = string;
        }
        else if(event.target.value == 'AC') {
            string = "";
            display.value = string;
        }
        else if(event.target.value == 'DE') {

            if(string.length > 0) {
            let newStr = string.slice(0,-1);
            display.value = newStr;
            string = newStr
            }

        }
        else{
            string = string + event.target.value;
            display.value = string;
        }
    });
});


