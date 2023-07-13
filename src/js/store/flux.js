

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			characters: [],
			infoCharacters:[],
			favoritos:[],
			contador: "0",
	
			
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

			

			addFavorito:(name, id)=> {
				setStore({favoritos: getStore().favoritos.concat(name)})
				setStore(contador += 1)

			},



			removeFav: (el,i) => {
				const updatedItems = getStore().favoritos.filter((item) => item != el);
				
				setStore({favoritos:updatedItems})
		 
			  },


			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/", {
					method: "GET"
				})
				.then(res => res.json())
				.then(data => setStore({ characters: data.results}))
				// .then(data => console.log(data))
				.catch(err => console.error(err))
				
				
				},			
				
			getInfoCharacters: (uid) => {
				fetch("https://www.swapi.tech/api/people/"+uid, {
					method: "GET"
				})
				.then(res => res.json())
				.then(data => setStore({ infoCharacters: data.result.properties}))
				// .then(data => console.log(data))
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
