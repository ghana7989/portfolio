import type { Component } from 'solid-js';

const AboutMe: Component = () => {
	return (
		<div class='hero min-h-max bg-base-300 py-32' id='about-me'>
			<div class='hero-content flex-col lg:flex-row lg:gap-6'>
				<img
					src='https://www.raulwebdev.com/static/media/memoji.ce215bb0350b737669fb.png'
					class='max-w-sm rounded-full shadow-2xl'
				/>
				<div class='flex flex-col gap-10 md:gap-5'>
					<h1 class='text-5xl font-bold text-center '>About Me</h1>
					{/* make this p tag as it is in card */}
					<p class='py-6 bg-base-100 px-6'>
						My name is Pavan and I am a talented full stack developer. In my
						free time, I enjoy listening to music and coding, I have always had
						a love for music and find that it helps to relax and inspire me in
						my work. I initially started coding as a hobby, but quickly realized
						that it was something I was truly passionate about and decided to
						pursue a career change. It was a big decision, but I am excited to
						be able to do what I love and help others in the process.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
