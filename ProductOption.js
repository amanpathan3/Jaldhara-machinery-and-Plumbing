let productOptions = [
    "--Select Products--",

    // UPVC
    'Pipe UPVC',
    'Socket UPVC',
    'Elbow UPVC',
    'Shoe Bend UPVC',
    'Brass Elbow UPVC',
    'Step Bend UPVC',
    'Tee UPVC',
    'Brass Tee UPVC',
    'End Cap UPVC',
    'MTA UPVC',
    'Brass MTA UPVC',
    'FTA UPVC',
    'Brass FTA UPVC',
    'Union UPVC',
    'Tank Neppele UPVC',
    'Ball Wall UPVC',
    'R Tee UPVC',
    'Reducer UPVC',
    'Bush UPVC',
    'Clip UPVC',


        // CPVC
    'Pipe CPVC',
    'Socket CPVC',
    'Elbow CPVC',
    'Shoe Bend CPVC',
    '3/4 X1/2 BR Elbo CPVC',
    'Step Bend CPVC',
    'Tee CPVC',
    '3/4 X1/2 BR Tee CPVC',
    'End Cap CPVC',
    'MTA CPVC',
    '3/4 X1/2 BR MTA CPVC',
    'FTA CPVC',
    '3/4 X1/2 BR FTA CPVC',
    'Union CPVC',
    'Tank Neppele CPVC',
    'Ball Wall CPVC',
    'R Tee CPVC',
    'Reducer CPVC',
    'Bush CPVC',
    'Clip CPVC',
    'Brass MTA CPVC',

   // SWR
    'Pipe SWR',
    'Elbow SWR',
    'Tee SWR',
    'Shoe Bend SWR',
    'Y SWR',
    'Nani Trap SWR',
    'Gas Cap SWR',
    'Jali SWR',
    'Door Bend SWR',
    'Door Tee SWR',
    'Socket SWR',
    '4X2 1/2 Reducer SWR',
    '4X2 1/2 Reducer Tee SWR',
    'Hose Nepal',
    'Teplon Tep',
    'W C Bhanda',
    'P Trap',
    'Solution',
    'Band Plag',
    'Khille',
    'PVC Pipe',
    'PVC Elbow'

];



function displayOptions(){
    let options="";
    productOptions.forEach((option) => {
        options+=`
            <option value="${option}">${option}</option>
        `
    });
    document.querySelector('.js-p-name').innerHTML=options;
}

displayOptions();


let productSizeOptions = [
    '--Select Size--',
    '1/2"',
    '3/4"',
    '1"',
    '1 1/4"',
    '1 1/2"',
    '2 1/2"',
    '4"',
    'None'
];

function displaySizeOptions() {
    let options = "";
    productSizeOptions.forEach((option) => {
        options += `
            <option value="${option.replace(/"/g, "&quot;")}">${option}</option>
        `;
    });
    document.querySelector('.js-p-size').innerHTML = options;
}

displaySizeOptions();
