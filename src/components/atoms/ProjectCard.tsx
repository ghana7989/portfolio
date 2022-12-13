import { Component, For, Show } from 'solid-js';

interface ProjectCardProps {
	title: string;
	projectImage: string;
	description: string;
	techUsed: string[];
	demoAccount?: {
		email: string;
		password: string;
	};
	liveLink?: string;
	githubLink?: string;
}

const ProjectCard: Component<ProjectCardProps> = (props) => {
	return (
		<div class='flex justify-center w-full md:w-1/2 lg:w-4/12 px-4 mb-4'>
			<div class='flex flex-col bg-neutral rounded-lg shadow overflow-hidden'>
				<div
					class='h-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden text-white'
					title={`${props.title}`}
					style={`background-image: url(${props.projectImage});`}
				></div>
				<div class='flex flex-col p-4 h-full'>
					<div class='flex-1'>
						<div class='px-6 py-4'>
							<div class='text-white font-bold text-xl mb-2 border-b border-slate-200 pb-4'>
								{props.title}
							</div>
							<p class='text-white text-base'>{props.description}</p>
						</div>
						<div class='px-6 pt-4 pb-2 flex flex-wrap space-x-1'>
							<h1 class='font-bold text-slate-400 text-base'>Tech used:</h1>
							<For each={props.techUsed}>
								{(tech, i) => {
									if (i() === props.techUsed.length - 1)
										return <span>{tech}</span>;
									return <span>{tech},</span>;
								}}
							</For>
						</div>
						<div class='px-6 pt-4 pb-2 flex flex-col space-x-1'>
							<Show when={props.demoAccount} fallback={null}>
								<h1 class='font-bold text-slate-400 text-base'>
									Demo Account:
								</h1>
								<span class='text-slate-400'>
									Email: {props.demoAccount?.email}
								</span>
								<span class='text-slate-400'>
									Password: {props.demoAccount?.password}
								</span>
							</Show>
						</div>
					</div>
					<div class='px-6 py-4 flex space-x-1'>
						{props.liveLink && (
							<a
								href={props.liveLink}
								target='_blank'
								rel='noreferrer'
								class='cursor-pointer bg-black hover:bg-gray-100 text-primary font-semibold py-2 px-4   rounded shadow'
							>
								See Live
							</a>
						)}
						{props.githubLink && (
							<a
								href={props.githubLink}
								target='_blank'
								rel='noreferrer'
								class='cursor-pointer bg-primary hover:bg-primary-focus text-black font-semibold py-2 px-4  rounded shadow'
							>
								Source Code
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
