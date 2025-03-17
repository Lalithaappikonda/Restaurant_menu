
function veg(){
    const one=document.getElementById("display1");
    if(one.style.display==="block"){
        one.style.display="none";
    }else{
        one.style.display="block";
    }
       
}


function nvveg(){
    const one=document.getElementById("display2");
    if(one.style.display==="block"){
        one.style.display="none";
    }else{
        one.style.display="block";
    }    
}
function starter(){
    const one=document.getElementById("display3");
    if(one.style.display==="block"){
        one.style.display="none";
    }else{
        one.style.display="block";
    }    
}
function soup(){
    const one=document.getElementById("display4");
    if(one.style.display==="block"){
        one.style.display="none";
    }else{
        one.style.display="block";
    }    
}




// item details
 

function showitem(itemId){
    const allitems=[
        "veg_pulao","paneer","gobi","mushroom","babycorn","manch",
        "dum","fry","mutton","prawn","chicken65","lolipop",
        "chick65","Crispy","pepper","Majestic","Schezwan","Andhra",
        "clear","Manchow","soup","garlic","Gluten","spinash"
    ];
    allitems.forEach(item =>{
        const element=document.getElementById(item);
        if(element){
            element.style.display="none";
        }
    });
    const target=document.getElementById(itemId);
    if(target){
        target.style.display="block";
    }
}


