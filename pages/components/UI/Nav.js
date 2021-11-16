import Link from "next/link";

const Nav = () => {
	return (
		<div className="navbar__wrapper">
			<nav className="navbar__nav">
				<ul className="navbar__logo"></ul>
				<ul className="navbar__items">
					<Link href="/">
						<li className="navbar__item">
							<Link href="/" passHref>
								<a>Home</a>
							</Link>
						</li>
					</Link>
					<Link href="/category/">
						<li className="navbar__item">
							<Link href="/category/" passHref>
								<a>Categories</a>
							</Link>
						</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
