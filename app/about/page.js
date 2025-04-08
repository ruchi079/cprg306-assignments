export default function AboutPage() {
    return (
      <section className="max-w-3xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
  
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          I’m Ruchi Panseriya, a dedicated and curious web developer with a passion for crafting elegant, accessible, and responsive web interfaces. I enjoy turning complex problems into simple, beautiful solutions.
        </p>
  
        <h3 className="text-2xl font-semibold mt-8 mb-4">Education</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Diploma in Web Development – Southern Alberta Institute of Technology (SAIT)</li>
          <li>Bachelor’s in Computer Science – Gujarat University</li>
        </ul>
  
        <h3 className="text-2xl font-semibold mt-8 mb-4">Skills</h3>
        <div className="flex flex-wrap gap-3 text-sm">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Git', 'Node.js'].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-white rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
  
        <h3 className="text-2xl font-semibold mt-8 mb-4">Experience</h3>
        <p className="text-gray-700 dark:text-gray-300">
          I’ve worked on a variety of academic and personal projects including e-commerce websites, portfolio sites, and APIs. I enjoy collaborating with teams and solving user-centric problems.
        </p>
      </section>
    );
  }
  