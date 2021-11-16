import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>The Meal DB</title>
				<meta name="description" content="The Meal DB Homepage" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}></main>=
		</div>
	);
}
