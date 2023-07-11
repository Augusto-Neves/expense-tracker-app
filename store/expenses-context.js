import { createContext, useMemo, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 55.99,
    date: new Date("2023-06-28"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2023-06-27"),
  },
  {
    id: "e3",
    description: "Food",
    amount: 5.99,
    date: new Date("2023-06-26"),
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

export const ExpensesContext = createContext({
  expenses: [],
  addExpenses: ({ description, amount, date }) => {},
  deleteExpenses: (id) => {},
  updateExpenses: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();

      return [...state, { ...action.payload, id: id }];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updateExpenses = [...state];

      updateExpenses[updatableExpenseIndex] = updatedItem;

      return updateExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpenses(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpenses(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpenses(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = useMemo(
    () => ({
      expenses: expensesState,
      addExpenses: addExpenses,
      deleteExpenses: deleteExpenses,
      updateExpenses: updateExpenses,
    }),
    [expensesState, addExpenses, deleteExpenses, updateExpenses]
  );

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
