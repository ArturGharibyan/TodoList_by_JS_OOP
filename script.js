class Todo {
    constructor() {

    }

    create() {
        
        var myNodelist = document.getElementsByTagName("LI");
        var i;
        for (i = 0; i < myNodelist.length; i++) {
            var closeButton = document.createElement("button");
            var txt = document.createTextNode("\u00D7");
            closeButton.className = "close";
            closeButton.appendChild(txt);
            myNodelist[i].appendChild(closeButton);
        }

        var close = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }


        var list = document.querySelector('ul');
        list.addEventListener('click', function (ev) {
            if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('checked');
            }
        }, false);



        let div = document.createElement("div")
        div.setAttribute("id", "myDIV")
        div.className = "header"
        let input = document.createElement("input")
        let button = document.createElement("button")
        button.className = "addBtn"
        button.innerHTML = "save"
        div.append(input, button)
        document.body.prepend(div)
        button.addEventListener("click", newElement)
        input.id = "myInput"
        function newElement() {
            let arr = localStorage.data ? JSON.parse(localStorage.data) : []
            let obj = {
                name: input.value,
                surname: document.createTextNode(inputValue),
            }
            arr.push(obj)
            localStorage.setItem("data", JSON.stringify(arr))




            var inputValue = document.getElementById("myInput").value;
            var t = document.createTextNode(inputValue);
            var li = document.createElement("li");
            let ul = document.createElement("ul")
            li.appendChild(t);
            ul.id = "myUL"
            myUL.appendChild(li);
            document.getElementById("myInput").value = "";
            
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            li.className="li2"
            span.appendChild(txt);
            li.appendChild(span);

            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                }
            }
        }
    }


}

let todoList = new Todo()
todoList.create()