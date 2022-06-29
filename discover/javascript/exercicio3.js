const family = {
    incomes: [],
    expenses: []
}

family.incomes.push(700.0)
family.expenses.push(334.0)
family.expenses.push(156.0)
family.expenses.push(211.0)

function getFamilyBalance() {
    let sumOfIncomes = 0;
    let sumOfExpenses = 0;

    for (let income of family.incomes) {
        sumOfIncomes += income
    }

    for (let expense of family.expenses) {
        sumOfExpenses += expense
    }

    const finalBalance = sumOfIncomes - sumOfExpenses;
    
    return finalBalance.toFixed(2);
}

    const balance = getFamilyBalance() >= 0.0 ? "Positive balance: $" + getFamilyBalance() : "Negative balance: $" + getFamilyBalance();

    console.log(balance);