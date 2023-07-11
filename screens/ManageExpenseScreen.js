import { useContext, useLayoutEffect } from "react";
import { IconButton } from "../components/IconButton/IconButton";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { Button } from "../components/Button/Button";
import { ExpensesContext } from "../store/expenses-context";
import { ExpenseForm } from "../components/ManageExpense/ExpenseForm";

export function ManageExpenseScreen({ route, navigation }) {
  const { deleteExpenses, addExpenses, updateExpenses } =
    useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  function deleteExpenseHandler() {
    if (!editedExpenseId) return;

    deleteExpenses(editedExpenseId);

    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      updateExpenses(editedExpenseId, {
        amount: 29.99,
        date: new Date(),
        description: "New buy",
      });
    } else {
      addExpenses({
        amount: 15,
        date: new Date(),
        description: "Dummy Expense",
      });
    }

    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Editing Expense" : "Adding Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      <ExpenseForm />
      <View style={styles.buttons}>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
