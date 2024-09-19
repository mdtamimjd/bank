document.getElementById("btnCashOut").addEventListener("click",()=>{
    let cashOutSection = document.getElementById("cashOut");
    let addMoneySection = document.getElementById("addMoney");
    if(addMoneySection.classList.contains("hidden")){
        cashOutSection.classList.toggle("hidden");
        document.getElementById("btnCashOut").classList.toggle("bg-blue-50")
        document.getElementById("btnCashOut").classList.toggle("border-blue-500")
    }else{
        addMoneySection.classList.toggle("hidden");
        cashOutSection.classList.toggle("hidden");
        document.getElementById("btnAddMoney").classList.toggle("bg-blue-50")
        document.getElementById("btnAddMoney").classList.toggle("border-blue-500")
        document.getElementById("btnCashOut").classList.toggle("bg-blue-50")
        document.getElementById("btnCashOut").classList.toggle("border-blue-500")
    }
})
// document.getElementById("btnCashOut").addEventListener("click",()=>{
//     let cashOutSection = document.getElementById("cashOut");
//     cashOutSection.classList.toggle("hidden");
//     document.getElementById("btnCashOut").classList.toggle("bg-blue-50")
//     document.getElementById("btnCashOut").classList.toggle("border-blue-500")
//     let addMoneySection = document.getElementById("addMoney");
//     if(addMoneySection.classList.contains("hidden")){
//         addMoneySection.classList.remove("hidden");
//     }
// })

document.getElementById("cashOutSumit").addEventListener("click",(event)=>{
    event.preventDefault();
    let AN = document.getElementById("accoundNumberCashOut").value;
    let PIN = document.getElementById("pinNumberCashOut").value;
    let serAN = "017";
    let serPIN = 123;
    if(AN === "017" && parseFloat(PIN) === serPIN){
        let balance = document.getElementById("balance");
        let amount = document.getElementById("amountCashOut");
        let total = (Number(balance.innerText) - Number(amount.value));
        balance.innerText = total;
    } else{
        alert("Invalid Account Number or PIN")
    }
})