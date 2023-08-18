// 01 Triangle
function triangle(){
    const base1 = getInputValue('triangle-base');
    const height1 = getInputValue('triangle-height');

    // validate input number
    if(isNaN(base1) || isNaN(height1)){
        alert('Please insert a number');
        return;
    }

    const area1 = 0.5 * base1 * height1 ;
    setTextField('triangle-area', area1);

    // set result in area
    getAreaResult('Triangle', area1);

}


// 02 Rectangle
function rectangle(){
    const base2 = getInputValue('rectangle-width');
    const height2 = getInputValue('rectangle-height');

    // validate input number
    if(isNaN(base2) || isNaN(height2)){
        alert('Please insert a number');
        return;
    }

    const area2 = base2 * height2 ;
    setTextField('rectangle-area', area2);

    // set result in area
    getAreaResult('Rectangle', area2);

}


// 03 Ellipse
function ellipse(){
    const base3 = getInputValue('ellipse-a');
    const height3 = getInputValue('ellipse-b');

    // validate input number
    if(isNaN(base3) || isNaN(height3)){
        alert('Please insert a number');
        return;
    }

    const area3 = 3.14 * base3 * height3 ;
    setTextField('ellipse-area', area3);

    // set result in area
    getAreaResult('Ellipse', area3);

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


// Show result in area
function getAreaResult(areaName, result){
    const getArea = document.getElementById('this-area');
    const count = getArea.childElementCount;
    const p = document.createElement('p');

    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaName} ${result} cm<sup>2</sup>  <button class="btn btn-sm btn-success">Convert</button>`;
    getArea.appendChild(p);
}