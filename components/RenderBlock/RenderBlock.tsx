import { BlockNodeStrapi } from "@/types/project";
import { ReactNode } from "react";

interface Props {
  block: BlockNodeStrapi;
  key?: string;
}

export function RenderBlock({ block, key }: Props): JSX.Element {
  switch (block.type) {
    case "heading":
      return renderHeading({
        level: block.level ?? 1,
        key,
        children: block.children?.map((child, i) =>
          RenderBlock({ block: child, key: `${key}-c${i}` })
        ),
      });
    case "paragraph":
      return (
        <p key={key}>
          {block.children?.map((child, i) =>
            RenderBlock({ block: child, key: `${key}-c${i}` })
          )}
        </p>
      );
    case "text":
      if (block.bold) {
        return (
          <strong key={key} className="font-bold">
            {block.text}
          </strong>
        );
      }
      if (block.italic) {
        return (
          <strong key={key} className="italic font-normal">
            {block.text}
          </strong>
        );
      }

      if (block.italic && block.bold) {
        return (
          <strong key={key} className="italic font-bold">
            {block.text}
          </strong>
        );
      }
      return <span>{block.text}</span>;
    default:
      return <div key={key} />;
  }
}

interface RenderHeading {
  children: ReactNode;
  level: number;
  key?: string;
}
function renderHeading({ children, level, key }: RenderHeading) {
  switch (level) {
    case 1:
      return (
        <h1 key={key} className="font-bold text-5xl">
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 key={key} className="font-bold text-3xl">
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 key={key} className="font-bold text-xl">
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 key={key} className="font-bold">
          {children}
        </h4>
      );
    case 5:
      return <h5 key={key}>{children}</h5>;
    case 6:
      return <h6 key={key}>{children}</h6>;
    default:
      return <span key={key}>{children}</span>;
  }
}
