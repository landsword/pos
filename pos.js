var posdata = document.getElementById("data");
var cal = document.getElementById("cal");

var pushdata = function(data) {
    for(let i = 0; i < data.length; i++) {
        let button = document.createElement("input");
        button.type = "button";
        button.value = `${data[i].name} ${data[i].price}`;
        button.className = "menu";
        button.onclick = function() {
            let div = document.createElement("div");
            div.className = "menus";
            div.innerHTML = this.value.slice(0, -4);
            let textarea = document.createElement("textarea");
            textarea.value = 1;
            let upbutton = document.createElement("input");
            upbutton.type = "button";
            upbutton.value = "+";
            upbutton.onclick = function() {
                textarea.value++;
                menu_price();
            }
            let downbutton = document.createElement("input");
            downbutton.type = "button";
            downbutton.value = "-";
            downbutton.onclick = function() {
                textarea.value <= 0 ? (textarea.value = 0) : textarea.value--;
                menu_price();
            }
            let del_menu = document.createElement("input");
            del_menu.type = "button";
            del_menu.value = "X";
            del_menu.onclick = function() {
                div.remove();
            }
            let span = document.createElement("span");
            let menu_price = function() {
                span.innerHTML = data[i].price * textarea.value;
            }
            menu_price();
            div.append(textarea);
            div.append(upbutton);
            div.append(downbutton);
            div.append(del_menu);
            div.append(span);
            cal.append(div);
        }
        posdata.append(button);
    }
}
pushdata(data);