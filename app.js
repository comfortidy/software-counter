

var para = document.querySelector("p")
var count = 0
document.querySelector("#increase").addEventListener("click", () => {
    changeCount(1);
  });
  
  document.querySelector("#decrease").addEventListener("click", () => {
    changeCount(-1);
  });
  
  changeCount = (number) => {
    count += number;
    document.querySelector("#count").innerHTML = count;
}
 
function save(){
  para.innerHTML += count + ','
  count = 0
  document.querySelector("#count").innerText= '0'
}
function reset() {
  count = 0;
  document.getElementById("count").innerHTML = count;
}


