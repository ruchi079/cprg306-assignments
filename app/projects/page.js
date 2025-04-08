import Link from "next/link";

const projects = [
  {
    title: "Web-Development",
    description:
      "A full-featured e-commerce site for beauty services and products.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    link: "https://github.com/ruchi079/cprg-306",
  },
  {
    title: "App-clone",
    description:
      "Python-based terminal app for tracking grocery inventory and sales.",
    tech: ["Python"],
    link: "https://github.com/ruchi079/app-clone",
  },
  {
    title: "Web-ruchi",
    description:
      "A frontend Instagram login clone connected to a custom Node.js API.",
    tech: ["Next.js", "Node.js", "Express"],
    link: "https://github.com/ruchi079/web-ruchi",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-white px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              href={project.link}
              target="_blank"
              className="text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              View Project →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
