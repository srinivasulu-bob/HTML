
function addtask(){
    let a = document.getElementById("msg").value;
    let unordered=document.getElementById("ul");
    if(a==""){
        alert("please enter a task");
        return false;
    }


    let items = document.createElement('li');
    items.innerText=a;
    unordered.append(items);


     let btncontainer = document.createElement('div');
     items.append(btncontainer);
     //we have to create class name for div element
     btncontainer.className="task-button";


     //we have to create a two buttons
    // one is delete and another one is complete
     let deletebtn = document.createElement('button');
     btncontainer.append(deletebtn);
     //we will give name to delete button
     deletebtn.innerText="Delete";
     //whenever you click the delete button to delete the item
     deletebtn.onclick=function(){
        //first you access the parent(ul) and next access the child(li) and then remove it.
        unordered.removeChild(items);
     }



     let completebtn = document.createElement('button');
     btncontainer.append(completebtn);
     //we will give name to complete button
     completebtn.innerText="Complete";
     //same thing happen to complete button
     completebtn.onclick=function(){
        items.classList.toggle('completed');
     }

     a.value="";

}