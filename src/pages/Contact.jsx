const Contact = () => {
    return (
      <div className="p-6 max-w-3xl mx-auto bg-gray-100 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Me</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <div></div>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <div></div>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <div></div>
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Submit
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;