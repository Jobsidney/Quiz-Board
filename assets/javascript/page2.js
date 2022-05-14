


// function doResults() {
//     document.getElementById('outResults').innerHTML=23;
    
// }

// function doResults() {
//     for (let i = 0;i<6;i++) {
//         if (document.getElementsByName('Answ${i}'===true)){
//             checkedBox.push(true);         
//         } 
        
//     }
    
// }

function doResults(){
    var results=0;
    if(document.getElementById('a').checked){
        results++;
    }
    if(document.getElementById('f').checked){
        results++;
    }
    if(document.getElementById('k').checked){
        results++;
    }
    if(document.getElementById('p').checked){
        results++;
    }
    if(document.getElementById('q').checked){
        results++;
    }
    if(document.getElementById('s').checked){
        results++;
    }
    
    finalResults=Math.ceil((results/6)*100)
    var display=(' '+ finalResults + '%')
    document.getElementById('outResults').innerHTML=display;

}