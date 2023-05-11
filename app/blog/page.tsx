// "use client";
import type { Metadata } from "next";
import axios from "axios";

export const metadata: Metadata = {
	title: "Blog",
	description: "Read my thoughts on software development",
};

const fetchData = async () => {
	const data: any = await axios.get(
		"https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@adhtanjung"
	);
	return data.data.items;
};
export default async function BlogPage() {
	const data = await fetchData();
	return (
		<section>
			<h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
			{data.map((blog: any) => {
				return (
					<article className="container bg-transparent shadow-2xl rounded-2xl p-5">
						<h1 className="font-bold text-white-500">{blog.title}</h1>
						<h6 className="text-sm text-gray-300 mb-5">{blog.pubDate}</h6>
						<a
							href={blog.link}
							className="rounded-lg py-2 px-4 text-center text-white bg-transparent border-solid border-2 hover:bg-gray-900 border-white"
							target={"_blank"}
						>
							Read
						</a>
					</article>
				);
			})}
		</section>
	);
}
