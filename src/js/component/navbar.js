import React, {useContext} from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.js";


export const Navbar = () => {
	const { actions, store } = useContext(Context);

	

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.entertainmentearth.com%2Fimages%2Ftheme_logos%2Fstar_wars.gif&f=1&nofb=1&ipt=9f605e27ac9ee99ed9fa64222ebb373f3c2e6efa375041f7cb08512d78c1500e&ipo=images" alt="Descripción de la imagen"/>

			</Link>
			
		 <div className="dropdown mx-4">
				<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
					<span className="badge bg-secondary mx-2">{store.favoritos.length}</span>
				</button>
				<ul className="dropdown-menu  dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
				
				
				{store.favoritos.length === 0?  
				
					<li>
						Empty
					</li>
					
					:store.favoritos.map((el,i) => (
						
					<li id={i} key = {i} >
						{store.characters.find(nom => nom.name === el.name)? 

						<Link to= {`/charactersdetails/${el.id}`}>
							{el.name}
						</Link>

					:store.planets.find(nombre => nombre.name === el.name)? 

						<Link to= {`/PlanetsDetails/${el.id}`}>
							{el.name}
						</Link>

					:store.vehicles.find(nombre => nombre.name === el.name)?

						<Link to= {`/VehiclesDetails/${el.id}`}>
						{el.name}
						</Link>
					:null
					}
					<button  type="button" onClick={() => actions.removeFav(el,i)} className="btn float-end px-2 py-0" aria-label="Close">
					<i className="fas fa-trash"></i>
					</button>
	
				</li>
				))}
					
				</ul>
			</div> 
		</nav>
		
	);
};
