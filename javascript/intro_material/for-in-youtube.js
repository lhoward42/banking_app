let monsters= {'Canada': 'Sasquatch', 'Nepal':'Yeti','Scotland':'Loch Ness Monster'};

//console.log(monsters);
// var in object
for(let prop in monsters){
   console.log(prop); //basically shoots back the index; so think Canada, Nepal, Scotland are all variables attached to prop, returns Canada, Nepal, Scotland 
   console.log(monsters[prop]); // so think monsters are attached to Sasquatch, Yeti, Loch Ness Monster - returns Sasquatch, Yeti, Loch Ness Monster
}
