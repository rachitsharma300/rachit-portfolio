export default function ProjectCard({ title, desc, tech, githubLink, liveLink }) {
  return (
    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item) => (
          <span key={item} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={githubLink} target="_blank" className="hover:underline">Code</a>
        {liveLink && <a href={liveLink} target="_blank" className="hover:underline">Live Demo</a>}
      </div>
    </div>
  );
}