import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { Text } from "./ui/text";

const AppleButton = ({ className }: { className?: string }) => {
  const { t } = useTranslation("apple");

  return (
    <Button variant="secondary" className={className}>
      <View className="flex flex-row items-center gap-2">
        <Text>
          <FontAwesome name="apple" size={20} />
        </Text>

        <Text>{t("title")}</Text>
      </View>
    </Button>
  );
};

export default AppleButton;
