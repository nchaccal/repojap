function init() {
    gapi.load('auth2', function() {
      /* Ready. Make a call to gapi.auth2.init or some other API */
      var googleUser; // The current user

      gapi.load('auth2', function(){
          auth2 = gapi.auth2.init({
              client_id: '879171387926-h5b1okbkhir4hd4p7bh4ch8mmm7pdl5a.apps.googleusercontent.com'
          });
          auth2.attachClickHandler('signin-button', {}, onSuccess, onFailure);
      
          auth2.isSignedIn.listen(signinChanged);
          auth2.currentUser.listen(userChanged); // This is what you use to listen for user changes
      });  
      
      var signinChanged = function (val) {
          console.log('Signin state changed to ', val);
      };
      
      var onSuccess = function(user) {
          console.log('Signed in as ' + user.getBasicProfile().getName());
          // Redirect somewhere
      };
      
      var onFailure = function(error) {
          console.log(error);
      };
      
      function signOut() {
          auth2.signOut().then(function () {
              console.log('User signed out.');
          });
      }        
      
      var userChanged = function (user) {
          if(user.getId()){
            // Do something here
          }
      };
    });
  }

function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
      }
