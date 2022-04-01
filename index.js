

console.log("Hey hi...........Running javascript");

Render();

function Render(){

   console.log("Render function............");
    const dom=document.getElementById("DOM");
    const email= emailBody();
    console.log("email",email,"DOM",dom);
    dom.appendChild(email);

}



/**Render the email body component */
function emailBody(data){
   
    const email=document.createElement("div");
    email.classList.add("emailBody");

    return email;
    
}