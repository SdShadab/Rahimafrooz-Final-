//////////////////////////////////
// AccountsTemplates configuration
//////////////////////////////////


//Fields

AccountsTemplates.addField({
    _id: "username",
    type: "text",
    displayName: "Username",
    required: true,
    minLength: 3,
    errStr: 'error.minChar'
});

AccountsTemplates.removeField('email');
AccountsTemplates.addField({
    _id: 'email',
    type: 'email',
    required: true,
    re: /.+@(.+){2,}\.(.+){2,}/,
    displayName: "E-mail",
    trim: true,
    lowercase: true
});
//this is the restriction code:
/*Accounts.config({
  restrictCreationByEmailDomain: function(email) {
    var domain = email.slice(email.lastIndexOf("@")+1); 
    var allowed = ["rahimafrooz.com"];
 // document.getElementsByClassName("at-error").innerHTML = "rahimafrooz employees allowed";
 errStr: 'Only Rahimafrooz email IDs are valid';
    return _.contains(allowed, domain);
    
}
});
*/
//the above code ends here

//still cant modify the error code
AccountsTemplates.removeField('password');
AccountsTemplates.addField({
    _id: 'password',
    type: 'password',
    required: true,
    minLength: 8,
    errStr: 'error.minChar'
});


 AccountsTemplates.addField({
 _id: "username_and_email",
 type: "text",
 displayName: "Username",
  required: true,
 placeholder: "Username or E-mail",
 });
 


//Routes
AccountsTemplates.configureRoute("signIn");
AccountsTemplates.configureRoute("signUp");
AccountsTemplates.configureRoute("forgotPwd");
AccountsTemplates.configureRoute("resetPwd");
//AccountsTemplates.configureRoute("changePwd");
//AccountsTemplates.configureRoute("enrollAccount");
//AccountsTemplates.configureRoute("verifyEmail");


// Options
AccountsTemplates.configure({
    enablePasswordChange: false,
    showForgotPasswordLink: true,
    confirmPassword: false,
    overrideLoginErrors: true,
	showPlaceholders: true,
    negativeFeedback: false,
    positiveFeedback: false,
    negativeValidation: true,
    positiveValidation: true
    /*
     sendVerificationEmail: true,
     continuousValidation: false,
     showLabels: true,
     forbidClientAccountCreation: false,
     formValidationFeedback: true,
     homeRoutePath: "/",
     showAddRemoveServices: false,
     showPlaceholders: true,
     */
});


// Initialization
Meteor.startup(function(){
    AccountsTemplates.init();
});
