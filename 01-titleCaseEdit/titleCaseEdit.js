function titleCaseEdit(title) {
  // Insert code here;
    let str = ""
	let changeNext = true

	for(let i = 0; i < title.length; i++){
		if(title.charAt(i) == " "){
			changeNext = true
			str += title.charAt(i)
			continue;
		}

		if(changeNext){
			str += title.charAt(i).toUpperCase()
			changeNext = false;
		}
		else{
			str += title.charAt(i);
		}

	}

    return str;

}

// Do not edit this line;
module.exports = titleCaseEdit;