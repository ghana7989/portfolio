import { Component } from 'solid-js';
import {
	FaSolidCode,
	FaBrandsHtml5,
	FaSolidScrewdriverWrench,
} from 'solid-icons/fa';
import SkillCard from './atoms/SkillCard';
const Skills: Component = () => {
	return (
		<section class='py-10 h-full'>
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
							'CSS',
							'JavaScript',
							'React',
							'Redux',
							'TailwindCSS',
							'Bootstrap',
							'jQuery',
							'OAuth',
						]}
					/>
					<SkillCard
						title='Back End'
						icon={FaSolidCode}
						skills={[
							'Node.js',
							'Express',
							'PostgreSQL',
							'MongoDB',
							'Mongoose',
							'Sequelize',
							'RESTful APIs',
							'GraphQL',
							'Apollo',
							'Socket.io',
						]}
					/>
					<SkillCard
						title='Tools'
						icon={FaSolidScrewdriverWrench}
						skills={[
							'Git',
							'GitHub',
							'Heroku',
							'Netlify',
							'VS Code',
							'Postman',
							'Figma',
							'Adobe XD',
							'Adobe Photoshop',
							'Adobe Illustrator',
						]}
					/>
				</div>
			</div>
		</section>
	);
};

export default Skills;
