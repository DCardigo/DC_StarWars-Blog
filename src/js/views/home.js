
import React, {useEffect, useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import { Context } from "../store/appContext.js";
import { Card } from "../component/card";


export const Home = () => {

	const { actions, store } = useContext(Context);

	useEffect(() => {
		actions.getCharacters();
		
	}, []);

return (

	<>

	<h1 className="text-danger">Characters</h1>
	<div className="row row-cols-1 row-cols-md-3 g-4 flex-nowrap overflow-auto">
		  {store.characters.map((item) => 
			<Card
				uid={item.uid}
				// name={item.name}
				key={item.uid}
				item={item}
			/>)}
		
	</div>

	</>
	);
}