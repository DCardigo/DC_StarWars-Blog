import React,{useContext} from "react";
import { Card } from "./card.js";
import { Context } from "../store/appContext.js";


export const CardGroup = () => {

    const { actions, store } = useContext(Context);

console.log(store.characters);
   
	return (
        <>

        <h1 className="text-danger">Characters</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            
           
            <div className="card" style={{width: 18 + 'rem'}}>
                <Card/>
                {/* {store.characters.map(item => (
                <Card
                    key={item.id}
                    nombre={item.name}
                        // id={item.id}
                        // gender={item.gender}
                        // hair_color={item.hair_color}
                        // eye_color={item.eye_color}
                />))} */}
                   
            </div>
           
        </div>



        </>
    );
};