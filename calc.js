var buttons = document.querySelectorAll(".button");
var result = document.getElementById("result");
buttons.forEach(function(item){
    item.addEventListener("click", function(){
        result.value += item.innerHTML;
    })
})
var finalResult = document.getElementById("equal").onclick = function(){
    if(result.value == ""){
        result.className = "wrong";
        result.value = "";
        setTimeout(function(){
            result.className ="input";
        }, 3000)
        
    } else {
        document.getElementById("history3").innerHTML = document.getElementById("history2").innerHTML;
        document.getElementById("history2").innerHTML = document.getElementById("history1").innerHTML;
        document.getElementById("history1").innerHTML = document.getElementById("history").innerHTML;
        document.getElementById("history").innerHTML = result.value; 
        result.value = eval(result.value);
    }
}
var back = document.getElementById('back');
back.addEventListener('click', function(){
    result.value = result.value.slice(0, -1);
})
var clear = document.getElementById("clear").addEventListener('click', function(){
    result.value = "";
})
