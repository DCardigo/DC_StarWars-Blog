import React, {useContext, useEffect} from "react";
import { LoremIpsum } from "lorem-ipsum";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router";



export const CharactersDetails = () =>{
    
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
		actions.getInfoCharacters(params.uid);
		
	}, []);



    return(<>
        <div className="d-flex" >
            <img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} id="foto" className="img-fluid m-5" alt="..."/>
            
            <div  className="mx-5 mt-5">

                <h1 className="mb-3 text-center" >{store.infoCharacters.name}</h1>

                <p className="text-center">{paragraphs}</p>
            </div>
            
            
        </div>
        <div className="d-flex border-top border-danger justify-content-center mx-5 pt-4"  id="caja-bottom" >

                <div className="col-2 text-center text-danger">
                    <p className="fw-bold" >Name</p>
                    <p>{store.infoCharacters.name}</p>
                </div>
                <div className="col-2 text-center text-danger">
                    <p className="fw-bold" >Birth Year</p>
                    <p>{store.infoCharacters.birth_year}</p>
                </div>
                <div className="col-2 text-center text-danger">
                    <p className="fw-bold" >Gender</p>
                    <p>{store.infoCharacters.gender}</p>
                </div>
                <div className="col-2 text-center text-danger">
                    <p className="fw-bold" >Height</p>
                    <p>{store.infoCharacters.height}</p>
                </div>
                <div className="col-2 text-center text-danger">
                    <p className="fw-bold" >Skin Color</p>
                    <p>{store.infoCharacters.skin_color}</p>
                </div>
                <div className="col-2 text-center text-danger">
                    <p className="fw-bold" >Eye color</p>
                    <p>{store.infoCharacters.eye_color}</p>
                </div>

        </div>
        
        </>
        
    )
}