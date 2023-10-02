import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Input} from "@nextui-org/input";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg lg:max-w-full text-center justify-center">
				<h1 className={title()}>Artificial&nbsp;</h1>
				<h1 className={title({ color: "pink" })}>Intelligence&nbsp;</h1>
				<h1 className={title()}>Society</h1>
				<br />

				<h2 className={subtitle({ class: "mt-4" })}>
					Bennett University
				</h2>
			</div>

			<div className="flex w-1/4">
				<Input type="email"
					   label="Subscribe to our learning community"
				/>
			</div>

			<div className="mt-8">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, dolore doloribus enim eveniet facere harum hic ipsam iusto magni minus molestiae molestias nemo nobis numquam pariatur quod similique. Dolore, non?</p>
			</div>
		</section>
	);
}
