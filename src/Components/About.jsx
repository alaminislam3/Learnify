export default function About() {
	return (
		<section className="  py-12 sm:py-16 lg:py-24">
			<div className="container mx-auto px-6 sm:px-6 md:px-12 lg:px-24">
				<div className="grid gap-6 mx-4 sm:grid-cols-12 items-center">
					
					{/* Left Side with Image, Title & Subtitle */}
					<div className="col-span-12 sm:col-span-3 text-center sm:text-left">
						<img
							src="/about us.jpg" // <-- Place your image in public folder as 'about.jpg'
							alt="About"
							className="w-full object-cover"
						/>
						<h3 className="text-3xl font-semibold">About Us</h3>
						<p className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">
							Empowering Learners Everywhere
						</p>
					</div>

					{/* Right Side Timeline */}
					<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
						<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">

							{/* Item 1 */}
							<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
								<h3 className="text-xl font-semibold tracking-wide">Founded with a Purpose</h3>
								<time className="text-xs tracking-wide uppercase dark:text-gray-600">Jan 2022</time>
								<p className="mt-3">
									We started our journey with one mission: to create a space where anyone can
									share their knowledge, learn from experts, and grow their skills without
									barriers.
								</p>
							</div>

							{/* Item 2 */}
							<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
								<h3 className="text-xl font-semibold tracking-wide">Building a Learning Community</h3>
								<time className="text-xs tracking-wide uppercase dark:text-gray-600">Aug 2023</time>
								<p className="mt-3">
									Our platform connects educators, students, and professionals to collaborate,
									share resources, and exchange ideas that lead to real-world impact.
								</p>
							</div>

							{/* Item 3 */}
							<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
								<h3 className="text-xl font-semibold tracking-wide">Innovation in Education</h3>
								<time className="text-xs tracking-wide uppercase dark:text-gray-600">Present</time>
								<p className="mt-3">
									We constantly innovate with interactive tools, live sessions, and a supportive
									community to make learning accessible, engaging, and lifelong for everyone.
								</p>
							</div>

						</div>
					</div>

				</div>
			</div>
		</section>
	);
}
