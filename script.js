// This waits for the webpage to fully load before running our code
document.addEventListener('DOMContentLoaded', function() {
    
    // This finds the input field where users type their name
    let nameInput = document.getElementById('nameInput');
    
    // This finds the button on our webpage using its ID
    let welcomeButton = document.getElementById('welcomeButton');
    
    // This finds the paragraph where we'll display our message
    let welcomeMessage = document.getElementById('welcomeMessage');
    
    // This array holds different fun messages we can show
    // We use 'const' because this list won't change during our program
    const funMessages = [
        "is absolutely awesome! 🌟",
        "rocks the world! 🎸",
        "is a superstar! ⭐",
        "brings joy everywhere! 😊",
        "is fantastic! 🎉",
        "is amazing! 🚀"
    ];
    
    // This tells the button what to do when someone clicks it
    welcomeButton.addEventListener('click', function() {
        
        // This gets the name the user typed in the input field
        let userEnteredName = nameInput.value;
        
        // This checks if the user actually typed something
        if (userEnteredName === "") {
            // If no name was entered, we show a helpful message
            welcomeMessage.textContent = "Please enter your name first! 😊";
        } else {
            // This picks a random fun message from our array
            let randomIndex = Math.floor(Math.random() * funMessages.length);
            let randomMessage = funMessages[randomIndex];
            
            // This creates our personalized message using string concatenation
            let personalizedMessage = userEnteredName + " " + randomMessage;
            
            // This puts our message inside the paragraph on the webpage
            welcomeMessage.textContent = personalizedMessage;
            
            // This clears the input field so the user can easily enter a new name
            nameInput.value = "";
            
            // This also prints the message to the console
            console.log("Greeting displayed: " + personalizedMessage);
        }
    });
    
    // This allows users to press Enter instead of clicking the button
    nameInput.addEventListener('keypress', function(event) {
        // This checks if the user pressed the Enter key
        if (event.key === 'Enter') {
            // This simulates clicking the button
            welcomeButton.click();
        }
    });
});
