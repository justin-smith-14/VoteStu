$('#vote').on('submit', function() {
    var firstNameValue = $('#firstName').val();
    var lastNameValue = $('#lastName').val();

    if (firstNameValue.length < 1 || !firstNameValue.trim() || lastNameValue.length < 1 || !lastNameValue.trim()) {
        alert('Please complete all fields');
        console.log('Please complete all fields');
    } else {
        var baseUrl = 'https://docs.google.com/forms/d/1EfMbgiUZNYXykAkeelbwlckQucAkfIxzThHOnj7jH5M/formResponse?';
        var submitRef = '&submit=Submit';
        var firstName = encodeURIComponent(firstNameValue);
        var firstNameId = 'entry.2022028264';
        var lastName = encodeURIComponent(lastNameValue);
        var lastNameId = 'entry.35492775';

        var submitUrl = (baseUrl + firstNameId + '=' + firstName + '&' + lastNameId + '=' + lastName + submitRef);
        $(this)[0].action = submitUrl;
        var url = $(location).attr('protocol');
        $(location).attr('href', url + 'share.html');
    }

});

