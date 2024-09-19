document.getElementById("btnAddMoney").addEventListener("click",()=>{
    let addMoneySection = document.getElementById("addMoney");
    let cashOutSection = document.getElementById("cashOut");
    if(cashOutSection.classList.contains("hidden")){
        addMoneySection.classList.toggle("hidden");
        document.getElementById("btnAddMoney").classList.toggle("bg-blue-50")
        document.getElementById("btnAddMoney").classList.toggle("border-blue-500")
    } else{
        cashOutSection.classList.toggle("hidden");
        addMoneySection.classList.toggle("hidden");
        document.getElementById("btnAddMoney").classList.toggle("bg-blue-50")
        document.getElementById("btnAddMoney").classList.toggle("border-blue-500")
        document.getElementById("btnCashOut").classList.toggle("bg-blue-50")
        document.getElementById("btnCashOut").classList.toggle("border-blue-500")

    }
    
})
// document.getElementById("btnAddMoney").addEventListener("click",()=>{
//     let addMoneySection = document.getElementById("addMoney");
//     addMoneySection.classList.toggle("hidden");
//     document.getElementById("btnAddMoney").classList.toggle("bg-blue-50")
//     document.getElementById("btnAddMoney").classList.toggle("border-blue-500")
//     let cashOutSection = document.getElementById("cashOut");
//     if(cashOutSection.classList.contains("hidden")){
//         cashOutSection.classList.remove("hidden");
//     }
// })

document.getElementById("addMoneySubmit").addEventListener("click",(event)=>{
    event.preventDefault();
    let AN = document.getElementById("accoundNumber").value;
    let PIN = document.getElementById("pinNumber").value;
    let serAN = "017";
    let serPIN = 123;
    if(AN === "017" && parseFloat(PIN) === serPIN){
        let balance = document.getElementById("balance");
        let amount = document.getElementById("amount");
        let total = (Number(balance.innerText) + Number(amount.value));
        balance.innerText = total;
    } else{
        alert("Invalid Account Number or PIN")
    }
})