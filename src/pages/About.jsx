const About = () => {
    return (
      // Main container div for the About page
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Page title */}
        <h1
          className="text-3xl font-bold text-gray-800 mb-4"
          style={{ color: 'beige' }} // Inline style overrides the text color
        >
          About Me
        </h1>
  
        {/* Profile image */}
        <img
          src="src/assets/profile.jpg" // Path to the profile image
          alt="Your Profile" // Alt text for accessibility
          className="rounded-full mb-4 shadow-lg" // Tailwind CSS classes for styling
          style={{
            width: '350px', // Set fixed width
            height: '425px', // Set fixed height
            objectFit: 'cover', // Ensure the image maintains its aspect ratio while filling the container
          }}
        />
  
        {/* Container for the descriptive text */}
        <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
          <p
            className="text-lg text-gray-600 leading-7"
            style={{ color: 'white' }} // Inline style overrides the text color
          >
            {/* About content */}
            I am a driven individual who is passionate about life and the
            opportunities presented to me. After my Air Force service, I used my
            experience to gain employment in the field of Project Management and
            Strategic Planning for an as a contractor for the Dept of the Air
            Force. I have experience in Aerospace, Defense, Law Enforcement,
            Logistics, Federal, and in Business Analytics.
          </p>
        </div>
      </div>
    );
  };
  
  // Export the `About` component so it can be used in other parts of the application
  export default About;