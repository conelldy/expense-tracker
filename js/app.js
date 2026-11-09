let transactions = [];


function addTransaction(){
    let category, type = document.getElementById('transType').value;
    if(type == 'income'){
        category = document.getElementById('transCategoryIncome').value;
    } else if(type == 'expense') {
        category = document.getElementById('transCategoryExpense').value;
    }
    let item = {
        id: generationId(),
        title: document.getElementById('transTitle').value,
        type: type,
        category: category,
        date: document.getElementById('transDate').value,
        amount: Number(document.getElementById('transAmount').value),
    }
    if(item.title !== "" && item.type !== "basic" && item.category !== undefined && item.category !== "basic" && item.date !== "" && item.amount > 0){
        transactions.push(item);
    } else {
        alert("Enter values ​​in all fields");
    }
}


function generationId(){
    let tl = transactions.length;
    let id = 1;
    if(tl == 0){
        return id;
    } else {
        for(let i = 0; i<tl; i++){
            if(transactions[i].id > id){
                id = transactions[i].id;
            }
        }
        return (id+1);
    }
}