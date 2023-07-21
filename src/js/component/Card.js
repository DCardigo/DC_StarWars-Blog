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
  
    // FUNCION ICONO DE LEARN MORE

    const handlerNavigate = (e)=>{
        e.preventDefault()
        store.characters.find(nom => nom.name === props.item.name)? 
        navigate("/charactersdetails/" + props.uid)
        :store.planets.find(nom => nom.name === props.item.name)? 
        navigate("/PlanetsDetails/" + props.uid)
        :store.vehicles.find(nom => nom.name === props.item.name)? 
        navigate("/VehiclesDetails/" + props.uid)
        :null
    }

    useEffect(() => {
        const isCharacterFavorite = store.favoritos.some((favorite) => favorite.name === props.item.name);
        setIsFavorite(isCharacterFavorite);
    }, [store.favoritos]);



	return (

        <div className="card mx-3" style={{width: 18 + 'rem'}}>

            {/* CONDICIONAL IMAGEN */}

            {store.characters.find(nom => nom.name === props.item.name)? 
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} className="card-img-top" alt="..."/>
            :store.planets.find(nom => nom.name === props.item.name)? 
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`} className="card-img-top" alt="..."/>
            :store.vehicles.find(nom => nom.name === props.item.name)? 
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.uid}.jpg`} className="card-img-top" alt="..."/>
            :null}

            <div className="card-body ">
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text">UID:{props.uid} </p>
    
                <button type="button" className="btn btn-outline-primary" onClick={handlerNavigate}>
                
                Learn more!
                </button>
                <button type="button" className="btn btn-outline-warning float-end" onClick={handleClick}>
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