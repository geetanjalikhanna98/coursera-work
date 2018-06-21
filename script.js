var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for( var index=0; index<names.length; index++){
    var name = names[index].toLowerCase();
    var firstLetter = name.charAt(0);
    if( firstLetter == "j"){
        byeSpeaker.speak(names[index]);
    }
    else{
        helloSpeaker.speak(names[index]);
    }
}