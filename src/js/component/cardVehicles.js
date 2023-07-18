import React, {useContext, useState, useEffect} from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useNavigate} from "react-router-dom";


export const CardVehicles = (props) => {
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


    useEffect(() => {
        const isCharacterFavorite = store.favoritos.some((favorite) => favorite.name === props.item.name);
        setIsFavorite(isCharacterFavorite);
    }, [store.favoritos]);



	return (

        <div className="card mx-3" style={{width: 18 + 'rem'}}>
            <img src="https://e0.pxfuel.com/wallpapers/813/200/desktop-wallpaper-holden-decor-statement-sparkle-star-12616-black-silver.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text">UID:{props.uid} </p>
    
                <button type="button" className="btn btn-primary" onClick={ (e)=> navigate("/VehiclesDetails/" + props.uid)
                    }>
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
CardVehicles.propTypes = {

	name: PropTypes.string,
	id: PropTypes.string,
    // key: PropTypes.string,
 
    gender: PropTypes.string,
    hair_color: PropTypes.string,
    eye_color: PropTypes.string,

  
};