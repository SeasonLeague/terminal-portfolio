import React from "react";

export default function Contact() {
	const contacts = [
		{
			text: "Phone number",
			value: "+2349127884963",
			href: "tel:09127884963",
		},
		{
			text: "Email",
			value: "verbosetwomillion@gmail.com",
			href: "mailto:verbosetwomillion@gmail.com",
		},
	];
	return (
		<div className="w-11/12 mx-auto">
			{contacts.map(({ text, value, href }, index) => {
				return (
					<div className="flex items-center gap-20  mt-3" key={index}>
						<h1 className="text-yellow-200 w-36">{text}</h1>
						<a href={href} className="flex-1 underline text-blue-300 ">
							{value}
						</a>
					</div>
				);
			})}
		</div>
	);
}
