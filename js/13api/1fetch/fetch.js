/*
|-------------------------------------------------------------------------------
|	fetch
|-------------------------------------------------------------------------------
|	1- 	what is the default http methd that used by fetch ?
|			get 
|	2-	can we assign any header we want ?
|			No there is alot of header we cant set it .
|	3-	are fetch supoprt abort ?
|			No
|	4-	how to make abort ?
|			const controller = new AbortController();
|			const signal = controller.signal;
|			const downloadBtn = document.querySelector("#download");
|			const abortBtn = document.querySelector("#abort");
|			downloadBtn.addEventListener("click", async () => {
|			  	try {
|			    	const response = await fetch(url, { signal });
|			  	} catch (error) {
|					//
|			  	}
|			});
|			abortBtn.addEventListener("click", () => {
|			  	controller.abort();
|			  	console.log("Download aborted");
|			}); 
|	5-	what do fetch credentials option ?
|			responsaple fro send credentials with the request
|				1-	include =>	send the credentials
|				2-	same-origin => send the credentials if request URL is on the same origin as the calling script
|				3-	omit => do not send the credentials
|	6-	how to make request using fetch ?
|			let responseObject = fetch( 
|				'url',
|				{
|					method: 'GET', // *GET, POST, PUT, DELETE
|					mode: "cors", // no-cors, *cors, same-origin
|    				cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
|    				credentials: "same-origin", // include, *same-origin, omit	
|					headers:{
|						'headerName' : 'headerValue', 'text/plain',
|						'Content-Type' : 'headerValue' //'application/json', 'multipart/form-data'
|					},
|					redirect: "follow", //manual, *follow, error
|					//referrerPolicy: "no-referrer", 
|						// no-referrer, *no-referrer-when-downgrade, origin,
|						//origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url			
|					body: jsonString, blobObject, formData
|				}
|			) ;
|	7-	what return of fetch ?
|			promise that resolved with Response Object
|				let response = await fetch('https://jsonplaceholder.typicode.com/todos/1') ;
|				console.log(response);
|				//result
|					Response { type: "cors", url: "https://jsonplaceholder.typicode.com/todos/1", redirected: false, status: 200, 
|					ok: true, statusText: "OK", headers: Headers(4), body: ReadableStream, bodyUsed: false }
|	8-	how to check http state ?
|			1-	.status => return number that represnt http state 200 or 405
|					let response = await fetch('https://jsonplaceholder.typicode.com/todos/1') ;
|					response.status; // 200 
|			2-	.ok => return boolean true or false
|					let response = await fetch('https://jsonplaceholder.typicode.com/todos/1') ;
|					response.ok; // true
|			3-	.statusText => return string that represnt http state ok || Not Found
|					response.statusText; // ok
|	9-	what is the blob ?
|			represents a file-like object containing raw data 
|			it is a container for a collection of bytes that behaves similarly to a file
|				1-	you cannot modify the content of a Blob
|				2-	Blobs store binary data, not text
|				3-	Blobs can have a MIME type associated with them, specifying the data format (e.g., text/plain, image/png).
|			Blobs offer a versatile tool for handling raw data in JavaScript applications, particularly when dealing with files and data exchange
|	10-	how to convert html element to blob object ?
|			let blob = htmlElement.toBlob( 'mimeTypeAsString', qualityAsNumber );
|				mimeTypeAsString => 'image/png'
|				qualityAsNumber =>
|					0 => low quality 
|					1 => high quality
|	11-	what return .toBlob()
|			returns a Promise object that resolves to the created Blob object containing the element's data 
|	12-	what is the arrayBuffer ?
|			represents a fixed-size chunk of raw binary data storage in memory
|			is specifically designed to hold raw binary data, which can be used for various purposes like images, audio, or custom data structures
|				1-	Once created, the size of an ArrayBuffer cannot be changed
|	13-	what is formData ?
|			object represent html form
| 	14-	how to make form data ?
|			let formData = new FormData(htmlForm);
|	15-	how to append field with value in formData ?
|			let formData = new FormData(htmlForm);
|			formData.append('fieldName', value) || formData.append('fieldName', blob, 'fileName')
|			formData.set('fieldName', value) || formData.set('fieldName', blob, 'fileName').
|	16-	how to remove field from formData ?
|			let formData = new FormData(htmlForm);
|			formData.delete('fieldName');
|	17-	how to get value of filed using filed name from formData ?
|			let formData = new FormData(htmlForm);
|			formData.get('fieldName')
|	18-	how to check if formData has field with spasfic name?
|			let formData = new FormData(htmlForm);
|			formData.has('fieldName')
|	19-	when we want to send form data usng fetch what the Content-Type showld set ?
|			multipart/form-data
|	20- waht is the response body formats that support by fetch  and discripe it ?
|			1-	.text() => 	read the body as text
|					let response = await fetch('https://jsonplaceholder.typicode.com/todos/1') ;
|					let commits = await response.text(); 
|					console.log(commits); 
|					//result
|						//{ userId: 1, id: 1, title: "delectus aut autem", completed: false }
|			2-	.json()	=>	Parse the body as json
|					let response = await fetch('https://jsonplaceholder.typicode.com/todos/1') ;
|					let commits = await response.json(); 
|					console.log(commits); 
|					//result
|						Object { userId: 1, id: 1, title: "delectus aut autem", completed: false }
|			3- 	.formData() => return the body as form data 
|			4-	.blob()	=> return the body as blob object 
|					let response = await fetch('https://jsonplaceholder.typicode.com/todos/1') ;
|					let commits = await response.blob(); 
|					console.log(commits); 
|					//result
|						Blob { size: 83, type: "application/json; charset=utf-8" }
|			5- 	.arrayBuffer() => return the body as array buffer
|					let response = await fetch('https://jsonplaceholder.typicode.com/todos/1') ;
|					let commits = await response.arrayBuffer(); 
|					console.log(commits); 
|					//result
|						ArrayBuffer { byteLength: 83 }
|			6- 	.body => provide a readablestream for chunked reading 
|					let response = await fetch('https://jsonplaceholder.typicode.com/todos/1') ;
|					let commits = await response.body; 
|					console.log(commits); 
|					//result
|						ReadableStream { locked: false }
|			7-	.headers => access response header  its return map-like object 
|					1-	.get('headerName') ;
|							let response = await fetch('https://jsonplaceholder.typicode.com/todos/1') ;
|							let responseHeadere = response.headers ;
|							console.log(responseHeadere); 
|							console.log(responseHeadere.get('content-type'));
|							//result 
|								Headers(4) { "cache-control" → "max-age=43200", "content-type" → "application/json; charset=utf-8",
|								expires → "-1", pragma → "no-cache" }
|								application/json; charset=utf-8
|	21-	how to convert js Object to json string ?
|			let jsonString = JSON.stringify(jsObject) ;
|	22-	how to make new request for request ?
| 			const myRequest = new Request(
| 				"url", 
| 				{
| 			  		method: "GET",
| 			  		headers: {'headerName':'headerValue',},
| 			  		mode: "cors",
| 			  		cache: "default",
| 				}
| 			);
|	23-	how to make headr for request ?
|			const myHeaders = new Headers({
|  				"headerName": "headerValue",
|			});
|			||
|			const myHeaders = new Headers();
|			myHeaders.append("headerName", "headerValue");
|	24-	how to set header ?
|			myHeaders.set("headerName", "headerValue");
|	25-	how check if the header have spasicifc header ?
|			myHeaders.has("headerName")
|	26-	how to get header value ?
|			myHeaders.get("headerName")
|	27-	how to delete header value ?
|			myHeaders.delete("headerName");
|				
*/


/*
|-------------------------------------------------------------------------------
|	how to convert html element to blob object
|-------------------------------------------------------------------------------
*/

	let blob = htmlElement.toBlob( 'mimeTypeAsString', qualityAsNumber );


/*
|-------------------------------------------------------------------------------
|	how to convert js object to json string 
|-------------------------------------------------------------------------------
*/
	let jsObject = {x:'walid'} ; 
	let jsonString = JSON.stringify(jsObject) ; // as string '{x:walid}' 


/*
|---------------------------------------------------------------------------------------------
|
|---------------------------------------------------------------------------------------------
*/
	//get img using the fetch
	let response = await fetch('/article/fetch/logo-fetch.svg');
	// save the response ( img ) as blob
	let blob = await response.blob(); // download as Blob object
	// create <img> for it
	let img = document.createElement('img');
	img.style = 'position:fixed;top:10px;left:10px;width:100px';
	//but the img elemnt insaid html body
	document.body.append(img);
	//method in JavaScript is used to create a temporary URL, also known as an object URL, from a Blob object. 
	//This object URL allows you to reference the Blob's data as if it were a regular file accessible through a URL
	// method returns a string containing a unique URL that points to the Blob's data. 
	//This URL is valid only within the document or context where it was created.
	img.src = URL.createObjectURL(blob);
	setTimeout(() => { // hide after three seconds
	  img.remove();
	  // used to invalidate and release an object URL,
	  //Revoking an object URL informs the browser that it can release the memory associated with the Blob's data. 
	  //This is crucial to prevent memory leaks
	  URL.revokeObjectURL(img.src);
	}, 3000);


/*
|---------------------------------------------------------------------------------------------
|	how to make abort
|---------------------------------------------------------------------------------------------
*/
	const controller = new AbortController();
	const signal = controller.signal;
	const url = "video.mp4";
	const downloadBtn = document.querySelector("#download");
	const abortBtn = document.querySelector("#abort");
	downloadBtn.addEventListener("click", async () => {
		try {
	 		const response = await fetch(url, { signal });
	    	console.log("Download complete", response);
	 	} catch (error) {
	    	console.error(`Download error: ${error.message}`);
	 	}
	});
	abortBtn.addEventListener("click", () => {
	  	controller.abort();
	  	console.log("Download aborted");
	});


/*
|-------------------------------------------------------------------------------
|	how make request using fetch
|-------------------------------------------------------------------------------
*/
	let responseObject = await fetch( 
		'https://jsonplaceholder.typicode.com/todos/1',
		{
			method: 'GET', // *GET, POST, PUT, DELETE
			mode: "cors", // no-cors, *cors, same-origin
			cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
			credentials: "omit", // include, *same-origin, omit	
			headers:{
				'Content-Type' : 'application/json' //'application/json', 'multipart/form-data'
			},
			redirect: "follow", 
				//manual, *follow, error
			referrerPolicy: "no-referrer", 
				// no-referrer, *no-referrer-when-downgrade, origin,origin-when-cross-origin, same-origin, 
				//strict-origin, strict-origin-when-cross-origin, unsafe-url			
			body: {} //jsonString, blobObject, formData
		}
	);
	console.log(response);
	/* Response { type: "cors", url: "https://jsonplaceholder.typicode.com/todos/1", redirected: false, status: 200, ok: true, 
	statusText: "OK", headers: Headers(4), body: ReadableStream, bodyUsed: false }*/


/*
|-------------------------------------------------------------------------------
|	how to check http request state
|-------------------------------------------------------------------------------
*/
	let response = await fetch('https://jsonplaceholder.typicode.com/todos/1') ;
	response.status; // 200 
	response.ok; // true
	response.statusText; // ok


/*
|-------------------------------------------------------------------------------
|	how to make form data 
|-------------------------------------------------------------------------------
*/

	let formData = new FormData(htmlForm); //formData object have the html form


/*
|-------------------------------------------------------------------------------
|	how to append field with value in formData
|-------------------------------------------------------------------------------
*/
	let formData = new FormData(htmlForm);
	formData.append('fieldName', value) || formData.append('fieldName', blob, 'fileName')
	formData.set('fieldName', value) || formData.set('fieldName', blob, 'fileName').


/*
|-------------------------------------------------------------------------------
|	how to remove field from formData
|-------------------------------------------------------------------------------
*/
	let formData = new FormData(htmlForm);
	formData.delete('fieldName');


/*
|-------------------------------------------------------------------------------
|	how to get value of filed using filed name from formData
|-------------------------------------------------------------------------------
*/
	let formData = new FormData(htmlForm);
	formData.get(name)


/*
|-------------------------------------------------------------------------------
|	how to check if formData has field with spasfic name
|-------------------------------------------------------------------------------
*/
	let formData = new FormData(htmlForm);
	formData.has(name)


/*
|-------------------------------------------------------------------------------
|	how read the response body as text
|-------------------------------------------------------------------------------
*/
	let response = await fetch('https://jsonplaceholder.typicode.com/todos/1') ;
	let commits = await response.text(); 
	console.log(commits); //{ userId: 1, id: 1, title: "delectus aut autem", completed: false }


/*
|-------------------------------------------------------------------------------
|	how read the response body as json
|-------------------------------------------------------------------------------
*/
	let response = await fetch('https://jsonplaceholder.typicode.com/todos/1') ;
	let commits = await response.json(); 
	console.log(commits); //Object { userId: 1, id: 1, title: "delectus aut autem", completed: false }


/*
|-------------------------------------------------------------------------------
|	how to return the body as blob object 
|-------------------------------------------------------------------------------
*/
	let response = await fetch('https://jsonplaceholder.typicode.com/todos/1') ;
	let commits = await response.blob(); 
	console.log(commits); //Blob { size: 83, type: "application/json; charset=utf-8" }


/*
|-------------------------------------------------------------------------------
|	how to return the body as array buffer 
|-------------------------------------------------------------------------------
*/
	let response = await fetch('https://jsonplaceholder.typicode.com/todos/1') ;
	let commits = await response.arrayBuffer(); 
	console.log(commits); //ArrayBuffer { byteLength: 83 }


/*
|-------------------------------------------------------------------------------
|	how to provide a readablestream for chunked reading 
|-------------------------------------------------------------------------------
*/
	let response = await fetch('https://jsonplaceholder.typicode.com/todos/1') ;
	let commits = await response.body(); 
	console.log(commits); //ReadableStream { locked: false }


/*
|-------------------------------------------------------------------------------
|	how to access response header and get header value
|-------------------------------------------------------------------------------
*/
	let response = await fetch('https://jsonplaceholder.typicode.com/todos/1') ;
	let responseHeadere = response.headers ;
	console.log(responseHeadere); //map-like object 
	console.log(responseHeadere.get('content-type'));
	/* Headers(4) { "cache-control" → "max-age=43200", "content-type" → "application/json; charset=utf-8",
	expires → "-1", pragma → "no-cache" }*/
	//application/json; charset=utf-8


/*
|-------------------------------------------------------------------------------
|	how to make new request for request
|-------------------------------------------------------------------------------
*/
	const myRequest = new Request(
		"url", 
		{
	  		method: "GET",
	  		headers: {'headerName':'headerValue',},
	  		mode: "cors",
	  		cache: "default",
	  		//any fetch option you can put here
		}
	);


/*
|-------------------------------------------------------------------------------
|	how to make new header for request
|-------------------------------------------------------------------------------
*/
	const myHeaders = new Headers({
			"headerName": "headerValue",
	});
	//or
	const myHeaders = new Headers();
	myHeaders.append("headerName", "headerValue");


/*
|-------------------------------------------------------------------------------
|	how to set header for request
|-------------------------------------------------------------------------------
*/

	myHeaders.set("headerName", "headerValue");


/*
|-------------------------------------------------------------------------------
|	how check if the header have spasicifc header 
|-------------------------------------------------------------------------------
*/

	myHeaders.has("headerName");//trur || false

/*
|-------------------------------------------------------------------------------
|	how to get header value from header request
|-------------------------------------------------------------------------------
*/

	myHeaders.get("headerName");// header value


/*
|-------------------------------------------------------------------------------
|	how to delete header value from header request
|-------------------------------------------------------------------------------
*/

	myHeaders.delete("headerName");
