document.getElementById("myBal").innerHTML = `₦${localStorage.getItem("balance")}`; //Displays the balance the user sees

    document.getElementById("withdrawForm").onsubmit = function(){
        event.preventDefault()
    }

function withdraw(){
    var account = document.getElementById("account").value
    var amount = Number(document.getElementById("amount").value)
    var choice = document.getElementById("choose").value
    if(account.length != 10){
        window.alert("Please fill in a valid account number")
        return
    }
    if(amount == ""){
        window.alert("Please type in an amount")
        return
    }
    if(amount > localStorage.getItem("balance")){
        window.alert("Insufficient funds")
    }else{
        window.alert(`Your withdrawal of ${amount} to ${account} at ${choice} has been initiated`);
        var remains = localStorage.getItem("balance") - amount
        localStorage.setItem("balance", remains)
        document.getElementById("myBal").innerHTML = `₦${localStorage.getItem("balance")}`; //Displays the balance the user sees
    }

}