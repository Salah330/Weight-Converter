// get elementa
var lbsInput = document.getElementById('lbsInput');
var gramsOutput = document.getElementById('gramsOutput');
var kgOutput = document.getElementById('kgOutput');
var ozOutput = document.getElementById('ozOutput');
var outputs = document.getElementById('output');

// hidden oupputs
outputs.style.visibility = 'hidden'

// add events 
lbsInput.addEventListener('input', covertOutPuts);

// covert function 
function covertOutPuts(e) {

    outputs.style.visibility = 'visible'

    var inPutNumb = e.target.value;

    gramsOutput.innerHTML = inPutNumb / .0022046;

    kgOutput.innerHTML = inPutNumb / 2.2046;

    ozOutput.innerHTML = inPutNumb * 16;


}