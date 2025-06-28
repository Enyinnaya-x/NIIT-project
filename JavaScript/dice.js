var amount = document.getElementById("betAmt").value
var disBal = document.getElementById("myBal")
disBal.innerHTML = `₦${localStorage.getItem("balance")}` //Displays the balance the user sees
//onclick run this function
function roll(data) {
        var randomNum = Math.ceil(Math.random() * 6) //randomly generated number between 1-6 that changes image name that indirectly changes image
        let myimg = document.getElementById("myimg")
        var amount = Number(document.getElementById("betAmt").value)
        if(localStorage.getItem("balance") < amount){
        feed.innerHTML = "Insufficient Balance💔"
        return
        }
        else if(localStorage.getItem("balance") >= amount){
            if (amount == "" || amount < 100) { //Checks if the user inputs a value below 100 or no value at all
                feed.innerHTML = "Enter an amount of at least ₦100 below 💲"
                return
            }
            else {
                feed.innerHTML = ""
                myimg.src = "images/" + "die" + randomNum + ".jpg" //changes image src url or file path
                var ogBalance = localStorage.getItem("balance")
                var newBal = ogBalance - amount;
                localStorage.setItem("balance", newBal) //Updates balance after a guess has been made
                disBal.innerHTML = `₦${localStorage.getItem("balance")}` //Displays the balance the user sees
            }
            if (data == randomNum) {
                feed.innerHTML = "Winner winner chicken dinner!🍗🎉"
                var winnings = amount * 3 //Winnings is 3x the amount bet 
                var total = winnings + newBal //Updates balance if you win a bet
                localStorage.setItem("balance", total)
                disBal.innerHTML = `₦${localStorage.getItem("balance")}`
            } else {
                feed.innerHTML = "Tough luck, try again! 😢"
            }
        }

        }
       
    function reset() { //resets balance back to 5000
            localStorage.setItem("balance", 5000)
            disBal.innerHTML = `₦${localStorage.getItem("balance")}`
            feed.innerHTML = "Feedback :"
        }