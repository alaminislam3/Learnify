import React from "react";

const Resources = () => {
  return (
    <section className="bg-sky-50 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-sky-800 mb-8">
          📚 Free Learning Resources
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Resource 1 */}
          <div className="card bg-white shadow-md p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-2 text-sky-700">
              JavaScript Info
            </h3>
            <p className="text-gray-600 mb-4">
              A modern and detailed guide to JavaScript — from beginner to
              advanced.
            </p>
            <a
              href="https://javascript.info"
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Visit
            </a>
          </div>

          {/* Resource 2 */}
          <div className="card bg-white shadow-md p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-2 text-sky-700">
              freeCodeCamp
            </h3>
            <p className="text-gray-600 mb-4">
              Learn to code for free with projects, tutorials, and certificates.
            </p>
            <a
              href="https://www.freecodecamp.org"
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Visit
            </a>
          </div>

          {/* Resource 3 */}
          <div className="card bg-white shadow-md p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-2 text-sky-700">
              MDN Web Docs
            </h3>
            <p className="text-gray-600 mb-4">
              Official documentation for HTML, CSS, and JavaScript from Mozilla.
            </p>
            <a
              href="https://developer.mozilla.org"
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
