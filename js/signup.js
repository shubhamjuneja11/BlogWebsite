$(document).ready(function () {

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