let hiden = document.getElementById("hidden");
let visble = document.getElementById("visible");

document.addEventListener('visibilitychange', function(){
    document.title = document.visibilityState;
    var result = document.visibilityState;
    console.log(result);
    
    if (result == "hidden"){
        visble.innerHTML="";
        var nodeHidden = document.createElement('h1');
        nodeHidden.innerHTML = result;
        hiden.appendChild(nodeHidden);
    }
    else{
        hiden.innerHTML="";
        var nodeVisible = document.createElement('h1');
        nodeVisible.innerHTML = result;
        visble.appendChild(nodeVisible);
    }
});


$(window).focus(function(){
    console.log("Window Focused.");
});

$(window).blur(function(){
    console.log("Window not in use.");
});