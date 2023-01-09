import React, { useState } from "react";
const Accordion = () => {
  return (
    <>
      <details>
        <summary className="question py-3 px-4 cursor-pointer select-none w-full outline-none">
          FAQ
        </summary>
        <main className="flex justify-center items-center p-4 w-full bg-gradient-to-r from-green-100 to-blue-100">
          <div className="bg-white w-full sm:w-1/2 lg:w-96 border border-gray-200 divide-y divide-gray-200">
            <details>
              <summary className="question py-3 px-4 cursor-pointer select-none w-full outline-none">
                Question 1
              </summary>
              <p className="pt-1 pb-3 px-4">
                With the HTML5 <code className="text-sm text-red-500">details</code>{" "}
                element and some Tailwind for showcase.
              </p>
            </details>
            <details>
              <summary className="question py-3 px-4 cursor-pointer select-none w-full">
                Question 2
              </summary>
              <p className="pt-1 pb-3 px-4">
                Of course. It's yours to use wherever and whenever you like.
              </p>
            </details>
          </div>
        </main>
      </details>
    </>
  );
};

export default Accordion;
