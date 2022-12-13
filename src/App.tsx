import type { Component } from 'solid-js';
import AboutMe from './components/sections/AboutMe';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import Hero from './components/sections/Hero';
import Navbar from './components/sections/Navbar';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';

const App: Component = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<AboutMe />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
