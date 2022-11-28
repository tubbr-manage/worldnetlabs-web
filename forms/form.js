


// Add Event Listner to Close Btn
document.querySelector('#form-btn').addEventListener("click", (e) => formSubmit(e));



function validateContactForm(form) {
    valid = true;
    document.querySelectorAll('.field-error').forEach((field) => field.classList.remove('field-error'));
    if (form.first_name.value == "") {
        form.first_name.classList.add('field-error');
        valid = false;
    }
    if (form.last_name.value == "") {
        form.last_name.classList.add('field-error');
        valid = false;
    }
    if (!form.email.value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
        form.email.classList.add('field-error');
        valid = false;
    }
    if (form.phone.value == "") {
        form.message.classList.add('field-error');
        valid = false;
    }
    if (form.how_help.value == "") {
        form.message.classList.add('field-error');
        valid = false;
    }
    if (form.when.value == "") {
        form.message.classList.add('field-error');
        valid = false;
    }
    return valid;
}

function formSubmit(e) {
    e.preventDefault();

    let form = document.querySelector('.form');

    try {
        console.log('clicked');
        isvalid = validateContactForm(form);
        if (isvalid) {

            var form_data = new FormData(form);

            for (var pair of form_data.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }

            $(function () {

                $.ajax({
                    data: form_data,
                    type: 'POST',
                    url: 'forms/email.php',
                    contentType: false,
                    processData: false,
                    success: function (feedback) {
                        console.log("the feedback from your API: " + feedback);
                        $('#form-btn').hide(200);
                        $('.thank-you').show(300);
                        form.reset();
                    },
                    error: function () {
                        $('.error-message').show(300);
                    }
                });
            });

        }
        else {
            // $('.toast').show(300).delay(6000).hide(300);
        }

    }
    catch (e) { console.log(e) }
    finally {
        // form.reset();
    }
}