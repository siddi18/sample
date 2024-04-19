let buttons = document.getElementsByTagName('button');
let result = document.getElementById('result');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        let input = this.innerText;
        updateDisplay(input);
    }
}

function updateDisplay(input) {
    let currentDisplay = result.innerText;
    
    if (currentDisplay === '0') {
        // If the current display is '0' or empty, replace it with the input
        result.innerText = input;
    } else if (input !== 'C' && input !== 'DEL' && input !== '=') {
        // Otherwise, append the input to the current display
        result.innerText += input;
    }
    else{
        if(input == 'DEL'){
            result.innerText = currentDisplay.substring(0,currentDisplay.length-1)
            if(result.innerText ==''){
                result.innerText='siddhu'
            }
        }
        if(input =='C'){
            result.innerText='0';
        }
        if(input !== 'C' && input !== 'DEL' && input !== '=') {
            result.innerText += input;
        }
        if(input=='='){
            let display =result.innerText;
            result.innerText =eval(display);
        }
    }

}
