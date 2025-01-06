document.addEventListener("DOMContentLoaded" , function() {

    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector('.hard-progress');
    const easyLabel = document.getElementById('easy-labal');
    const mediumyLabel = document.getElementById('medium-labal');
    const hardyLabel = document.getElementById('hard-labal');
    const cardStatsContainer = document.querySelector('.stats-cards');


    function validateUsername(username) {
        if(username.trim() === ""){
            alert("username should not be Empty");
            return false;

        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching){
            alert("Invalid username");
        }
        return isMatching
    } 

    async function fetchuserDetails (username) {
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;

        try{

            searchButton.textContent = "Searching..."
            searchButton.disabled = true;

            const response = await fetch(url);
            if(!response.ok){
                throw new Error("unable to fetch the user details");
            }

            const data = await response.json();
            console.log("Logged in user :-  ", data);
            
        }catch(error){
            console.log(error);
            statsContainer.innerHTML = '<p>No data Found</p>';
            
        }
    }

    searchButton.addEventListener('click' ,function() {
        const username = usernameInput.value;
        console.log(username);

        if(validateUsername(username)){
            fetchuserDetails(username)
        }
        
    })
})