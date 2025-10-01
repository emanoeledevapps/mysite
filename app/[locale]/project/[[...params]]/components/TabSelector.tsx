"use client";

import { Button } from "@/components/ui/button";
import { TType } from "@/types/t";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Tabs } from "./TabContent/TabContent";

interface Props {
  projectId: string;
  selectedTab: Tabs;
}
export function TabSelector({ selectedTab, projectId }: Props) {
  const { t } = useTranslation();
  const router = useRouter();

  function changeTab(tab: string) {
    router.push(`/project/${projectId}/${tab}`);
  }

  return (
    <section className="flex gap-5 overflow-x-auto w-full">
      <TabItem
        isSelected={selectedTab === "overview" || selectedTab === undefined}
        t={t}
        label="overview"
        value="overview"
        onChange={changeTab}
      />

      <TabItem
        isSelected={selectedTab === "privacy-policy"}
        t={t}
        label="privacyPolicy"
        value="privacy-policy"
        onChange={changeTab}
      />
    </section>
  );
}

interface TabItemProps {
  isSelected: boolean;
  t: TType;
  label: string;
  value: Tabs;
  onChange: (tab: Tabs) => void;
}

function TabItem({ t, isSelected, label, value, onChange }: TabItemProps) {
  return (
    <Button
      onClick={() => onChange(value)}
      variant={isSelected ? "default" : "ghost"}
    >
      {t(label)}
    </Button>
  );
}
