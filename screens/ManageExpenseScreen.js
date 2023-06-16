import { useLayoutEffect } from "react";
import { View, Text } from "react-native";

export function ManageExpenseScreen({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Editing Expense" : "Adding Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>ManegeExpenseScreens</Text>
    </View>
  );
}
