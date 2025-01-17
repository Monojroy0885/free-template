/*
	We start our code with an ajax request to fetch the data
	from the json file.
*/
// First i create a new xmlhttp-request object.
let http = new XMLHttpRequest();
// the variable http holds now all methods and properties of the objct.

//  next i prepare the request with the open() method.
http.open('get', 'templates.json', true);
// the first argument sets the http method.
// in the second argument we pass the file where our data lives.
// and last the keyword true, sets the request to be async.

// next i will send the request.
http.send();

// Now i have to catch the response.
// i will check the onload eventlistener.
http.onload = function(){
	// Inside the function i need to check the readystate and status properties.
	if(this.readyState == 4 && this.status == 200){
		// if we have a successful response, i have to parse the json data
		// and convert them to a javascript array.
		let products = JSON.parse(this.responseText);

		// next i need an empty variable to add the incoming data.
		let output = "";

		// now i have to loop trough the products, and in every iteration
		// i add an html template to the output variable.
		for(let item of products){
			output += `
				<div class="product">
					<img src="${item.image}" alt="${item.description}">
					<p class="title">${item.title}</p>
					<p class="description">${item.description}</p>
					 <div class="credit"><p><span class="credit-title"> Design by </span><a href="${item.authorlink}">${item.author}</a></p></div> 
					<a href="${item.download}"><p class="download">Download &nbsp;<i class="fa fa-download"></i></p></a>
                    <a href="${item.live}"><p class="live">Live damo &nbsp;<i class="fa fa-eye"></i></p></a>
				</div>
			`;
		}
		/* and last i target the products container and add the data that the
		output variable holds. */
		document.querySelector(".products").innerHTML = output;
	}
} 