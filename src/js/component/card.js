import React, {useContext, useState, useEffect} from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useNavigate} from "react-router-dom";


export const Card = (props) => {
    const { actions, store } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);


    const navigate = useNavigate()


    // FUNCION ICONO DE ME GUSTA

    const handleClick = (e) => {
        e.preventDefault()
        let favs = [...store.favoritos]
        setIsFavorite(!isFavorite)

        if(!isFavorite === true) {
                favs.push ({
                name: props.item.name,
                id: props.uid,
            })

        } else (
            favs = favs.filter((item) => item.name !== props.item.name)
            )
         
        actions.addFavorito(favs)
    }

    // const navegar = e =>{
        //         if (store.characters.includes(props.item.name)){
        //             navigate("/charactersdetails/" + props.uid)
        //         }else{
        //             if (store.planets.includes(props.item.name)){
        //                 navigate("/PlanetsDetails/" + props.uid)
        //             }else{
        //                 if (store.vehicles.includes(props.item.name)){
        //                     navigate("/VehiclesDetails/" + props.uid)
        //             }
        //         }
        //     }
        // }

        const navegar = e =>{
            const personaje = store.characters.indexOf(props.item.name)
            const planeta = store.planets.indexOf(props.item.name)
            const vehiculo = store.vehicles.indexOf(props.item.name)

                personaje != -1 ? navigate("/charactersdetails/" + props.uid):
            
                planeta != -1 ? navigate("/PlanetsDetails/" + props.uid):
            
                navigate("/VehiclesDetails/" + props.uid)
                
            }       

// const navegar = (e) =>{store.vehicles.indexOf(props.item.name)}
//    const isInArray = navegar !== -1;
//    console.log(isInArray); // true

    useEffect(() => {
        const isCharacterFavorite = store.favoritos.some((favorite) => favorite.name === props.item.name);
        setIsFavorite(isCharacterFavorite);
    }, [store.favoritos]);



	return (

        <div className="card" style={{width: 18 + 'rem'}}>
            <img src="https://e0.pxfuel.com/wallpapers/813/200/desktop-wallpaper-holden-decor-statement-sparkle-star-12616-black-silver.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text">UID:{props.uid} </p>

                <button type="button" className="btn btn-primary" onClick={navegar}>
    
                {/* <button type="button" className="btn btn-primary" onClick={ (e)=> navigate("/VehiclesDetails/" + props.uid)
                    }> */}
                Learn more!
                </button>
                <button type="button" className="btn btn-primary mx-3" onClick={handleClick}>
                {
                       
                        (isFavorite) ? <i className="fas fa-heart"></i>:<i className="far fa-heart"></i>
                    }

                </button>
            </div>
        </div>

    );
};
Card.propTypes = {

	name: PropTypes.string,
	id: PropTypes.string,
    // key: PropTypes.string,
 
    gender: PropTypes.string,
    hair_color: PropTypes.string,
    eye_color: PropTypes.string,

  
};