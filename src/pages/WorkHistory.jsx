const WorkHistory = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto min-h-screen bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Work History</h1>
      <p className="text-lg text-gray-600 leading-7">
        I have worked in various roles including:
        <ul className="list-disc list-inside mt-4 space-y-2" style={{ color: 'Red' }}>
          <li></li>
          <li>Project Management</li>
          <li></li>
          <li>Aerospace & Defense</li>
          <li></li>
          <li>Law Enforcement</li>
          <li></li>
          <li>Business Planning and Project Management</li>
          <li></li>
          <li>Program Management</li>
          <li></li>
          <li>Microsoft Designer</li>
          <li></li>
          <li>Admin</li>
          <li></li>
          <li>Ski Resort Management</li>
          <li></li>
          <li>Tactical Aircraft Maintenance</li>
          <li></li>
        </ul>
      </p>
      <a
        href="src/assets/JS_Resume.pdf"
        download
      >
        Download Resume
      </a>
    </div>
  );
};

export default WorkHistory;