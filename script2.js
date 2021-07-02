
function fetchData() {
	fetch("https://jsonplaceholder.typicode.com/users")

  		.then(response => {
  			if (!response.ok) {
  				throw Error("ERROR");
  			}
  			return response.json();
		
	})
		.then(data => {
		console.log(data); 
		const html = data
		.map(user => {

			return `
			<div class="users">
			<p>id: ${user.id}</p>
			<p>UserName: ${user.name}</p>
			<p>email: ${user.email}</p>
			</div>
			`;
		})

		.join("");
		console.log(html);
		document.querySelector("#getData").insertAdjacentHTML("afterbegin", html);
	})
	.catch(Error => {
		console.log(Error);
	});

};


	
fetchData();
