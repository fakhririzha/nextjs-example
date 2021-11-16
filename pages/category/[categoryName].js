import React, { useEffect, useState } from "react";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import axios from "axios";

import styles from "../../styles/category/categoryDetail.module.scss";

export const getServerSideProps = async (ctx) => {
	const meals = await axios
		.get(
			`https://www.themealdb.com/api/json/v1/1/filter.php?c=${ctx.query.categoryName}`
		)
		.then(({ data }) => data.meals)
		.catch((error) => {
			console.log(error);
		});
	return { props: { meals: meals } };
};

const CategoryName = (props) => {
	const [meals, setMeals] = useState(null);

	useEffect(() => {
		setMeals(props.meals || "No meals found.");
	}, [props.meals]);

	return (
		<div className={styles.category}>
			<Head>
				<title>Category List</title>
				<meta name="description" content="The Meal DB Homepage" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.category__items}>
				{(meals &&
					meals.map((meal) => {
						return (
							<div className={styles.category__item} key={meal.idMeal}>
								<Link href={`/meal/${meal.idMeal}`} passHref>
									<a>
										<figure>
											<img src={meal.strMealThumb} alt={meal.strMeal} />
											<figcaption>
												<span>{meal.strMeal}</span>
											</figcaption>
										</figure>
									</a>
								</Link>
							</div>
						);
					})) ||
					"Loading..."}
			</div>
		</div>
	);
};

export default CategoryName;
