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
                minlength: 6,
                equalTo:"#password"

            }
        },

         errorPlacement: function(error, element) {
           offset = element.offset();
            error.insertAfter(element)
            error.addClass('message');  // add a class to the wrapper
            error.css('position', 'absolute');
            //error.css('left', offset.left + element.outerWidth());
            error.css('left', offset.left );

            error.css('top', offset.top);

    },



        messages: {
              username: "Please enter your username",
              email: "Please enter your email",
              password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long"
              },
              password2: {
                equalTo:"Password doesn't match"
              }
            },

        submitHandler: function (form) { 
            form.submit();
        }
    });

});