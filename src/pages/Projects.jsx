import { useEffect, useState } from "react";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Pilotjsauce/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Projects</h1>
      <ul className="space-y-4">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="p-4 border rounded-lg shadow hover:shadow-lg"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {repo.name}
            </a>
            <p className="text-gray-600 mt-1">{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;