import React from "react";

const Resources = () => {
  // তুমি এই public ফোল্ডারে ইমেজগুলো রাখবে
  const resources = [
    {
      title: "JavaScript Info",
      description: "A modern and detailed guide to JavaScript — from beginner to advanced.",
      url: "https://javascript.info",
      imgSrc: "/JavaScript-logo.png", // public folder এর img path (যেমন public/images/js-info.png)
    },
    {
      title: "freeCodeCamp",
      description: "Learn to code for free with projects, tutorials, and certificates.",
      url: "https://www.freecodecamp.org",
      imgSrc: "/FreeCodeCamp_logo.png",
    },
    {
      title: "MDN Web Docs",
      description: "Official documentation for HTML, CSS, and JavaScript from Mozilla.",
      url: "https://developer.mozilla.org",
      imgSrc: "/mdn-logo-png_seeklogo-314291.png",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4">
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-12">
          📚 Free Learning Resources
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map(({ title, description, url, imgSrc }, index) => (
            <div
              key={index}
              className="card bg-white dark:bg-gray-800 shadow-md p-6 border border-gray-200 dark:border-gray-700 rounded-xl flex flex-col items-center"
            >
              <img
                src={imgSrc}
                alt={title}
                className="w-full h-40 object-contain rounded-md mb-5"
              />
              <h3 className="text-xl font-semibold mb-2 text-sky-700">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm bg-[#36b1a0] dark:bg-[#134E4A] px-6 py-2 rounded"
              >
                Visit
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
