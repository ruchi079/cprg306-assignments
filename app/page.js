import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I’m Ruchi 👋</h1>
      <p className="text-lg md:text-xl max-w-xl text-gray-600 dark:text-gray-300 mb-6">
        I’m a passionate web developer focused on building clean and user-friendly web experiences using modern tools like React, Tailwind CSS, and Next.js.
      </p>
      <Link
        href="/projects"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        View My Projects
      </Link>
    </section>
  );
}
