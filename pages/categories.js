import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Categories.scss";

import axios from "axios";

const fetchDataFromAPI = async () => {
	return await axios
		.get("https://www.themealdb.com/api/json/v1/1/categories.php")
		.then(({ data }) => data.categories)
		.catch((error) => {
			console.log(error);
		});
};

const Categories = () => {
	const [categories, setCategories] = useState(null);

	useEffect(() => {
		fetchDataFromAPI().then((data) =>
			setCategories(data || "No categories found.")
		);
	}, []);

	return (
		<div className="categories">
			<div className="categories__items">
				{(categories &&
					categories.map((category) => {
						return (
							<div className="categories__item" key={category.idCategory}>
								{/* <Link to={`/categories/${category.strCategory.toLowerCase()}`}> */}
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
								{/* </Link> */}
							</div>
						);
					})) ||
					"Loading..."}
			</div>
		</div>
	);
};

export default Categories;
