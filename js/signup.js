$(document).ready(function () {
document.getElementById("googlesignin").addEventListener("click",googlesign,false);
    $('#myform').validate({ 
        rules: {
            username:{
              required:true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            },
            password2: {
                required: true,
                equalTo:"#password"

            }
        },

         errorPlacement: function(error, element) {
           offset = element.offset();
            error.insertAfter(element)
            error.addClass('message');  // add a class to the wrapper
            error.css('position', 'absolute');
            //error.css('left', offset.left + element.outerWidth());
            error.css('left', offset.left-40 );

            error.css('top', offset.top-10);

    },



        messages: {
              username: "Please enter your username",
              email: {
                required:"Please enter your email",
                email:"Not a valid email id"

            },
              password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long"
              },
              password2: {
                required: "Please re-type your password",
                equalTo:"Password doesn't match"
              }
            },

        submitHandler: function (form) { 
            form.submit();
        }
    });

});
    
/*$("#googlesignin").click(function(){
console.log("clicked");
alert("clicked");
});*/

function googlesign(){
    console.log("google");
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');

    provider.setCustomParameters({
  'login_hint': 'user@example.com'
});
    firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user);

  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}