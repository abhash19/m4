*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!


(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


 Loop over the names array and say either 'Hello' or "Good Bye"
 using the 'speak' method or either helloSpeaker's or byeSpeaker's
'speak' method.

for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();

  
   Compare the 'firstLetter' retrieved in STEP 11 to lower case
   'j'. If the same, call byeSpeaker's 'speak' method with the current name
   in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
   name in the loop.
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();