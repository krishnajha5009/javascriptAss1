/* Write a Program to convert an array of objects to an object
	based on a given key */

const convert = (json,key) => {
	// Write your code here
	let myMap = {};
	if((typeof json === Array ) || key){
		for(let i=0;i<json.length;i+1){	
			myMap[json[i][key]] = json[i];
		}
		return myMap;	
	}
	return null;
};

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/
//console.log(convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], "value"))
//console.log(convert('MS'));
module.exports = convert;
