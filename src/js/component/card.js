import React, {useContext} from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
export const Card = props => {
	return (

        <div className="card" style="width: 18rem;">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    );
};
Card.propTypes = {

	name: PropTypes.string,
	id: PropTypes.string
};