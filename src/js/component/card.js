import React, {useContext, useState, useEffect} from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useNavigate} from "react-router-dom";


export const Card = (props) => {
    const { actions, store } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);


    const navigate = useNavigate()

    // const handleClick = e => {
	// 	e.preventDefault();
    //     (store.favoritos.indexOf(props.item.name) !=-1)? null
    //     :actions.addFavorito(props.item.name,props.uid);
    //     // :setStore({favoritos: getStore().favoritos.concat({name,id})})
    //     // store.favoritos.includes(props.item.name)? null
    //     // :actions.addFavorito(props.item.name,props.uid);
    // };

    // FUNCION ICONO DE ME GUSTA

    const handleClick = (e) => {
        e.preventDefault()
        let favs = [...store.favoritos]
        setIsFavorite(!isFavorite)

        if(!isFavorite === true) {
                favs.push ({
                name: props.name,
                id: props.uid,
            })

        } else (
            favs = favs.filter((item) => item.name !== props.name)
            )
         
        actions.addFavorito(favs)

    }


    // useEffect utilizado para setaar el estado de favoritos en función de si el nombre esta o no en la cesta

    useEffect(() => {
        const isCharacterFavorite = store.favoritos.some((favorite) => favorite.name === props.name);
        setIsFavorite(isCharacterFavorite);
    }, [store.favoritos]);



	return (

        <div className="card" style={{width: 18 + 'rem'}}>
            <img src="https://e0.pxfuel.com/wallpapers/813/200/desktop-wallpaper-holden-decor-statement-sparkle-star-12616-black-silver.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text">UID:{props.uid} </p>
    
                <button type="button" className="btn btn-primary" onClick={(e)=> navigate("/charactersdetails/" + props.uid)}>
                Learn more!
                </button>
                <button type="button" className="btn btn-primary mx-3" onClick={handleClick}>
                {
                        (isFavorite) ? <i className="fa-sharp fa-solid fa-heart fa-lg"></i>: <i className="fa-sharp fa-regular fa-heart fa-lg"></i>
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