function DivStyle(he,wi,co){
    this.he=he;
    this.wi=wi;
    this.co=co;
}

function createDiv(){
    var div=document.createElement('div');
    div.innerHTML="I am a division";
    div.setAttribute("id","div1");
    var he=parseInt(prompt("Enter the height"));
    var wi=parseInt(prompt("Enter the width"));
    var co=parseInt(prompt("Enter the color"));
    var ds=new DivStyle(he,wi,co);
    changeDivStyle(ds,div);
    document.body.appendChild(div);
    return div;
}