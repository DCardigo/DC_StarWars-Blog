const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			infoCharacters:[],
			
			
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



			getInfoCharacters: () => {
				const store = getStore();

				const personajes = store.characters.map((item) => (

					
				fetch(`https://www.swapi.tech/api/people/${item.uid}`, {
					method: "GET"
				})
				.then(res => res.json())
				.then(data => setStore({ ...getStore(), infoCharacters: data.result.properties}))
				.catch(err => console.error(err))
				))

				// setStore({infoCharacters:personajes})
				},
				
				
		

			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/", {
					method: "GET"
				})
				.then(res => res.json())
				.then(data => setStore({ characters: data.results}))
				// .then(data => console.log(data))
				.catch(err => console.error(err))
				// getActions().getInfoCharacters()
				
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
