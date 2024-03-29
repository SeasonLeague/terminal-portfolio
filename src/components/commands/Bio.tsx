import { GoVerified } from "react-icons/go";
import { SiGithub, SiWhatsapp, SiYoutube } from "react-icons/si";


export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/SeasonLeague",
			text: "@SeasonLeague",
		},
		{
			title: "Youtube",
			Icon: SiYoutube,
			href: "https://www.youtube.com/channel/UCpVAYwPETdZfAmOURYHmcmw",
			text: "@PythonExploratorium",
		},
		{
			title: "Whatsapp",
			Icon: SiWhatsapp,
			href: "https://wa.me/2349127884963",
			text: "@WhatsApp",
		},
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="https://avatars.githubusercontent.com/u/111581268?v=4"
					alt="Godspower Maurice Pics"
					className="w-40 h-40 rounded-full border-2 border-yellow-200"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Godspower Maurice</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">Joined the world 22 years ago.</p>
				</div>
			</div>
			<p>
				Hi there, I am a Data Scientist/Software Engineer. Passionate about Data
				related topics and Machine Learning development. I like to learn new things related to coding and sharing it
				to the internet through my hashnode or my YouTube channel.
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
