import { ProjectProps } from "@/types/project";
import { Overview } from "./Overview";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { TermsOfUse } from "./TermsOfUse";
import { AboutDevelopment } from "./AboutDevelopment";

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
  "terms-of-use": TermsOfUse,
  "about-development": AboutDevelopment,
};
export type Tabs = keyof typeof tabs;
