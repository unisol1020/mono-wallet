import { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { H2, Large, Lead } from "~/components/ui/typography";
import ethereum from "~/services/ethereum";

export default function SeedPhraseScreen() {
  const { t } = useTranslation("generateSeedPhrase");
  const [mnemonic] = useState<string[]>(() => {
    return ethereum.createWallet().mnemonic?.phrase.split(" ") ?? [];
  });

  return (
    <SafeAreaView>
      <View className="flex flex-col justify-between h-full px-4">
        <View className="flex flex-col">
          <H2 className="border-0">{t("title")}</H2>
          <Lead className="">{t("subtitle")}</Lead>
        </View>

        <View className="flex flex-row flex-wrap gap-3 justify-center">
          {mnemonic.map((word, index) => (
            <Badge variant="secondary" key={word}>
              <View className="flex flex-row gap-1">
                <Large className="text-gray-400">{index + 1 + ". "}</Large>
                <Large>{word}</Large>
              </View>
            </Badge>
          ))}
        </View>

        <Button>
          <Text>{t("confirmButton")}</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
