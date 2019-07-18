/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here

var facebookProfile = {name: "Bamse",
                       friends: 2,
                       messages: ["Hello","What's up"],
                       postMessage: function(message){
                         facebookProfile.messages.push(message);  
                       },
                       deleteMessage: function(index){
                        var remove_friend = facebookProfile.messages.splice(index,1);  
                        return remove_friend;
                       },
                       addFriend: function(){
                       return ++facebookProfile.friends;
                       },
                       removeFriend: function(){
                       return --facebookProfile.friends;
                       }
}

