$(document).ready(function () {
    $("#contactus").click(function () {
        if ($("#form_name").val() == "" || $("#form_phone").val() == "" || $("#form_msg").val() == "") {
            alert("資料填寫未完全");
            return;
        }

        let data = {
            'entry.1736207826': $("#form_name").val(),
            'entry.1217188671': $("#form_phone").val(),
            'entry.9806926296': $("#form_msg").val()
        };
        $.ajax({
            type: 'POST',
            url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfUndBVFhrhz6kc35SbyuT0dxOc3gbRxRbbx3TnJpKCRLH8DQ/formResponse',
            data: data,
            contentType: 'application/json',
            dataType: 'jsonp',
            complete: function () {
                alert('資料已送出！我們會盡快與您聯繫！');
                $("#form_name").val("");
                $("#form_phone").val("");
                $("#form_msg").val("");
            }
        });
    });


});


