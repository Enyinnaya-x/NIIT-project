  //Original emojis we're selecting from
  const emojis = ["🍒", "💎", "🍌"]
var disBal = document.getElementById("myBal")
disBal.innerHTML = `₦${localStorage.getItem("balance")}` //Displays the balance the user sees
var feed = document.getElementById("feed");
  //Onclick run this function
  function spin(){
      var spinArray = [];
      for(let i = 0; i < 3; i++){
          const randomIndex = Math.floor(Math.random() * emojis.length); //randomly generates index b/w 0-2 of which emojis we're collecting and pushing into the temporary array from hence we would display
          spinArray.push(emojis[randomIndex]);
      }
      
      if(localStorage.getItem("balance") < 100){
        feed.innerHTML = "Feedback : Insufficient balance💔";
        return
      }
      var newBal = localStorage.getItem("balance") - 100 //Debit the user after each spin
      localStorage.setItem("balance", newBal)
        disBal.innerHTML = `₦${localStorage.getItem("balance")}` //Displays the balance the user sees
      let emo1 = document.getElementById("firsth") ;
      let emo2 = document.getElementById("secondh");
      let emo3 = document.getElementById("thirdh");
      emo1.innerHTML = spinArray[0] 
      setTimeout(function(){
          emo2.innerHTML = spinArray[1] 

      }, 200)
      setTimeout(function(){
          emo3.innerHTML = spinArray[2] 

      }, 400)



      //Compares the emojis and checks if they're the same before displaying a message
      setTimeout(function(){
          if(emo1.innerHTML == emo2.innerHTML & emo2.innerHTML == emo3.innerHTML){
            var winnings = 300
            var total = winnings + Number(localStorage.getItem("balance"));
            localStorage.setItem("balance", total);
            disBal.innerHTML = `₦${localStorage.getItem("balance")}` //Displays the balance the user sees
            feed.style.fontSize = "16px";
            feed.innerHTML = "Feedback : Winner Winner Chicken Dinner! You just won ₦300 🎉";
          }else{
              feed.innerHTML = "Feedback : Tough luck try again 😢"
          }
      }, 700)
  }
  function reset(){ //resets balance back to 5000
    localStorage.setItem("balance", 5000) 
    disBal.innerHTML = `₦${localStorage.getItem("balance")}`
}