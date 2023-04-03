// create a event listener for the submit 
document.addEventListener('DOMContentLoaded', () => {
    // your code here
    function handleInputOfName(){
        let userInput = document.querySelector("#github-form")
        //event listener
         userInput.addEventListener('submit',(e) => {
            e.preventDefault()
            fetchTheUsersFromSearch(e.target.search.value)
        })
       
       }
       handleInputOfName()

       //Fetch endponts for the usernames 
       function fetchTheUsersFromSearch(UseName){
        fetch(`https://api.github.com/search/users?q=${UseName}`)
        .then(response => response.json())
        .then( data => {
          const userList =document.querySelector("#user-list")
          userList.textContent =""
          data.items.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.login;
            userList.appendChild(li);
       })
      })      
    }})


