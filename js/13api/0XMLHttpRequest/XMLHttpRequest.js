/*
|-------------------------------------------------------------------------------
|	XMLHttpRequest
|-------------------------------------------------------------------------------
|	1-	whta is the XMLHttpRequest ?
|			object  used to request data from a web server
|	2- 	how to create XMLHttpRequest what take and what return ?
|			1-	do not take any parameter
|			2-	return XMLHttpRequest object 
|					var xhr = new XMLHttpRequest();
|					console.log(xhr);
|					//XMLHttpRequest { readyState: 0, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, responseURL: "",
|					status: 0, statusText: "", responseType: "", response: "", responseText: "" }
|	3-	how to define response type for XMLHttpRequest ?
|			xhr.responseType = 'json';//json, *text, arraybuffer, blob, document 
|	4-	what is the timeoute property ?
|			it property for XMLHttpRequest object that responeple for cancel the request after spacefid time if the request not finshed
|			withen this time 
|	5- 	how to set timeout for XMLHttpRequest ?
|			xhr.timeout = timeInMileSecand;
|	6-	how to set header for  XMLHttpRequest ?
|			xhr.setRequestHeader('headerName','headerValue');
|	7-	what is the state of XMLHttpRequest and discribe it ?
|			1-	UNSENT 				= 0 => initial state 
|			2-	OPENED  			= 1 => open called
|			3-	HEADERS_RECEIVED  	= 2 => response headers received
|			4-	LOADING  			= 3 => response is loading (a data packet is received)
|			5-	DONE  				= 4 => request complete
|	8-	how to track the XMLHttpRequest state ?
|			xhr.onreadystatechange=function(){
|				if(this.readyState === 4 && this.status === 200){
|					//dealing with respnse
|				}eles{
|					//dealing with respnse
|				}
|			};
|	9-	how to dealing when request is complete (even if http state 400 or 200 or 500 or ....)
|			xhr.onload=function(){}
|			xhr.addEventListener("load", function(){});
|	10-	how to dealing when request have error ?
|			xhr.onerror=function(){}
|			xhr.addEventListener("error", function(){});
|	11-	how to dealing when request download ?
|			xhr.onprogress =function(event){
|				//indicates how many bytes have been received from the server.
|				//For uploads, it indicates how many bytes have been sent to the server
|				event.loaded;
|				//For downloads indicates the total size of the response body.
|				//For uploads, it indicates the total size of the request body.
|				event.total;
|			}
|			xhr.addEventListener("progress ", function(){});
|	12-	how to dealing when request upload ?
|			xhr.upload.onprogress =function(event){
|				//indicates how many bytes have been received from the server.
|				//For uploads, it indicates how many bytes have been sent to the server
|				event.loaded;
|				//For downloads indicates the total size of the response body. For uploads, it indicates the total size of the request body.
|				event.total;
|			}
|			xhr.upload.addEventListener("progress ", function(){});
|	13-	how to dealing  when request transfer finishes, regardless of success, error, or cancellation ?
|			xhr.loadend=function(){}
|			xhr.addEventListener("loadend", function(){});
|	14-	how to dealing  when request timedout ?
|			xhr.ontimeout=function(){}
|			xhr.addEventListener("timeout ", function(){});
|	15-	how to initalizing the XMLHttpRequest ?
|			xhr.open('httpMethod','url',asyncBoolean,'username','password');
|	16- how to send the XMLHttpRequest ?
|			xhr.send(data);//data => formData, jsonString, ....
*/

/*
|--------------------------------------------------------------------------------------------
|	how to make XMLHttpRequest
|--------------------------------------------------------------------------------------------
*/
	var xhr = new XMLHttpRequest();
	xhr.addEventListener("load", function(){
	  console.log(this);
	  console.log('load');
	  console.log('=============================================================');
	});
	xhr.addEventListener("error", function(){
	  console.log('error');
	  console.log('=============================================================');
	});
	xhr.addEventListener("progress ", function(){});
	xhr.upload.addEventListener("progress ", function(){});
	xhr.addEventListener("loadend", function(){
	  console.log(this);
	  console.log('load');
	  console.log('=============================================================');
	});
	xhr.addEventListener("timeout ", function(){
	  console.log('timedout');
	});
	xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
	xhr.responseType = 'json';
	xhr.timeout = 10000;
	xhr.setRequestHeader('Content-Type','application/json');
	xhr.send();//data => formData, jsonString, ....