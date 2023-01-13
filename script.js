 function sacarstyle1() {  
    var val = document.getElementById("div1").getAttribute("style");
     alert(val)
     };

function sacarstyle2(){
    var val1 = document.getElementById("div2").getAttribute("style");
    alert(val1)
}  



// function fondorojo(){
//     document.getElementById("div1").setAttribute("class", "rojo");
// }




function funcionset() {
            document.getElementById("myInput").setAttribute("type", "button"); 

}

function myFunction() {
    document.getElementById("myInput").setAttribute("class", "rojo"); 
    // ("style", "background-color:red;")
  }

  function inn(){
    let html = document.getElementById("myP").innerHTML;
    document.getElementById("demo").innerHTML = html;
        }