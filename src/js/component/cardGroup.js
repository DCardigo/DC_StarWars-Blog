import React,{useContext} from "react";
import { Card } from "./card.js";
import { Context } from "../store/appContext.js";
import { Link} from "react-router-dom";


export const CardGroup = () => {

    const { actions, store } = useContext(Context);

console.log(store.characters);
console.log(store.infoCharacters);
   
	return (
        <>

        <h1 className="text-danger">Characters</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
              {/* {store.infoCharacters.map((item) => (
                <Card
                    key={item.uid}
                    name={item.name}
                    // id={item.id}
                    // gender={item.gender}
                    // hair_color={item.hair_color}
                    // eye_color={item.eye_color}
                />))} */}
            
        </div>
        <Link to="/CharactersDetails">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Details
				</span>
        </Link>
        <button onClick={()=> actions.getInfoCharacters()}>Datos a mi!</button>



        </>
    );
};