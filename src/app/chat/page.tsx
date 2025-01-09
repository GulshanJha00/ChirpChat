import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full bg-[#242038] p-8 flex justify-center items-center">
      <div className="w-full max-w-4xl h-[80vh] bg-[#F7ECE1] rounded-lg shadow-lg overflow-hidden">
        <div className="h-[90%] p-4 overflow-y-scroll space-y-4">
          {/* User (Receiver) message */}
          <div className="flex justify-start">
            <div className="bg-[#CAC4CE] p-3 rounded-lg max-w-fit text-white shadow-md">
              <h1 className="font-semibold">User:</h1>
              <p className="text-lg">Message will be here</p>
            </div>
          </div>

          {/* Sender message */}
          <div className="flex justify-end">
            <div className="bg-[#8D86C9] p-3 rounded-lg max-w-fit text-white shadow-md">
              <h1 className="font-semibold">Sender:</h1>
              <p className="text-lg">Message will be here</p>
            </div>
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-[#242038] p-4 flex justify-between items-center border-t-2 border-[#8D86C9]">
          <input
            type="text"
            className="p-3 w-full rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#725AC1] shadow-md"
            placeholder="Enter Message Here"
          />
          <button className="ml-4 px-6 py-2 bg-[#725AC1] text-[#F7ECE1] rounded-lg hover:bg-[#8D86C9] transition duration-200">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
