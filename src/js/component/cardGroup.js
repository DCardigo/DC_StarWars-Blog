import React,{useContext} from "react";
import { Card } from "./card.js";
import { Context } from "../store/appContext.js";


export const CardGroup = () => {

    const { actions, store } = useContext(Context);


   
	return (
        <>

        <h1 className="text-danger">Characters</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            
            <div className="col">
               {/* {store.characters.map(item => (
							<Card
								key={item.id}
								nombre={item.name}
								// id={item.id}
								// gender={item.gender}
								// hair_color={item.hair_color}
								// eye_color={item.eye_color}
							/>
						))} */}
            </div>
            <div className="card" style="width: 18rem;">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
           
        </div>



        </>
    );
};