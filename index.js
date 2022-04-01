

console.log("Hey hi...........Running javascript");

const data=[{name:"Meghraj Deshmukh "},{email:"meghraj.deshmukh103@gmail.com"},{data:"APPLE MacBook Air M1 - (16 GB/256 GB SSD/Mac OS Big Sur) Z124J001KD  (13.3 inch, Space Grey, 1.29 Kg)"}]
Render();

function Render(){

   console.log("Render function............");
    const dom=document.getElementById("DOM");
    const email= emailBody(data);
    console.log("email",email,"DOM",dom);
    dom.appendChild(email);

}


/**Render the email body component */
function emailBody(data){
   
    const email=document.createElement("div");
    email.classList.add("emailBody");
    const avatarContainer=createElement("div","avatarContainer");
    const avatar=createElement("img","avatar","","avatar.png");
    avatarContainer.appendChild(avatar);
    email.appendChild(avatarContainer);
    const emailContent=createElement("div","emailContent");
       
       for(let i=0;i<3;i++){
      emailContent.appendChild(createElement("div","email-content-row",data[i]));
       }
      
       email.appendChild(emailContent);
    return email;

    
};


function createElement(type,className,data,src){
    
     let key=null;
           if(data)    
        key=Object.keys(data);

    const element=document.createElement(type);
    if(type=="img"&&src){
        element.src=src;
    }
        if(className)
    element.classList.add(className);

      if(data && key){
        
        element.innerHTML=key+":"+data[key];

      }
 
    return element;
}