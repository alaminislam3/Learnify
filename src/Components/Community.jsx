import React from "react";

const Community = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 ">
      <div className=" mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Banner Image */}
        <img
          src="https://i.ibb.co/fzZtdqBh/brett-jordan-t-WX-ho-328k-unsplash.jpg"
          alt="Join Community"
          className="w-full md:w-1/2 rounded-lg shadow-md"
        />

        {/* Text Content */}
        <div className="text-center md:text-left space-y-4 md:w-1/2">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Join Our Learning Community
          </h2>
          <p className="text-black dark:text-white">
            Connect with passionate learners, share your knowledge, ask
            questions, and grow together with us!
          </p>
          <a
            href="https://www.facebook.com/groups/your-group-link"
            target="_blank"
            rel="noreferrer"
            className="btn bg-[#36b1a0] dark:bg-[#134E4A]"
          >
            Join Our Facebook Group
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
