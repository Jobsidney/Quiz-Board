const question=['Answ1','Answ2','Answ3','Answ4','Answ5','Answ6']
const checkedBox=[];


// function doResults() {
//     document.getElementById('outResults').innerHTML=23;
    
// }

function doResults() {
    for (let i = 1;i<6;i++) {
        if (document.getElementsByName('Answ${i}').value==true) {
            checkedBox.push('true');
            i++;          
        }    
    }
    document.getElementById('outResults').innerHTML=checkedBox.length;
}


