var str="hello world"
function change(str) {
	return str.toLowerCase().split(/\s+/).map(
        function(item, index) {
		return item.slice(0, 1).toUpperCase() + item.slice(1);
        }
        ).join(' ');
}
console.log(change(str)); 
