export interface Expense {
    id: number,
    budgetID: number,
    amount: number, 
    expenseCategory: string,
    name: string,
    date: Date,
}