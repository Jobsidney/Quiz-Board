

function doResults(){
    var results=0;
    if(document.getElementById('a').checked){
        results++;
    }
    if(document.getElementById('g').checked){
        results++;
    }
    if(document.getElementById('j').checked){
        results++;
    }
    if(document.getElementById('l').checked){
        results++;
    }
    if(document.getElementById('q').checked){
        results++;
    }
    if(document.getElementById('u').checked){
        results++;
    }
    
    finalResults=Math.ceil((results/6)*100)
    var display;
    output();
    
    function output(){
        if (finalResults>=80) {
            display=(' '+ finalResults + '%'+" "+"Excellent")
            
        }
        else if(finalResults>=50){
            display=(' '+ finalResults + '%'+" "+"Fair")
        }
        else{
            display=(' '+ finalResults + '%'+" "+"Poor 'Retake!'")
        }
    }
    
    document.getElementById('outResults').innerHTML=display;

}