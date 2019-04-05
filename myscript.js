function addli() {
    var Subject = document.getElementById("subject").value,
        Name = document.getElementById("name").value,
        Phone = document.getElementById("phone").value,
        Message = document.getElementById("message").value;
    if (Subject == "" || Name == "" || Phone == "" || Message == "" || Email == "") {
        alert("ใส่ข้อความให้ครบด้วย")
        return false;
    }
    var Man = document.getElementById("man").checked;
    var Girl = document.getElementById("girl").checked;
    
    if(Man == ""&&Girl == ""){
        alert("มึงจะไม่มีเพศไม่ได้");
        return false;
    }
    if(Man == true&&Girl == true){
        alert("มึงจะมี2เพศไม่ได้");
        return false;
    }
    if (Man == true) {
        Man = "male";
    } else Man = "";
    if (Girl == true) {
        Girl = "Female"
    } else Girl = "";

    var Email = document.getElementById("email").value;

    var listNode = document.getElementById("list"),
        liNode = document.createElement("li"),

        txtNode = document.createTextNode("Subject :" + Subject + " " + "Name :" + Name + " " + "Phone :" + Phone + " " + "Message :" + Message + " " + "Gender :" + Man + " " + Girl + " " + "Email :" + Email);
    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);

    let deleteLink = document.createElement("a");
    deleteLink.textContent = "[Delete]";
    deleteLink.href = "#";
    deleteLink.addEventListener("click", deleteItem);
    liNode.appendChild(deleteLink);

    document.getElementById("list").appendChild(liNode);
    input.value = "";

    function deleteItem() {
        document.getElementById("list").removeChild(liNode);
    }
}




