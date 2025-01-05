const About = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <img
          src="src/assets/profile.jpg"
          alt="Your Profile"
          className="rounded-full mb-4 shadow-lg"
          style={{
            width: '500px', // Enforce width
            height: '550px', // Enforce height
            objectFit: 'cover', // Maintain aspect ratio
          }}
        />
        <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About Me</h1>
          <p className="text-lg text-gray-600 leading-7">
            I am a driven individual who is passionate about life and the
            opportunities presented to me. I value hard work, the knowledge of
            what I know, and the ability to learn quickly. If given an
            opportunity, I will continue to grow in the workplace. After my Air
            Force service, I plan on using this experience to gain employment in
            the field of Project Management or Strategic Planning for an
            organization. I have experience in Aerospace, Defense, Law
            Enforcement, Logistics, Federal, and in Business Analytics.
          </p>
        </div>
      </div>
    );
  };
  
  export default About;