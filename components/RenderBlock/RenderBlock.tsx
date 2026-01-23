import { BlockNodeStrapi } from "@/types/project";
import Image from "next/image";
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
          RenderBlock({ block: child, key: `${key}-c${i}` }),
        ),
      });
    case "paragraph":
      return (
        <p key={key}>
          {block.children?.map((child, i) =>
            RenderBlock({ block: child, key: `${key}-c${i}` }),
          )}
        </p>
      );
    case "link":
      return (
        <a
          key={key}
          href={block?.url}
          target="_blank"
          rel="noreferer noopener"
          className="underline text-blue-500"
        >
          {block.children?.map((child, i) =>
            RenderBlock({ block: child, key: `${key}-a${i}` }),
          )}
        </a>
      );

    case "image":
      if (!block.image) {
        return <div key={key} />;
      }

      return (
        <div key={key} className="my-4">
          <Image
            src={block.image.url.replace(
              "http://192.168.10.205",
              "https://strapi.edevapps.com.br",
            )}
            alt={block.image.alternativeText || ""}
            width={block.image.width ?? 800}
            height={block.image.height ?? 450}
            className="rounded-lg"
          />
        </div>
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

      return <span key={`s${key}`}>{block.text}</span>;
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
