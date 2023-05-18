var header = document.querySelector('header');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {
        header.classList.add('header-bg', 'shadow');
    } else {
        header.classList.remove('header-bg', 'shadow');
        }
    });

function show() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name != "" && email != "" && message != "") {
        document.getElementById("thanks").innerHTML = "<b>Thank you for your response. Your data recorded as:</b>";
        document.getElementById("hello").innerHTML = "Hello! My name is " + "<b>" + name + "</b>";
        document.getElementById("contact").innerHTML = "Please contact me through: " + "<b>" + email + "</b>";
        document.getElementById("messages").innerHTML = "I want to say about: " + "<br>" + "<b>" + message + "</b>";
    } else {
        alert("Please fill in all the required fields!");
    }
};

var clicked = 0;
function edit() {
    clicked ++;
    var editableElement = document.getElementById("editableElement");
    var kickstartElement = document.getElementById("kickStart").textContent;
    var editButton = document.getElementById("editButton");
    
    if (clicked === 1) {
        editButton.innerHTML = "Save";
        editableElement.textContent = kickstartElement;
        editableElement.style.backgroundColor = "#f5f5f5";
        editableElement.contentEditable = "true";
        editableElement.focus();
    } else if (clicked % 2 === 1) {
        editButton.innerHTML = "Save";
        editableElement.style.backgroundColor = "#f5f5f5";
        editableElement.contentEditable = "true";
        editableElement.focus();
    } else {
        editButton.innerHTML = "Edit";
        editableElement.style.backgroundColor = "#ffffff";
        editableElement.contentEditable = "false";
    }
};