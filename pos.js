var posdata = document.getElementById("data");
var menu = document.getElementById("menu");
var cal = document.getElementById("cal");

for(let i = 0; i < data.length; i++) {
    let button = document.createElement("input");
    button.type = "button";
    button.value = `${data[i].name} ${data[i].price}`;
    button.onclick = function() {
        let div = document.createElement("div");
        let spantxt = document.createElement("span");
        spantxt.innerHTML = data[i].name; //initialized name
        
        let span = document.createElement("span");

        let textarea = document.createElement("textarea");
        textarea.value = 1; // initialized value
    
        let upbutton = document.createElement("input");
        upbutton.type = "button";
        upbutton.value = "+";
        upbutton.onclick = function() {
            textarea.value++;
            summenu();
        }
    
        let downbutton = document.createElement("input");
        downbutton.type = "button";
        downbutton.value = "-";
        downbutton.onclick = function() {
            textarea.value < 1 ? 0 : textarea.value--;
            summenu();
        }
    
        let delmenu = document.createElement("input");
        delmenu.type = "button";
        delmenu.value = "x";
        delmenu.onclick = function() {
            div.remove();
        }
        let summenu = function() {
            span.innerHTML = textarea.value * data[i].price;
        }
        summenu();
        div.append(spantxt);
        div.append(textarea);
        div.append(upbutton);
        div.append(downbutton);
        div.append(delmenu);
        div.append(span);

        if (menu.innerText.indexOf(data[i].name) < 0) {
            menu.prepend(div);
        } else {
            0;
        }
    }
    posdata.append(button);
}
var sum = document.getElementById("sum");
sum.onclick = function() {
    let temp_span = document.getElementsByTagName("span");
    let val = 0;
    for(let i = 0; i < temp_span.length; i++) {
        if (Number(temp_span[i].innerHTML) > 0) {
            val = val + Number(temp_span[i].innerHTML);
        }
    }
    cal.innerHTML = `Total: ${val}`;
}