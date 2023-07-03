import { useContext } from "react";
import { ExpensesOutput } from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

export function AllExpensesScreen() {
  const { expenses } = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expenses}
      expensesPeriod="Total"
      fallBackText="There is no expenses registered"
    />
  );
}
