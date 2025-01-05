const WorkHistory = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto min-h-screen bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Work History</h1>
      <p className="text-lg text-gray-600 leading-7">
        I have worked in various roles including:
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Aerospace Engineering</li>
          <li>Defense Logistics</li>
          <li>Law Enforcement Analytics</li>
          <li>Business Planning and Project Management</li>
        </ul>
      </p>
      <a
        href="/assets/resume.pdf"
        download
        className="block mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Download Resume
      </a>
    </div>
  );
};

export default WorkHistory;