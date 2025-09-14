//your JS code here. If required.
const container = document.getElementById("container");


 function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
 }

 for(let i=1;i<=800;i++){
    const box = document.createElement("div");
    box.classList.add("square");
    container.appendChild(box);

    box.addEventListener("mouseover",()=>{
           const randomColor = getRandomColor();
        box.style.backgroundColor =randomColor;

        setTimeout(()=>{
             box.style.backgroundColor = "rgb(29, 29, 29)";
        }, 1000);
    });
container.appendChild(box);
 }