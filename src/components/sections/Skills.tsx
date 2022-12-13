import { Component } from 'solid-js';
import {
	FaSolidCode,
	FaBrandsHtml5,
	FaSolidScrewdriverWrench,
	FaSolidFileContract,
} from 'solid-icons/fa';
import SkillCard from '../atoms/SkillCard';

const Skills: Component = () => {
	return (
		<section id='skills' class='py-16 h-full'>
			<div class='container mx-auto px-2'>
				<div class='flex flex-wrap justify-center text-center mb-10'>
					<div class='w-full lg:w-6/12 px-4 '>
						<h1 class='text-5xl font-bold text-center  '>My Skills</h1>
					</div>
				</div>
				<div class='flex flex-wrap'>
					<SkillCard
						title='Front End'
						icon={FaBrandsHtml5}
						skills={[
							'HTML',
							'CSS (Sass)',
							'JavaScript',
							'React',
							'NextJS',
							'React Native',
							'TypeScript',
							'Redux',
							'TailwindCSS',
							'OAuth',
						]}
					/>
					<SkillCard
						title='Back End'
						icon={FaSolidCode}
						skills={[
							'Node.js',
							'Go (Gin)',
							'Express / fastify',
							'NestJS',
							'MongoDB',
							'Prisma',
							'RESTful APIs',
							'GraphQL',
							'Apollo',
							'Socket.io',
							'Docker',
						]}
					/>
					<SkillCard
						icon={FaSolidFileContract}
						title='Blockchain'
						skills={[
							'EVM',
							'Solidity',
							"NFT'S",
							'Ethers.js',
							'Truffle',
							'Ganache',
							'Metamask',
							'Polygon',
						]}
					/>
				</div>
			</div>
		</section>
	);
};

export default Skills;
