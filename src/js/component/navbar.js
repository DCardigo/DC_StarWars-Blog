import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.entertainmentearth.com%2Fimages%2Ftheme_logos%2Fstar_wars.gif&f=1&nofb=1&ipt=9f605e27ac9ee99ed9fa64222ebb373f3c2e6efa375041f7cb08512d78c1500e&ipo=images" alt="Descripción de la imagen"/>

			</Link>
			
		 <div className="dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Dropdown button
					<span className="badge bg-secondary">4</span>
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					<li><a className="dropdown-item" href="#">Action</a></li>
					<li><a className="dropdown-item" href="#">Another action</a></li>
					<li><a className="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div> 
		</nav>
		
	);
};
