import {
	TwitterIcon,
	ArrowIcon,
	GitHubIcon,
	MediumIcon,
} from "../../components/icons";

export default function AboutPage() {
	return (
		<section>
			<h1 className="font-bold text-3xl font-serif">About Me</h1>
			<p className="my-5 text-neutral-800 dark:text-neutral-200">
				Hey, I'm Adhi.
			</p>
			<div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
				<p>
					A passionate full-stack engineer specializing in web development. I
					have experience in building seamless user experiences and
					collaborating with cross-functional teams to deliver exceptional
					results.
				</p>
				<hr />
				<p>
					I have a strong background in front-end and back-end development, with
					a focus on clean code, performance optimization, and delivering
					high-quality work. I thrive on collaboration and value open
					communication for successful project delivery.
				</p>
				<p>
					I'm <b>actively</b> seeking new opportunities to contribute my skills
					and expertise to exciting projects. If you're looking for a dedicated
					and versatile full-stack engineer, let's connect and make a meaningful
					impact together!{" "}
				</p>
				<p className="mb-8">
					Outside of my 9-5 work, I devote my time to building personal
					portfolios and maintaining a healthy lifestyle through fitness. I am
					constantly learning and staying up-to-date with the latest web
					development technologies and trends.
				</p>
				<div className="flex flex-col gap-2 md:flex-row md:gap-2">
					<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://twitter.com/adhitanjung_"
						className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
					>
						<div className="flex items-center">
							<TwitterIcon />
							<div className="ml-3">Twitter</div>
						</div>
						<ArrowIcon />
					</a>
					<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://github.com/adhtanjung"
						className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
					>
						<div className="flex items-center">
							<GitHubIcon />
							<div className="ml-3">GitHub</div>
						</div>
						<ArrowIcon />
					</a>
					<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://www.medium.com/@adhtanjung"
						className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
					>
						<div className="flex items-center">
							<MediumIcon />
							<div className="ml-3">Medium</div>
						</div>
						<ArrowIcon />
					</a>
				</div>
			</div>
		</section>
	);
}
