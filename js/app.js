let transactions = [];


function addTransaction(){
    let category;
    let type = document.getElementById('transType').value;
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
        renderTransaction(item);
        updateBalance();
    } else {
        alert("Enter values ​​in all fields");
    }
}


function generationId(){
    let id = 1;
    if(transactions.length == 0){
        return id;
    } else {
        for(let i = 0; i<transactions.length; i++){
            if(transactions[i].id > id){
                id = transactions[i].id;
            }
        }
        return (id+1);
    }
}


function renderTransaction(transactionItem){
    let expenses = document.getElementById('expenseList');
    let incoming = document.getElementById('incomeList');

    const newElem = document.createElement('li');
    newElem.classList.add('transactionElem');
    newElem.classList.add('between');
    
    const icon = document.createElement('img');
    icon.classList.add('iconOfTransaction');
    newElem.append(icon);

    const box = document.createElement('div');
    box.classList.add('column')
    const title = document.createElement('h2');
    title.textContent = transactionItem.title;
    box.append(title);
    const date = document.createElement('h5');
    date.textContent = transactionItem.date;
    box.append(date);
    newElem.append(box);

    const amount = document.createElement('h3');
    amount.textContent = transactionItem.amount + ' $';
    newElem.append(amount);
    if(Type == 'expense'){
        expenses.append(newElem);
    } else if(Type == 'income'){
        incoming.append(newElem);
    }
}


function updateBalance(){
    const balance = document.getElementById('balance');
    let balanceInt = 0;
    for(let i = 0; i<transactions.length; i++){
        if(transactions[i].type == 'expense'){
            balanceInt -= transactions[i].amount;
        } else if(transactions[i].type == 'income'){
            balanceInt += transactions[i].amount;
        }
    }
    balance.textContent = String(balanceInt) + ' $';
}