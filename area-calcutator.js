function calculateTringleArea(){
    const baseInputfild = document.getElementById('tringle-base');
    const baseInputText = baseInputfild.value ;
    const base = parseFloat(baseInputText);

    // 02
    const heightInputFild = document.getElementById('tringle-height');
    const heightInputText = heightInputFild.value;
    const height = parseFloat(heightInputText);

    const area = 0.5 * base * height ;

    // 03
    const areaFild = document.getElementById('tringle-area');
    areaFild.innerText = area;

    base.innerText = '';
}

