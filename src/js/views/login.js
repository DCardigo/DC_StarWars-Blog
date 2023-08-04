import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

export const Login = () =>{

    const { store, actions } = useContext(Context);

	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

	const handlerSubmit = e => {
		e.preventDefault();
		// actions.login(email, password);
		console.log(email, password);
		setEmail("");
		setPassword("");
	};

    return (
        <div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form onSubmit={handlerSubmit}>
					
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							value={email}
							className="form-control"
							placeholder="Enter email"
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							value={password}
							className="form-control"
							placeholder="Enter password"
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					
					<button type="submit" className="btn btn-primary form-control">
						Submit
					</button>

				</form>
			</div>
		</div>

    )
}