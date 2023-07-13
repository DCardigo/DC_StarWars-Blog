import React, {useContext} from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link} from "react-router-dom";
export const Card = (props) => {
    const { actions, store } = useContext(Context);
	return (

        <div className="card" style={{width: 18 + 'rem'}}>
            <img src="https://e0.pxfuel.com/wallpapers/813/200/desktop-wallpaper-holden-decor-statement-sparkle-star-12616-black-silver.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Gender:{props.gender} </p>
                <p className="card-text">hair_color: {props.hair_color}</p>
                <p className="card-text">eye_color: {props.eye_color}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <Link to="/CharactersDetails" onClick={()=> actions.getInfoCharacters(props.id)}>
                    <span className="btn btn-primary" href="#" role="button">
                        Details
                    </span>
                </Link>
                <button type="button" className="btn btn-primary mx-3">
                <i className="fas fa-heart"></i>
                </button>
            </div>
        </div>

    );
};
Card.propTypes = {

	name: PropTypes.string,
	id: PropTypes.number,
    // key: PropTypes.string,
    gender: PropTypes.string,
    hair_color: PropTypes.string,
    eye_color: PropTypes.string,

  
};