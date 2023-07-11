import React, {useContext} from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
export const Card = (props) => {
    const { actions, store } = useContext(Context);
	return (

        <div className="card" style={{width: 18 + 'rem'}} key={props.key}>
            <img src="https://e0.pxfuel.com/wallpapers/813/200/desktop-wallpaper-holden-decor-statement-sparkle-star-12616-black-silver.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Gender: {store.infoCharacters.gender}</p>
                <p className="card-text">hair_color: {props.hair_color}</p>
                <p className="card-text">eye_color: {props.eye_color}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    );
};
Card.propTypes = {

	name: PropTypes.string,
	id: PropTypes.number,
    key: PropTypes.string,
    gender: PropTypes.string,
    hair_color: PropTypes.string,
    eye_color: PropTypes.string,

  
};