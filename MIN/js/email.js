function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

var m = new mandrill.Mandrill('5-mwUBkbhGQo3upH5mVO4A');

var params = {
    "message": {
        "from_email": "website@identity.io",
        "to": [{
            "email": "alex@identity.io"
        }],
        "subject": "Website Signup",
        "text": "",
        "important": true,
        "async": true
    }
};

function sendEmail() {
    $('button').prop("disabled",true)
    var email = $('#email').val()
    params.message.text = 'IDIO: Coming Soon Signup: ' + email
    m.messages.send(params, function(res) {
        thankyou()
    }, function(err) {
        error()
    });
}

function thankyou(){
    $('#emailform').addClass('hide')
    $('#thankyou').removeClass('hide')
}

function error(){
    $('#emailform').addClass('hide')
    $('#error').removeClass('hide')
}
