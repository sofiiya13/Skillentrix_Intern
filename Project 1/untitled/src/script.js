/*intro to java script
1.variables
2.functions
3.pops ups
4.conditional statement.
5.loops
6.error handling
7.event listeners
8.DOM
*/

 
//let name = prompt("what is your name");  // hardcoding ? Hardcoding means directly writing a fixed value inside your code instead of getting it dynamically.
//let name = "sofiya naaz";
//let age = 20;
//alert("welcome to my web page!"+name);

// function defination
//function add(a,b){
 // let num1 = a;
  //let num2 = b;
  //result=num1+num2;
  //return result;
//}
//function def
//function greet(){
  //alert("this is a greet function pop up!");
//}
//function call
//greet();

//let answer = add(3,9);
//console.log(answer);
//conditional statements:
/*grade=86
if (grade>=90){
  //code will ececute if the condition 1 is true
  alert("you got A grade")
}
else if (grade>=50){
  //code will execute if the condition 2 is true
  alert("you got B grade")
}
else{
  // this code will ececute if the condition is not true
  alert("you got c grade")
}*/
//LOOPS:
/*for( initilization;condition;updation)
{
  //body of code
  //statements to be executed
}*/
/*for (let i=0;i<=30;i=i+5){
  console.log(i)
}*/
/*const control_of_toggle_btn = document.getElementById("toggle-theme");

control_of_toggle_btn.addEventListener("click", function () {
    console.log("Toggle button was clicked!");
});

document.addEventListener("keydown", function(event) {
    console.log("key Down event trigged with:" + event.key);
});
window.addEventListener("resize", function() {
    console.log("window is resized");
});

const control_of_contact_form = document.getElementById("contact-form");
control_of_contact_form.addEventListener('submit', function () {
  console.log("contact Form was submitted")
});*/
//ERROR HANDILING//
/*function getuser(id){
  const users = {
    1:"sofiya",
    3:"sharanya"
  };
   if (!users[id]){
     throw new Error('no user found with the id${id}');
    }
  return user[id];
}
function runBroken(){
    console.log("fetching user 1:" + getuser(1));
    console.log("fetching user 2:" + getuser(2));
    console.log("fetching user 3:" + getuser(3));
 
}
function runHandled(){
  const ids = [1,2,3];
  ids.forEach(id=>{
    try{
      console.log("fetching user" + id + getUser(id));
    }
    catch(error){
      console.log("could not find user", +error.message + "\n");
    }
    finally{
      console.log("done trying user",+ id);
    }
  });
  console.log("processing completed!");
}*/
 //Tasks for javascripts
//1.make the toggle button work
//2.make admin button work
//3.make contact me section capture user data and store in DB
//4.make admin login section work-check creds and show respones
//5.fetch user messages from the DB
//task 2
const control_of_admin_btn = document.getElementById("admin-btn");
const control_of_admin_login_section = document.getElementById("admin-login");
const control_of_user_responses_section = document.getElementById("user-responses");
control_of_admin_btn.addEventListener('click',function(){
  control_of_admin_login_section.style.display="block";//form none to block
  
});
// Task toggle button work
const control_of_toggle_btn = document.getElementById("toggle-theme");
control_of_toggle_btn.addEventListener ('click',function(){
  document.body.classList.toggle("dark-theme");
});
const db_url="https://script.google.com/macros/s/AKfycbxSKfxMLcSwb1xXCrWbUafEKBk3gvOi6VNMaYowHWLFIjFvxlJglIzpuoBNidNnOydkmQ/exec"//our API
// Task 3 - capture info from the contact me form.
const control_of_contact_form =document.getElementById("contact-form");
control_of_contact_form.addEventListener("submit",async function(event){
  event.preventDefault();
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let msg= document.getElementById("input-msg").value;
 // let date = new Date().toLocalString();
try{
  let response = await fetch(
    db_url,
    {
      method: "POST",
      headers:{
        "Content-Type":"text/plain;charset-utf-8"
      },
      body:JSON.stringify({
        action:"save_message",
        name: name,
        email:email,
        msg:msg
      })
    }
  );
  let result = await response.json();
  if (result.success){
    alert("Message submitted,will get back to you shortly!");
  }
  else{
    alert("Message could not be saved!");
  }
}
  catch(error){
    console.error(error);
    alert("there was a problem submitting the message!")
  }
});
// Task make the admin login section work 
let control_of_admin_form = document.getElementById("admin-form");
control_of_admin_form.addEventListener("submit",async function(event){
  event.preventDefault();
  let username = document.getElementById("input-username").value;
  let password = document.getElementById("input-password").value;
try{
  let response = await fetch(
    db_url,
    {
      method: "POST",
      headers:{
        "Content-Type":"text/plain;charset-utf-8"
      },
      body:JSON.stringify({
        action: "login",
        username: username,
        password: password
      })
    }
  );


  let result = await response.json();
  if (result.success) {
    alert("Login Successful!");

    //Admin section should disappear and User responses section should come up!
    control_of_admin_login_section.style.display = "none"; //Makes it invisible
    control_of_user_responses_section.style.display = "block"; //makes it visible
    
      //CALL the getUserMessages function here
    getUserMessages();
  }
  else{
    alert("Access denied, please try again!");
  }
}
  catch(error){
    console.error(error);
    alert("There was a problem loging in!");
  }
  
}
)

async function getUserMessages() {
  try{
    let response = await fetch(
      db_url
    );

    let result = await response.json();

    if(!result.success){
      alert("Could not fetch the messages.");
      return; //the function will not run further once a return is encountered.
    }

    const control_of_user_messages_div = document.getElementById("user-messages");

    result.messages.forEach(
      responses => {
        let control_of_new_div = document.createElement("div");

        let nameParagraph = document.createElement("p");
        nameParagraph.textContent = "Name: " + responses.name;

        let emailParagraph = document.createElement("p");
        emailParagraph.textContent = "Email: " + responses.email;

        let messageParagraph = document.createElement("p");
        messageParagraph.textContent = "Message: " + responses.msg;

        let dateParagraph = document.createElement("p");
        dateParagraph.textContent = "Date: " + responses.date;

        let separater = document.createElement("hr");

        control_of_new_div.appendChild(nameParagraph);

        control_of_new_div.appendChild(emailParagraph);

        control_of_new_div.appendChild(messageParagraph);

        control_of_new_div.appendChild(dateParagraph);

        control_of_new_div.appendChild(separater);

        control_of_user_messages_div.appendChild(control_of_new_div);

        

        
      }
    );
  }

  catch(error) {
    console.error(error);
    alert("There was a problem in fetching messages from DB!");
  }
}