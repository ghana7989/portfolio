import { IconTypes } from 'solid-icons';
import type { Component } from 'solid-js';

interface SkillCardProps {
	title: string;
	skills: string[];
	icon: IconTypes;
}

const SkillCard: Component<SkillCardProps> = (props) => {
	return (
		<div class='w-full md:w-6/12 lg:w-4/12 px-4 text-center'>
			<div class='relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-8 shadow-lg rounded-lg border border-slate-300 overflow-hidden'>
				<div class='flex-auto'>
					<div class='text-white p-3 text-center inline-flex flex-col items-center justify-center w-full mb-4 shadow  bg-primary'>
						<props.icon
							class='drop-shadow-md text-4xl fab fa-html5'
							aria-hidden='true'
						/>
						<h6 class='drop-shadow-md text-white text-xl font-bold '>
							{props.title}
						</h6>
					</div>
					<div class='mt-2 mb-4 text-base-300'>
						<ul>
							{props.skills.map((skill) => {
								return <li class='font-semibold'>{skill}</li>;
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillCard;
