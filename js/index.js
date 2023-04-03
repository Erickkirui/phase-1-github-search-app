// create a event listener for the submit 
document.addEventListener('DOMContentLoaded', () => {
    // your code here
    function handleInputOfName(){
        let userInput = document.querySelector("#github-form")
        //event listener
        userInput.addEventListener('submit',(e) => {
            e.preventDefault()
            console.log(e.target.search.value)
        })
       
       }
       
       handleInputOfName()
  });













