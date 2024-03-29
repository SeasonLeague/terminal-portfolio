import ProgressBar from "../ProgressBar";
import {
	SiTensorflow,
	SiPython,
	SiGithub,
	SiScikitlearn,
	SiJavascript,
} from "react-icons/si";

export default function Skills() {
	const listOfSkills = [
		{
			Icon: SiGithub,
			barWidth: "w-90%",
			percentageValue: "90%",
			text: "Github",
		},
		{
			Icon: SiScikitlearn,
			barWidth: "w-65%",
			percentageValue: "65%",
			text: "Tailwindcss",
		},
		{
			Icon: SiJavascript,
			barWidth: "w-40%",
			percentageValue: "40%",
			text: "JavaScript",
		},
		{
			Icon: SiTensorflow,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "TensorFlow",
		},
		{
			Icon: SiPython,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "Python",
		},
	];

	return (
		<div>
			{listOfSkills.map(({ Icon, barWidth, percentageValue, text }, index) => {
				return (
					<ProgressBar
						Icon={Icon}
						barWidth={barWidth}
						percentageValue={percentageValue}
						key={index}
						text={text}
					/>
				);
			})}
		</div>
	);
}
