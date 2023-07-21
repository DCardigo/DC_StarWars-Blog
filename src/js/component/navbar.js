import React, {useContext} from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.js";


export const Navbar = () => {

	const { actions, store } = useContext(Context);

	

	return (
		<nav className="navbar navbar-light bg-light mb-3">

			{/* LOGO */}

			<Link to="/">

				<img src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png" alt="Descripción de la imagen" id="logo"/>

			</Link>
			
		 <div className="dropdown mx-4">

				<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites

					{/* CONTADOR */}

					<span className="badge bg-secondary mx-2">{store.favoritos.length}</span>

				</button>

				<ul className="dropdown-menu  dropdown-menu-end" aria-labelledby="dropdownMenuButton1">

					{/* CONDICIONAL LISTADO FAVORITOS */}
				
				
					{store.favoritos.length === 0?  
					
						<li className="mx-2" >
							Empty
						</li>
						
						:store.favoritos.map((el,i) => (
							
						<li id={i} key = {i} className="mx-2" >
							
							{store.characters.find(nom => nom.name === el.name)? 

							<Link to= {`/charactersdetails/${el.id}`}>
								{el.name}
							</Link>

							:store.planets.find(nom => nom.name === el.name)? 

								<Link to= {`/PlanetsDetails/${el.id}`}>
									{el.name}
								</Link>

							:store.vehicles.find(nom => nom.name === el.name)?

								<Link to= {`/VehiclesDetails/${el.id}`}>
									{el.name}
								</Link>
								
								:null
							}

							{/* BOTON ELIMINAR */}

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
