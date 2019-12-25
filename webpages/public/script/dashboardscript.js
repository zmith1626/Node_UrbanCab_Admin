$('.sidemenu').on('click', function () {
    $('.sidemenu').removeClass('active');
    $(this).addClass('active');
    switch (Number(this.id)) {
        case 1: {
            $('.divone').show();
            $('.divtwo').hide();
            $('.divthree').hide();
            $('.divfour').hide();
            break;
        }
        case 2: {
            $('.divone').hide();
            $('.divtwo').show();
            $('.divthree').hide();
            $('.divfour').hide();
            break;
        }
        case 3: {
            $('.divone').hide();
            $('.divtwo').hide();
            $('.divthree').show();
            $('.divfour').hide();
            break;
        }
        case 4: {
            $('.divone').hide();
            $('.divtwo').hide();
            $('.divthree').hide();
            $('.divfour').show();
            break;
        }
    }
});

function validateRegisterForm(e) {
    $('#vehicleReg').form({
        fields: {
            model: {
                identifier: 'model',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter valid vehicle model.'
                    },
                    {
                        type: 'doesntContain[<]',
                        prompt: 'Please enter a valid vehicle model.'
                    }
                ]
            },
            year: {
                identifier: 'year',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter valid vehicle year.'
                    },
                    {
                        type: 'number',
                        prompt: 'Please enter a valid vehicle year.'
                    }
                ]
            },
            vin: {
                identifier: 'vin',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter valid vehicle vin.'
                    },
                    {
                        type: 'doesntContain[<]',
                        prompt: 'Please enter a valid vehicle vin.'
                    }
                ]
            },
            registration: {
                identifier: 'registration',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter valid vehicle registration no.'
                    },
                    {
                        type: 'doesntContain[<]',
                        prompt: 'Please enter a valid vehicle registration no.'
                    }
                ]
            },
            driver: {
                identifier: 'driver',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter valid driver id.'
                    },
                    {
                        type: 'doesntContain[<]',
                        prompt: 'Please enter a valid driver id.'
                    }
                ]
            },
            fName: {
                identifier: 'fName',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter Owner First Name.'
                    },
                    {
                        type: 'doesntContain[<]',
                        prompt: 'Please enter a valid Owner First Name.'
                    }
                ]
            },
            lName: {
                identifier: 'lName',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter Owner Last Name.'
                    },
                    {
                        type: 'doesntContain[<]',
                        prompt: 'Please enter a valid Owner Last Name.'
                    }
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
            ownerIdType: {
                identifier: 'ownerIdType',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please Select an Owner ID type.'
                    }
                ]
            },
            id: {
                identifier: 'id',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter Owner ID Details.'
                    },
                    {
                        type: 'doesntContain[<]',
                        prompt: 'Please enter a valid Owner ID Details.'
                    }
                ]
            },
            house: {
                identifier: 'house',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter Building Details.'
                    },
                    {
                        type: 'doesntContain[<]',
                        prompt: 'Please enter a valid Building Details.'
                    }
                ]
            },
            address: {
                identifier: 'address',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter address Details.'
                    },
                    {
                        type: 'doesntContain[<]',
                        prompt: 'Please enter a valid address Details.'
                    }
                ]
            },
            state: {
                identifier: 'state',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter address Details.'
                    }
                ]
            },
            pin: {
                identifier: 'pin',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter pin.'
                    },
                    {
                        type: 'number',
                        prompt: 'Please enter a valid pin.'
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
    if ($('#vehicleReg').form('is valid')) {
        e.preventDefault();
        return 0;
    } else {
        return 4;
    }
}

function validateAccountForm(e) {
    $('#createAccnt').form({
        fields: {
            fName: {
                identifier: 'fName',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter Owner First Name.'
                    },
                    {
                        type: 'doesntContain[<]',
                        prompt: 'Please enter a valid Owner First Name.'
                    }
                ]
            },
            lName: {
                identifier: 'lName',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter Owner Last Name.'
                    },
                    {
                        type: 'doesntContain[<]',
                        prompt: 'Please enter a valid License No.'
                    }
                ]
            },
            License: {
                identifier: 'License',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter License No.'
                    },
                    {
                        type: 'doesntContain[<]',
                        prompt: 'Please enter a valid Owner Last Name.'
                    }
                ]
            },
            vehicle: {
                identifier: 'vehicle',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please Select an Vehicle No.'
                    },
                    {
                        type: 'doesntContain[<]',
                        prompt: 'Please enter a valid Vehicle No.'
                    }
                ]
            },
            email: {
                identifier: 'email',
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
                        prompt: 'Please enter a valid Contact No.'
                    }, {
                        type: 'exactLength[10]',
                        prompt: 'Please enter a Valid Contact No.'
                    }
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
            confirmpassword: {
                identifier: 'confirmpassword',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter a Password'
                    },
                    {
                        type: 'match[password]',
                        prompt: 'Passwords do not match'
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
    if ($('#createAccnt').form('is valid')) {
        e.preventDefault();
        return 0;
    } else {
        return 4;
    }
}

function validateDeleteForm(e) {
    $('#delAccnt').form({
        fields: {
            accountID: {
                identifier: 'accountID',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter account ID.'
                    },
                    {
                        type: 'doesntContain[<]',
                        prompt: 'Please enter a valid account ID.'
                    }
                ]
            }
        }
    });
    if ($('#delAccnt').form('is valid')) {
        e.preventDefault();
        return 0;
    } else {
        return 4;
    }
}

$('#public').on('click', function () {
    $('#private').removeClass('green');
    $(this).addClass('green');
    $('#publicCab').show();
    $('#privateCab').hide();
});

$('#private').on('click', function () {
    $('#public').removeClass('green');
    $(this).addClass('green');
    $('#publicCab').hide();
    $('#privateCab').show();
});

$('#Register').on('click', function (e) {
    var returnCode = validateRegisterForm(e);
    if (returnCode == 4) {
        return;
    } else {
        $('#vehicleReg').addClass('loading');
        var vehRegData = getVehicleRegFormData();
        $.ajax({
            url: 'http://localhost:4000/vehicles',
            type: 'POST',
            data: JSON.stringify(vehRegData),
            dataType: 'json',
            contentType: 'application/json',
            headers: {
                'authorization': `Bearer ${firebase.auth().currentUser.uid}`
            },
            success: (response) => {
                formatMessageDisplay(response.status, response.message);
                $('#vehicleReg').removeClass('loading');
            },
            error: (jqXHR, textStatus, errorThrown) => {
                formatMessageDisplay(textStatus, errorThrown);
                $('#vehicleReg').removeClass('loading');
            }
        });
    }
});

function formatMessageDisplay(status, message) {
    if (String(status) == "OK") {
        $('#messageHeader').html('<i class="check circle icon"></i> Success !!');
        $('#messageContent').text(`${message}`);
        $('#messageButton').text('OK');
        $('#messageModal').modal({ closable: false }).modal('show');
    } else {
        $('#messageHeader').html('<i class="exclamation triangle icon"></i> Error Occured !!');
        $('#messageContent').text(`${message}`);
        $('#messageButton').text('OK');
        $('#messageModal').modal({ closable: false }).modal('show');
    }
}

$('#cAccnt').on('click', function (e) {
    var returnCode = validateAccountForm(e);
    if (returnCode == 4) {
        return;
    } else {
        $('#createAccnt').addClass('loading');
        var driverData = getdriverRegistrationData();
        $.ajax({
            url: 'http://localhost:4000/drivers',
            type: 'POST',
            data: JSON.stringify(driverData),
            dataType: 'json',
            contentType: 'application/json',
            headers: {
                'authorization': `Bearer ${firebase.auth().currentUser.uid}`
            },
            success: (response) => {
                formatMessageDisplay(response.status, response.message);
                $('#createAccnt').removeClass('loading');
            },
            error: (jqXHR, textStatus, errorThrown) => {
                formatMessageDisplay(textStatus, errorThrown);
                $('#createAccnt').removeClass('loading');
            }
        });
    }
});

$('#dAccnt').on('click', function (e) {
    var returnCode = validateDeleteForm(e);
    if (returnCode == 4) {
        return;
    } else {
        $('#deleteAccntModal').modal({
            closable: false,
            onDeny: function () {
                return;
            },
            onApprove: function () {
                $('#deleteAccntModal').modal('hide');
                $('#delAccnt').addClass('loading');
                let formdata = getDeleteAccountData();
                $.ajax({
                    url: 'http://localhost:4000/drivers/delete',
                    type: 'POST',
                    data: JSON.stringify(formdata),
                    dataType: 'json',
                    contentType: 'application/json',
                    headers: {
                        'authorization': `Bearer ${firebase.auth().currentUser.uid}`
                    },
                    success: (response) => {
                        formatMessageDisplay(response.status, response.message);
                        $('#delAccnt').removeClass('loading');
                    },
                    error: (jqXHR, textStatus, errorThrown) => {
                        formatMessageDisplay(textStatus, errorThrown);
                        $('#delAccnt').removeClass('loading');
                    }
                });
            }
        }).modal('show');
    }
});

$('#logout').on('click', function () {
    const URL = "http://localhost:4000";
    $('#signOutModal').modal({
        closable: false,
        onDeny: function () {
            return;
        },
        onApprove: function () {
            firebase.auth().signOut().then(() => {
                window.open(URL, '_self');
            });
        }
    }).modal('show');
});

function getVehicleRegFormData() {
    $form = $('#vehicleReg');
    var formData = $form.form('get values');
    return formData;
}

function getdriverRegistrationData() {
    $form = $('#createAccnt');
    var formData = $form.form('get values');
    return formData;
}

function getDeleteAccountData() {
    $form = $('#delAccnt');
    var formData = $form.form('get values');
    return formData;
}