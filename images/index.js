function Color(imgId) {
    
    document.getElementById(imgId).style.filter=("grayscale(0)");
    console.log("B");
}

function NoColor(imgId, i, j) {

    if (selectedRunes[i] != j) {
        document.getElementById(imgId).style.filter=("grayscale(1)");
    }
   
    console.log("A");

}


var selectedRunes = [];
for (i = 0; i < 40; i++) {

    selectedRunes[i] = 1;
}


function imgClick(i, j ) {

    selectedRunes[i] = j;
}