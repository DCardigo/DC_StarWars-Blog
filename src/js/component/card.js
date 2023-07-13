import React, {useContext} from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useNavigate} from "react-router-dom";
export const Card = (props) => {
    const { actions, store } = useContext(Context);

    const navigate = useNavigate()

    const handleClick = e => {
		e.preventDefault();
		actions.addFavorito(props.item.name,props.uid);
		
	};


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
                <i className="fas fa-heart"></i>
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