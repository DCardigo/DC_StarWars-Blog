import React, {useContext, useEffect} from "react";
import { LoremIpsum } from "lorem-ipsum";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router";



export const PlanetsDetails = () =>{
    
    const params = useParams()

    const { actions, store } = useContext(Context);

    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4
        },
        wordsPerSentence: {
          max: 16,
          min: 4
        }
      });
    const paragraphs = lorem.generateParagraphs(2);


    useEffect(() => {
		actions.getInfoPlanets(params.uid);
		
	}, []);



    return(<>
        <div className="d-flex" >
            <img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`}  id="foto" className="img-fluid m-5" alt="..."/>
            
            <div  className="mx-5 mt-5">

                <h1 className="mb-3 text-center" >{store.infoPlanets.name}</h1>

                <p className="text-center">{paragraphs}</p>
            </div>
            
            
        </div>
        <div className="d-flex border-top border-danger justify-content-center mx-5 pt-4"  id="caja-bottom" >

                <div className="col-2 text-center text-danger">
                    <p className="fw-bold" >Name</p>
                    <p>{store.infoPlanets.name}</p>
                </div>
                <div className="col-2 text-center text-danger">
                    <p className="fw-bold" >Diameter</p>
                    <p>{store.infoPlanets.diameter}</p>
                </div>
                <div className="col-2 text-center text-danger">
                    <p className="fw-bold" >Population</p>
                    <p>{store.infoPlanets.population}</p>
                </div>
                <div className="col-2 text-center text-danger">
                    <p className="fw-bold" >Gravity</p>
                    <p>{store.infoPlanets.gravity}</p>
                </div>
                <div className="col-2 text-center text-danger">
                    <p className="fw-bold" >Climate</p>
                    <p>{store.infoPlanets.climate}</p>
                </div>
                <div className="col-2 text-center text-danger">
                    <p className="fw-bold" >Rotation Period</p>
                    <p>{store.infoPlanets.rotation_period}</p>
                </div>

        </div>
        
        </>
        
    )
}