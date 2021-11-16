import Link from "next/link";

const Nav = () => {
	return (
		<div className="navbar__wrapper">
			<nav className="navbar__nav">
				<ul className="navbar__logo"></ul>
				<ul className="navbar__items">
					<Link href="/">
						<li className="navbar__item">
							<a href="/">Home</a>
						</li>
					</Link>
					<Link href="/categories">
						<li className="navbar__item">
							<a href="/categories">Categories</a>
						</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
