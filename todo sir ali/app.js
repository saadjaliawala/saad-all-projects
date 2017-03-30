var array = [];

function addTodo(){
    var GetInputValue = document.getElementById("input").value;
    if(GetInputValue == " " || GetInputValue == ""){//if you want to check al space add a loop
        alert("Please Write Something!");
    }
    else {
        array.push(GetInputValue);
    }
    if (array.length >= 1){
        document.getElementById("heading").innerHTML = "Todo you entered here";
    }
    var todoList = document.getElementById("todo_list");
    var data = "";
    for (var i =0; i < array.length; i++) {
        data += "<li>"+"<input type=checkbox>" + array[i] + "</li>";
        todoList.innerHTML = data;
    }
    data = "";
    document.getElementById("Input").value = ""

}

function removed(){
    document.getElementById("todo_list").innerHTML = "";
    array = []
}