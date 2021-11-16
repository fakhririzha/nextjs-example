import React, { useEffect, useState } from "react";

import Head from "next/head";

import axios from "axios";

import styles from "../../styles/meal/idMeal.module.scss";

export const getServerSideProps = async (ctx) => {
	const meals = await axios
		.get(
			`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ctx.query.idMeal}`
		)
		.then(({ data }) => data.meals)
		.catch((error) => {
			console.log(error);
		});
	return { props: { meals: meals } };
};

const idMeal = (props) => {
	const [meal, setMeal] = useState(null);

	useEffect(() => {
		setMeal(props.meals || "No meal found.");
	}, [props.meals]);

	return (
		<>
			{meal &&
				meal.map((meal) => {
					return (
						<Head key={meal.idMeal}>
							<title>{meal.strMeal}</title>
							<meta name="description" content="The Meal DB Homepage" />
							<link rel="icon" href="/favicon.ico" />
						</Head>
					);
				})}
			<div className={styles.meal}>
				{(meal &&
					meal.map((item) => {
						return (
							<div className={styles.meal__item} key={item.idMeal}>
								<div
									className={styles.image}
									style={{
										backgroundImage: `url(${item.strMealThumb})`,
										backgroundSize: "cover",
										backgroundPosition: "center",
									}}
								></div>
								<div className={styles.name}>{item.strMeal}</div>
								<div className={styles.category}>
									Category: {item.strCategory}
								</div>
								<div className={styles.origin}>Origin: {item.strArea}</div>
								<div className={styles.instructions}>
									Instructions: <br />
									{item.strInstructions}
								</div>
								<div className={styles.recipe}>
									<span
										style={{
											display: "block",
											marginBottom: "1rem",
											marginTop: "1rem",
										}}
									>
										Tutorial Video
									</span>
									<iframe
										width="560"
										height="315"
										src={item.strYoutube.replace("watch?v=", "embed/")}
										title="YouTube video player"
										frameborder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowfullscreen
									></iframe>
								</div>
							</div>
						);
					})) ||
					"Loading..."}
			</div>
		</>
	);
};

export default idMeal;
