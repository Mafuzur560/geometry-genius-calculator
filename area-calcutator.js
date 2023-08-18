// 01 Triangle
function triangle(){
    const base1 = getInputValue('triangle-base');
    const height1 = getInputValue('triangle-height');

    const area1 = 0.5 * base1 * height1 ;
    setTextField('triangle-area', area1);

}


// 02 Rectangle
function rectangle(){
    const base2 = getInputValue('rectangle-width');
    const height2 = getInputValue('rectangle-height');

    const area2 = base2 * height2 ;
    setTextField('rectangle-area', area2);

}


// 03 Ellipse
function ellipse(){
    const base3 = getInputValue('ellipse-a');
    const height3 = getInputValue('ellipse-b');

    const area3 = 3.14 * base3 * height3 ;
    setTextField('ellipse-area', area3);

}






// Function for reuse input value
function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputText = inputField.value ;
    const value = parseFloat(inputText);
    return value;

}

// Function for reuse area show
function setTextField(showArea, areanew){
    const areaInput = document.getElementById(showArea);
    areaInput.innerText = areanew ;
}