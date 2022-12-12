import type { Component } from 'solid-js';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

const App: Component = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<AboutMe />
			<Skills />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
