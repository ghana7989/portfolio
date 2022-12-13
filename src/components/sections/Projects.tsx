import type { Component } from 'solid-js';
import ProjectCard from '../atoms/ProjectCard';

const data = [
	{
		title: 'Shoot Code | Realtime Code Editor',
		projectImage: 'https://i.ibb.co/s9GCRhz/shoot-code-project.png',
		description:
			'Shoot Code is a realtime code editor that allows users to create a room, invite other users, and code together, realtime room count with usernames. It is realtime as it uses websockets over http/s and is deployed on Render',
		techUsed: ['React', 'Typescript', 'Node.js', 'Express', 'Socket.io'],
		liveLink: 'https://shoo-code.onrender.com/',
		githubLink: 'https://github.com/ghana7989/shoot-code',
	},
	{
		title: 'Daisy Marketplace | NFT Marketplace',
		projectImage: 'https://i.ibb.co/TqrDT23/NFT-MARKET-PLACE.png',
		description:
			'Daisy Marketplace is an NFT Marketplace runs on Goerli Testnet, One can create and list NFTs, purchase them and maintain a collection, Authentication enabled and is deployed on Vercel',
		techUsed: [
			'Solidity',
			'React',
			'NextJS',
			'Typescript',
			'Ethers.js',
			'Truffle',
			'TailwindCSS',
		],
		liveLink: 'https://nft-marketplace-one-phi.vercel.app/nft/create',
		githubLink: 'https://github.com/ghana7989/nft-marketplace',
	},
];
const Projects: Component = () => {
	return (
		<section id='projects' class='relative py-16 h-full bg-base-300'>
			<div class='container mx-auto px-2'>
				<div class='flex flex-wrap justify-center text-center mb-10'>
					<div class='w-full lg:w-6/12 px-4'>
						<h1 class='text-5xl font-bold text-center  '>My Projects</h1>
					</div>
				</div>
				<div class='flex flex-wrap'>
					{data.map((_, i) => {
						return <ProjectCard {...data[i]} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Projects;
