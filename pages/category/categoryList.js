import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";

import styles from "../../styles/category/categoryList.module.scss";

export const getServerSideProps = async (ctx) => {
	const categories = await axios
		.get("https://www.themealdb.com/api/json/v1/1/categories.php")
		.then(({ data }) => data.categories)
		.catch((error) => {
			console.log(error);
		});
	return { props: { categories: categories } };
};

const CategoryList = (props) => {
	const [categories, setCategories] = useState(null);

	useEffect(() => {
		setCategories(props.categories || "No categories found.");
	}, [props.categories]);

	return (
		<div className={styles.categories}>
			<Head>
				<title>Category List</title>
				<meta name="description" content="The Meal DB Homepage" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.categories__items}>
				{(categories &&
					categories.map((category) => {
						return (
							<Link
								href={`/categories/${category.strCategory.toLowerCase()}`}
								passHref
							>
								<a>
									<div
										className={styles.categories__item}
										key={category.idCategory}
									>
										<figure>
											<img
												src={category.strCategoryThumb}
												alt={category.strCategory}
											/>
											<figcaption>
												<span>{category.strCategory}</span>
												<small style={{ display: "block" }}>
													{category.strCategoryDescription.substring(0, 100) +
														"..."}
												</small>
											</figcaption>
										</figure>
									</div>
								</a>
							</Link>
						);
					})) ||
					"Loading..."}
			</div>
		</div>
	);
};

export default CategoryList;
