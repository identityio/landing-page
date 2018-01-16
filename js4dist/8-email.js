function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

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
    
    $.ajax({
      type: "POST",
      url: 'https://4ge.io/run/57dc2d227f6bc6872b8a4e81',
      data: {body: email + ' signed up'},
      success: thankyou
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
