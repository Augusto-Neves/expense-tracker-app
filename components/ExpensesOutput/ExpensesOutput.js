import { View, StyleSheet } from "react-native";
import { ExpensesSummary } from "./components/ExpensesSummary";
import { ExpensesList } from "./components/ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 55.99,
    date: new Date("2022-04-09"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2022-04-18"),
  },
  {
    id: "e3",
    description: "Food",
    amount: 5.99,
    date: new Date("2022-04-21"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-04-25"),
  },
  {
    id: "e6",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-04-25"),
  },
  {
    id: "e5",
    description: "A new game",
    amount: 18.59,
    date: new Date("2022-04-29"),
  },
  {
    id: "e7",
    description: "A new game",
    amount: 18.59,
    date: new Date("2022-04-29"),
  },
];

export function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
  },
});
