import { TextInput, View } from "react-native";
import { ComponentPropsWithoutRef, useCallback, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Input } from "./ui/input";
import { Text } from "./ui/text";

export default function PasswordInput(
  props: ComponentPropsWithoutRef<typeof TextInput>
) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  return (
    <View className="relative">
      <Input {...props} secureTextEntry={!isPasswordVisible} />

      <Text className="absolute right-3 top-3">
        <Entypo
          onPress={togglePasswordVisibility}
          name={isPasswordVisible ? "eye" : "eye-with-line"}
          size={20}
        />
      </Text>
    </View>
  );
}
