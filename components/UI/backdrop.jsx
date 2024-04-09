import React from "react";

const Backdrop = () => {
  return (
    <div className="fixed transform -translate-y-36 top-52 -right-48">
      <div className="relative">
        <span className="inline-block border rounded-full border-cyan-400 w-96 h-96">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="inline-block border-2 border-solid rounded-full border-cyan-400 w-80 h-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="inline-block w-64 h-64 border-2 border-gray-200 border-solid rounded-full">
                  {" "}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-block w-40 h-40 border-2 border-gray-200 border-solid rounded-full">
                      {" "}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="inline-block w-20 h-20 border-2 border-blue-400 border-solid rounded-full">
                          {" "}
                        </span>
                      </div>
                    </span>
                  </div>
                </span>
              </div>
            </span>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Backdrop;
