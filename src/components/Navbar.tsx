import type { Component } from 'solid-js';

const Navbar: Component = () => {
	return (
		<div class='navbar  bg-transparent fixed z-50 h-16 backdrop-blur-3xl shadow-md'>
			<div class='navbar-start'>
				<div class='dropdown'>
					<label tabindex='0' class='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</label>
					<ul
						tabindex='0'
						class='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
					>
						<li>
							<a>About Me</a>
						</li>
						<li>
							<a>Skills</a>
						</li>
						<li>
							<a>Projects</a>
						</li>
					</ul>
				</div>
				<a
					class='btn btn-ghost normal-case md:text-3xl text-xl text-primary font-bold'
					href='/'
				>
					Pavan`D`Dev
				</a>
			</div>
			<div class='navbar-center hidden lg:flex'>
				<ul class='menu menu-horizontal px-1'>
					<li>
						<a>About Me</a>
					</li>
					<li>
						<a>Skills</a>
					</li>
					<li>
						<a>Projects</a>
					</li>
				</ul>
			</div>
			<div class='navbar-end'>
				<a
					class='btn bg-primary hover:bg-primary-focus text-neutral font-bold'
					href='#contact-me'
				>
					Contact Me
				</a>
			</div>
		</div>
	);
};

export default Navbar;
