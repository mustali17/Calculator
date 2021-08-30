
function Delete () {
    var tb = document.getElementById('displaycontainer');
    var g = tb.textContent;
    tb.textContent = g.substr(0, g.length-1);
   }
   
   

function Clear(){
    var tb = document.getElementById('displaycontainer');
    tb.textContent = "";
}
   
   
function insert(num) {
    var tb = document.getElementById("displaycontainer");
    var prev = tb.textContent;
    tb.textContent = prev + num; 
}
   

function calculate() {
    var  tb = document.getElementById('displaycontainer');
    var exp = tb.textContent;
if (exp) {
     
    exp = eval(exp);
    tb.textContent = exp; 
    
    }else {
    alert("You need To Insert Number To Calcualte. !Ok");
    }
    
   }