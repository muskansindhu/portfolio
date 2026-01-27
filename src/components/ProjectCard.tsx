import { Badge } from "@/components/ui/Badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Project } from "@/lib/schemas";
import { generateSlug } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import Icon from "./Icon";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const { name, description, image, tags, links } = project;
  const slug = generateSlug(name);

  return (
    <Card className="flex h-full flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <Link href={`/projects/${slug}`} className="flex flex-1 flex-col">
        <CardHeader>
          {image && (
            <Image
              src={image}
              alt={name}
              width={500}
              height={300}
              className="h-40 w-full object-cover object-top"
            />
          )}
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <CardTitle>{name}</CardTitle>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </CardContent>
      </Link>
      <CardFooter className="flex flex-col items-start justify-between gap-4">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.toSorted().map((tag) => (
              <Badge
                key={tag}
                className="px-1 py-0 text-[10px]"
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links.toSorted().map((link, idx) => (
              <Link key={idx} href={link.href} target="_blank" className="relative z-10">
                <Badge className="flex gap-2 px-2 py-1 text-[10px] hover:bg-primary/80">
                  <Icon name={link.icon} className="size-3" />
                  {link.name}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

