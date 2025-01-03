import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "./ui/button";
import { Text } from "./ui/text";

export default function GoogleButton({ className }: { className?: string }) {
  const { t } = useTranslation("google");

  return (
    <Button variant="secondary" className={className}>
      <View className="flex flex-row gap-2">
        <Text>
          <FontAwesome name="google" size={20} />
        </Text>

        <Text>{t("title")}</Text>
      </View>
    </Button>
  );
}
