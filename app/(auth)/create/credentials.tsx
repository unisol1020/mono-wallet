import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { useTranslation } from "react-i18next";
import PasswordInput from "@/components/PasswordInput";
import { H2, Lead } from "~/components/ui/typography";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

export default function CredentialsScreen() {
  const { t } = useTranslation("registerWithEmailAndPassword");
  return (
    <SafeAreaView>
      <View className="flex flex-col justify-between h-full px-4">
        <View className="flex flex-col">
          <H2 className="border-0">{t("title")}</H2>
          <Lead className="">{t("subtitle")}</Lead>
        </View>

        <View className="flex flex-col gap-8">
          <Input
            nativeID="account"
            placeholder={t("inputs.account.placeholder")}
          />

          <PasswordInput
            nativeID="password"
            placeholder={t("inputs.password.placeholder")}
          />
        </View>

        <Button>
          <Text>{t("getStarted")}</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
