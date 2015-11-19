/* globals useInCode */
var app = {};
var yes, continueText, message;

if (app.props.role != 'BROTHA')
{
    yes = null;
    continueText = 'Nah, he wid me.';
    messgae = 'You are my homeboy. Respekt.';
}

useInCode(yes, continueText, message);
