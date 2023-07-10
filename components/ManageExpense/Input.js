import { TextInput, Text, View } from 'react-native';

export function Input({ label, textInputConfig }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
}
