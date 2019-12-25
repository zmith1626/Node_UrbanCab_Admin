function validateForm(e) {
    $('#getTouchForm').form({
        fields: {
            fName: {
                identifier: 'fName',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter First Name.'
                    },
                    {
                        type: 'doesntContain[<]',
                        prompt: 'Please enter a Valid First Name.'
                    }
                ]
            },
            lName: {
                identifier: 'lName',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter Last Name.'
                    },
                    {
                        type: 'doesntContain[<]',
                        prompt: 'Please enter a Valid Last Name.'
                    }
                ]
            },
            eAddress: {
                identifier: 'eAddress',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter Email.'
                    },
                    {
                        type: 'email',
                        prompt: 'Please enter a valid email.'
                    },
                ]
            },
            phone: {
                identifier: 'phone',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter Contact No.'
                    },
                    {
                        type: 'number',
                        prompt: 'Please enter a valid contact No.'
                    },
                    {
                        type: 'exactLength[10]',
                        prompt: 'Please enter a valid contact No.'
                    }
                ]
            },
            subject: {
                identifier: 'subject',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please select a subject.'
                    }
                ]
            },
            msg: {
                identifier: 'msg',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please select fill in your message.'
                    },
                    {
                        type: 'doesntContain[<]',
                        prompt: 'Please enter a Valid Characters.'
                    }
                ]
            },
        }
    });
    if ($('#getTouchForm').form('is valid')) {
        e.preventDefault();
        return 0;
    } else {
        return 4;
    }
}

$('#submitBtn').on('click', function (e) {
    var returnCode = validateForm(e);
    if (returnCode == 4) return;
    else {
        alert('Success');
    }
});

$('.item').on('click', function () {
    $('.item').removeClass('active');
    $(this).addClass('active');
});

function validateAdminForm(e) {
    $('#adminLoginForm').form({
        fields: {
            adminID: {
                identifier: 'adminID',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter Admin ID.'
                    },
                    {
                        type: 'doesntContain[<]',
                        prompt: 'Please enter a Valid Admin ID.'
                    }
                ]
            },
            eAddress: {
                identifier: 'eAddress',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter Email.'
                    },
                    {
                        type: 'email',
                        prompt: 'Please enter a valid email.'
                    },
                ]
            },
            password: {
                identifier: 'password',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter Password.'
                    },
                    {
                        type: 'minLength[10]',
                        prompt: 'Please enter a valid Password.'
                    }, {
                        type: 'doesntContain[<]',
                        prompt: 'Please enter a Valid Password.'
                    }
                ]
            },
            admin: {
                identifier: 'admin',
                rules: [
                    {
                        type: 'checked',
                        prompt: 'You must accept that you are an agent'
                    }
                ]
            },
            terms: {
                identifier: 'terms',
                rules: [
                    {
                        type: 'checked',
                        prompt: 'You must agree to the terms and conditions'
                    }
                ]
            }
        }
    });
    if ($('#adminLoginForm').form('is valid')) {
        e.preventDefault();
        return 0;
    } else {
        return 4;
    }
}

$('#adminSubmitBtn').on('click', function (e) {
    var returnCode = validateAdminForm(e);
    if (returnCode == 4) {
        return;
    }
    $('#adminLoginForm').addClass('loading');
    var loginData = getLoginFormData();
    firebase.auth().signInWithEmailAndPassword(loginData.eAddress, loginData.password).then(userCred => {
        let Uid = { Uid: userCred.user.uid };
        $.ajax({
            url: 'http://localhost:4000/login',
            type: "POST",
            data: Uid,
            headers: {
                'authorization': `Bearer ${loginData.adminID}`
            },
            success: (htmlPage) => {
                if (htmlPage.statusCode) {
                    firebase.auth().signOut();
                    displayAccessDeniedMessage(response.message);
                    $('.#adminLoginForm').removeClass('loading');
                } else {
                    var w = window.open('dashboard');
                    $(w.document).open();
                    $(w.document.body).html(htmlPage);
                    $(w.document).close();
                    $('.#adminLoginForm').removeClass('loading');
                }
            },
            error: (jqXHR, textStatus, errorThrown) => {
                displayErrorMessage(errorThrown);
                $('#adminLoginForm').removeClass('loading');
            }
        })
    }).catch((err) => {
        displayErrorMessage(err);
        $('#adminLoginForm').removeClass('loading');
    });
});

function displayAccessDeniedMessage(message) {
    $('#header').html('<i class="exclamation triangle icon"></i> Warning!!');
    $('#content').text(message);
    $('#button').text('Understood');
    $('#loginUserModal').modal('show');
}

function displayErrorMessage(errorThrown) {
    $('#header').html('<i class="exclamation triangle icon"></i> Error Occured !!');
    $('#content').text(errorThrown);
    $('#button').text('OK');
    $('#loginUserModal').modal('show');
}

function getLoginFormData() {
    $form = $('#adminLoginForm');
    var formData = $form.form('get values');
    return formData;
}