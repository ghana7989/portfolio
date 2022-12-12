import type { Component } from 'solid-js';

const Hero: Component = () => {
	return (
		<div class='hero min-h-screen bg-base-200'>
			<div class='hero-content flex-col lg:flex-row-reverse lg:gap-44'>
				<img
					src='https://avatars.githubusercontent.com/u/65382745?s=400&u=911cf66d6732a7b582283e2171191f6052f0b595&v=4'
					class='max-w-sm rounded-lg shadow-2xl'
				/>
				<div class='text-center'>
					<h1 class='text-5xl font-bold '>Hi there! I'm Pavan</h1>
					<p class='py-6'>
						I'm a Full Stack Web Developer based in Hyderabad, India.
					</p>
					<div class='flex justify-center gap-10'>
						<a href='#contact-me'>
							<button class='btn btn-primary font-bold  text-lg '>
								Let's Talk
							</button>
						</a>
						<button class='btn btn-primary btn-outline font-bold  text-lg '>
							My Projects
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
