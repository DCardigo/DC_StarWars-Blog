

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			characters: [],
			infoCharacters:[],
			planets:[],
			infoPlanets:[],
			vehicles:[],
			infoVehicles:[],
			favoritos:[],
		


			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {

		

			addFavorito: (favs) => {
				setStore({ favoritos: favs })
			},

			removeFav: (el,i) => {
				const updatedItems =(getStore().favoritos.indexOf(el) !=-1)?
				getStore().favoritos.filter((item) => item != el)
				:null

				setStore({favoritos:updatedItems})

			  },
			
			  //CHARACTERS

			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/", {
					method: "GET"
				})
				.then(res => res.json())
				.then(data => setStore({ characters: data.results}))
		
				.catch(err => console.error(err))
				},

			getInfoCharacters: (uid) => {
				fetch("https://www.swapi.tech/api/people/"+uid, {
					method: "GET"
				})
				.then(res => res.json())
				.then(data => setStore({ infoCharacters: data.result.properties}))
		
				.catch(err => console.error(err))
				},

				//PLANETS

			getPlanets: () => {
			fetch("https://www.swapi.tech/api/planets/", {
				method: "GET"
			})
			.then(res => res.json())
			.then(data => setStore({ planets: data.results}))
	
			.catch(err => console.error(err))
			},

		getInfoPlanets: (uid) => {
			fetch("https://www.swapi.tech/api/planets/"+uid, {
				method: "GET"
			})
			.then(res => res.json())
			.then(data => setStore({ infoPlanets: data.result.properties}))
	
			.catch(err => console.error(err))
			},

			//VEHICLES

		getVehicles: () => {
			fetch("https://www.swapi.tech/api/vehicles/", {
				method: "GET"
			})
			.then(res => res.json())
			.then(data => setStore({ vehicles: data.results}))
			.catch(err => console.error(err))
			},

		getInfoVehicles: (uid) => {
			fetch("https://www.swapi.tech/api/vehicles/"+uid, {
				method: "GET"
			})
			.then(res => res.json())
			.then(data => setStore({ infoVehicles: data.result.properties}))
	
			.catch(err => console.error(err))
			},


			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
