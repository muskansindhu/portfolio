import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Icon from "@/components/Icon";
import { getAllProjects, generateSlug, getProjectBySlug } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
    const projects = getAllProjects();
    return projects.map((project) => ({
        slug: generateSlug(project.name),
    }));
}

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = getProjectBySlug(params.slug);

    if (!project) {
        notFound();
    }

    const { name, description, longDescription, features, image, tags, links } =
        project;

    return (
        <article className="mt-8 flex flex-col gap-8 pb-16">
            {/* Back Navigation */}
            <Link
                href="/projects"
                className="link flex items-center gap-2 text-sm font-medium"
            >
                <ArrowLeft className="size-4" />
                Back to projects
            </Link>

            {/* 1. Project Image */}
            {image && (
                <div className="overflow-hidden rounded-xl border shadow-lg">
                    <Image
                        src={image}
                        alt={name}
                        width={1200}
                        height={600}
                        className="h-auto w-full object-cover"
                        priority
                    />
                </div>
            )}

            {/* 2. Project Title */}
            <h1 className="title text-4xl sm:text-5xl">{name}</h1>

            {/* 3. One-liner Description */}
            <p className="text-lg text-muted-foreground sm:text-xl">
                {description}
            </p>

            {/* 4. Technology Tags */}
            {tags && tags.length > 0 && (
                <div className="space-y-2">
                    <h2 className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
                        Technologies
                    </h2>
                    <div className="flex flex-wrap gap-1.5">
                        {tags.toSorted().map((tag) => (
                            <Badge
                                key={tag}
                                variant="secondary"
                                className="px-2 py-0.5 text-xs"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
            )}

            {/* 5. Action Links */}
            {links && links.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {links.toSorted().map((link, idx) => (
                        <Link href={link.href} key={idx} target="_blank">
                            <Button variant="outline" size="sm" className="gap-2 text-xs">
                                <Icon name={link.icon} className="size-3.5" />
                                {link.name}
                            </Button>
                        </Link>
                    ))}
                </div>
            )}

            {/* 6. Long Description (2-liner paragraph) */}
            {longDescription && (
                <p className="text-base leading-relaxed text-foreground/90">
                    {longDescription}
                </p>
            )}

            {/* 7. Features (Bullet Points) */}
            {features && features.length > 0 && (
                <ul className="space-y-2">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-foreground/90">
                            <span className="text-primary">•</span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            )}
        </article>
    );
}
