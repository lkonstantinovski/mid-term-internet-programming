function store(){
        var input= document.getElementById("Email").value;
        localStorage.setItem("Email", input);
        var input= document.getElementById("Name");
        localStorage.setItem("Name", input.value);
        var input= document.getElementById("Surname");
        localStorage.setItem("Surname", input.value);
        var input= document.getElementById("studentID");
        localStorage.setItem("studentID", input.value);
        var input = document.getElementById("Note");
        localStorage.setItem("Note", input.value);
       }


function validateForm() {
        var x = document.forms["myForm"]["Name"].value;
        if (x == "") {
          alert("Name must be filled out");
          return false;
        }
        var y = document.forms["myForm"]["Surname"].value;
        if (y == "") {
          alert("Surname must be filled out");
          return false;
        }
        var z = document.forms["myForm"]["Email"].value;
        if (z == "") {
          alert("Email must be filled out");
          return false;
        }
        var f = document.forms["myForm"]["studentID"].value;
        if (f == "") {
          alert("Student ID must be filled out");
          return false;
        }
  }