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
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.hdwallpapers.in%2Fwalls%2Fstar_wars_episode_vii_the_force_awakens-wide.jpg&f=1&nofb=1&ipt=f1b374543aa1407ddb2164b42def109ac7d50383b136fb82d6ff3435fd7ddf87&ipo=images" id="foto" className="img-fluid m-5" alt="..."/>
            
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