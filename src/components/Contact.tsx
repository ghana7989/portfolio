import {
	FaBrandsGithub,
	FaBrandsLinkedin,
	FaSolidEnvelope,
} from 'solid-icons/fa';

const Contact = () => {
	return (
		<section id='contact-me' class='py-10 h-full bg-base-100'>
			<div class='container mx-auto px-2'>
				<div class='flex flex-wrap justify-center text-center mb-10'>
					<div class='w-full lg:w-6/12 px-4 '>
						<h1 class='text-5xl font-bold text-center mx-auto  align-middle rounded-sm text-primary  w-max'>
							Contact Me
						</h1>
					</div>
				</div>
				<div class='flex flex-wrap'>
					<div class='transition-all duration-300 md:hover:scale-110 w-full md:w-6/12 lg:w-4/12 px-4 text-center'>
						<a
							href='mailto:chindukuripavan@gmail.com'
							target='_blank'
							rel='noreferrer'
						>
							<div class='relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-8 shadow-lg rounded-lg border border-slate-300'>
								<div class='px-4 py-5 flex-auto'>
									<div class='text-white p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow rounded-full bg-primary-focus border border-slate-300 hover:bg-black transition'>
										<FaSolidEnvelope class='text-3xl ' />
									</div>
									<h6 class='text-slate-600 text-xl font-semibold'>Email</h6>
								</div>
							</div>
						</a>
					</div>
					<div class='transition-all duration-300 md:hover:scale-110 w-full md:w-6/12 lg:w-4/12 px-4 text-center'>
						<a
							href='https://github.com/ghana7989'
							target='_blank'
							rel='noreferrer'
						>
							<div class='relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-8 shadow-lg rounded-lg border border-slate-300'>
								<div class='px-4 py-5 flex-auto'>
									<div class='text-white p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow rounded-full bg-primary-focus border border-slate-300 hover:bg-black transition'>
										<FaBrandsGithub class='text-3xl ' />
									</div>
									<h6 class='text-slate-600 text-xl font-semibold'>GitHub</h6>
								</div>
							</div>
						</a>
					</div>
					<div class='transition-all duration-300 md:hover:scale-110 w-full md:w-6/12 lg:w-4/12 px-4 text-center'>
						<a
							href='https://www.linkedin.com/in/chindukuri-pavan7989/'
							target='_blank'
							rel='noreferrer'
						>
							<div class='relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-8 shadow-lg rounded-lg border border-slate-300'>
								<div class='px-4 py-5 flex-auto'>
									<div class='text-white p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow rounded-full bg-primary-focus border border-slate-300 hover:bg-black transition'>
										<FaBrandsLinkedin class='text-3xl ' />
									</div>
									<h6 class='text-slate-600 text-xl font-semibold'>LinkedIn</h6>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
