import { useLayoutEffect } from "react";
import { IconButton } from "../components/IconButton/IconButton";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

export function ManageExpenseScreen({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  function deleteExpenseHandler() {}

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Editing Expense" : "Adding Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
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
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
