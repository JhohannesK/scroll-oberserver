import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
	const [isIntersecting, setIsIntersecting] = useState(false);
	console.log('🚀 ~ file: App.tsx:6 ~ App ~ isIntersecting:', isIntersecting);

	const ref = useRef(null);
	console.log('🚀 ~ file: App.tsx:9 ~ App ~ ref:', ref);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entries]) => {
				setIsIntersecting(entries.isIntersecting);
			},
			{
				// root: null,
				rootMargin: '-300px',
				// threshold: 1.0,
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}
		return () => {
			observer.disconnect();
		};
	}, []);
	return (
		<>
			<header>This is the Header</header>
			<main ref={ref}>
				<div className='child-one'>Child One</div>
				<div className='child-two'>Child Two</div>
			</main>
			<footer>This is the Footer</footer>
		</>
	);
}

export default App;
