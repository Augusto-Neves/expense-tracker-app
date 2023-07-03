import { useContext } from "react";
import { ExpensesOutput } from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";

export function RecentExpensesScreen() {
  const { expenses } = useContext(ExpensesContext);

  const recenteExpenses = expenses.filter((expense) => {
    const today = new Date();

    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput
      expenses={recenteExpenses}
      expensesPeriod="Last 7 days"
      fallBackText="There is no expenses registered"
    />
  );
}
