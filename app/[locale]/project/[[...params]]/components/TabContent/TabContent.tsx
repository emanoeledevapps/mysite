import { ProjectProps } from "@/types/project";
import { Overview } from "./Overview";
import { PrivacyPolicy } from "./PrivacyPolicy";

interface Props {
  selectedTab: Tabs;
  project: ProjectProps;
}

export function TabContent({ selectedTab, project }: Props) {
  const Component = tabs[selectedTab];
  return <Component project={project} />;
}

const tabs = {
  overview: Overview,
  "privacy-policy": PrivacyPolicy,
};
export type Tabs = keyof typeof tabs;
