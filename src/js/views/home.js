
import React, {useEffect, useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
// import "../../styles/home.css";
import { CardGroup } from "../component/cardGroup.js";
import { Context } from "../store/appContext.js";

export const Home = () => {

	const { actions, store } = useContext(Context);

	useEffect(() => {
		actions.getCharacters();
	}, []);
	// useEffect(() => {
	// 	actions.getInfoCharacters();
	// }, []);

	


return (


	<CardGroup/>

	


	);
}