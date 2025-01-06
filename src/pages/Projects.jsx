// Import React hooks: `useState` for managing component state, and `useEffect` for handling side effects
import { useEffect, useState } from "react";

// Define the `Projects` component
const Projects = () => {
  // `repos` is a state variable that will hold the list of repositories
  // `setRepos` is the function to update the `repos` state
  const [repos, setRepos] = useState([]);

  // `loading` is a state variable to track whether the data is being loaded
  // `setLoading` is the function to update the `loading` state
  const [loading, setLoading] = useState(true);

  // `useEffect` is used to fetch data when the component is mounted
  useEffect(() => {
    // Fetch data from the GitHub API for the user "Pilotjsauce"
    fetch("https://api.github.com/users/Pilotjsauce/repos")
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => {
        setRepos(data); // Update the `repos` state with the fetched data
        setLoading(false); // Set `loading` to false since data is now loaded
      })
      .catch((error) => console.error("Error fetching repos:", error)); // Log any errors that occur during fetching
  }, []); // Empty dependency array ensures this effect runs only once, like `componentDidMount`

  // If the data is still loading, show a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render the list of projects once the data is loaded
  return (
    // Main container for the Projects page
    <div className="p-6 max-w-4xl mx-auto bg-gray-100">
      {/* Page title */}
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <li></li>
      {/* List container for the projects */}
      <ul className="space-y-4">
        {/* Map over the `repos` array to render a list item for each repository */}
        {repos.map((repo) => (
          <li
            key={repo.id} // Unique key to help React identify and track list items
            className="p-4 border rounded-lg shadow hover:shadow-lg" // Styling for each project
          >
            <li></li>
            {/* Link to the repository's GitHub page */}
            <a
              href={repo.html_url} // URL for the GitHub repository
              target="_blank" // Open the link in a new tab
              rel="noopener noreferrer" // Prevent potential security risks with new tab links
            >
              {repo.name} {/* Display the repository name */}
            </a>

            {/* Description of the repository */}
            <p className="text-gray-600 mt-1">{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the `Projects` component so it can be used in other parts of the application
export default Projects;