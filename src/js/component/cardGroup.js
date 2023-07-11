import React,{useContext} from "react";
import { Card } from "./card.js";
import { Context } from "../store/appContext.js";


export const CardGroup = () => {

    const { actions, store } = useContext(Context);

console.log(store.characters);
console.log(store.infoCharacters);
   
	return (
        <>

        <h1 className="text-danger">Characters</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
              {store.characters.map((item) => (
                <Card
                    // key={item.uid}
                    name={item.name}
                    // id={item.id}
                    // gender={item.gender}
                    // hair_color={item.hair_color}
                    // eye_color={item.eye_color}
                />))}
            
           
            {/* <div className="card" style={{width: 18 + 'rem'}}>
                {/* <Card/> */}
                {/* {store.characters.map((item,i) => (
                <Card
                    key={item[i]}
                    nombre={item.name}
                        // id={item.uid}
                        // gender={item.gender}
                        // hair_color={item.hair_color}
                        // eye_color={item.eye_color}
                />))} */}
                   
            {/* </div> */} 
           
        </div>



        </>
    );
};