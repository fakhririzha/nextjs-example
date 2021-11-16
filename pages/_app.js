import "../styles/globals.css";
import Footer from "./components/UI/Footer";
import Nav from "./components/UI/Nav";
import "./components/UI/Nav.scss";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Nav />
			<main className="home__mainContent">
				<h1>The Meal DB Homepage</h1>
			</main>
			<br />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
