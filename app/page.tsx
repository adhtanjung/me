import { ArrowIcon } from "components/icons";
import { about, avatar, bio, name } from "lib/info";
import Image from "next/image";

export const revalidate = 60;

export default async function HomePage() {
	return (
		<section>
			<h1 className="font-bold text-3xl font-serif">{name}</h1>
			<p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
				{about()}
			</p>
			<div className="flex items-start md:items-center my-8 flex-col md:flex-row">
				<Image
					alt={name}
					className="rounded-full grayscale"
					src={avatar}
					placeholder="blur"
					width={100}
					priority
				/>
				<div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400"></div>
			</div>
			<p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
				{bio()}
			</p>
			<ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
				<li>
					<a
						className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
						rel="noopener noreferrer"
						target="_blank"
						href="https://twitter.com/adhitanjung_"
					>
						<ArrowIcon />
						<p className="h-7">follow me on twitter</p>
					</a>
				</li>
				<li>
					<a
						className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
						rel="noopener noreferrer"
						target="_blank"
						href="https://linkedin.com/in/adhitanjung"
					>
						<ArrowIcon />
						<p className="h-7">message me on linkedin</p>
					</a>
				</li>
			</ul>
		</section>
	);
}
