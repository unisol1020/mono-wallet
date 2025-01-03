import { ReactNode } from "react";
import { View } from "react-native";
import { H2, Lead, P } from "./ui/typography";
import { Button } from "./ui/button";
import { Text } from "./ui/text";

type InfoModalProps = {
  title: string;
  subtitle: string;
  button: InfoModalButton;
  steps: InfoModalStep[];
};

type InfoModalStep = {
  description: string;
  icon: ReactNode;
};

type InfoModalButton = {
  title: string;
  onPress: () => void;
};

export default function InfoModal({
  title,
  subtitle,
  steps,
  button,
}: InfoModalProps) {
  return (
    <View className="flex-1 flex flex-col gap-2 pb-20">
      <View className="w-full flex items-center pt-2">
        <View className="w-16 h-1 bg-primary rounded-full" />
      </View>

      <View className="flex flex-col h-full justify-between p-5">
        <View className="flex flex-col gap-5">
          <View className="flex flex-col">
            <H2 className="border-0">{title}</H2>
            {subtitle && <Lead className="">{subtitle}</Lead>}
          </View>
        </View>

        <View className="flex flex-col gap-5">
          {steps.map((step) => (
            <Step key={step.description} {...step} />
          ))}
        </View>

        <Button onPress={button.onPress}>
          <Text>{button.title}</Text>
        </Button>
      </View>
    </View>
  );
}

const Step = ({ description, icon }: InfoModalStep) => {
  return (
    <View className="flex flex-row items-center gap-4 pr-12">
      {icon}
      <P>{description}</P>
    </View>
  );
};
