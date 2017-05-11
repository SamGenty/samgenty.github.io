var key = 'STORE_KEY';
var gradVar = document.getElementById("gradVar");

localforage.setDriver([
  localforage.INDEXEDDB,
  localforage.WEBSQL,
  localforage.LOCALSTORAGE
  ]).then(function() {
  	console.log('Using:' + localforage.driver());
	localforage.getItem(key)
	.then(function(value) {
		console.log('Loaded: ', value);
		gradVar.innerHTML = value;
	}).catch(function(err) {
		localforage.setItem(key, 0)
		.then(function() {
			gradVar.innerHTML = 0;
		 }).catch(function(err) {
		 	console.warn("Error: ", err);
		 });
	});
});


//- Using an anonymous function:
document.getElementById("adding").onclick = function () {
	var localEhy = gradVar.innerHTML;
	localEhy++;
	localforage.setItem(key, localEhy).then(function(){ 
		gradVar.innerHTML = localEhy;
	}).catch(function(err){
		console.warn("ERROR : ", err);
	});

};
document.getElementById("subtracting").onclick = function () {
	var localEhy = gradVar.innerHTML;
	localEhy--;
	localforage.setItem(key, localEhy).then(function(){ 
		gradVar.innerHTML = localEhy;
	}).catch(function(err){
		console.warn("ERROR : ", err);
	});
};
document.getElementById("resetting").onclick = function () {
	var localEhy = gradVar.innerHTML;
	localEhy = 0;
	localforage.setItem(key, localEhy).then(function(){ 
		gradVar.innerHTML = localEhy;
	}).catch(function(err){
		console.warn("ERROR : ", err);
	});
};