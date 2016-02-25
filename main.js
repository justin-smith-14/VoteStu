

$('#vote').on('submit', function() {
    var baseUrl = 'https://docs.google.com/forms/d/1EfMbgiUZNYXykAkeelbwlckQucAkfIxzThHOnj7jH5M/formResponse?';
    var submitRef = '&submit=Submit';
    var firstName = encodeURIComponent($('#firstName').val());
    var firstNameId = 'entry.2022028264';
    var lastName = encodeURIComponent($('#lastName').val());
    var lastNameId = 'entry.35492775';

    var submitUrl = (baseUrl + firstNameId + '=' + firstName + '&' + lastNameId + '=' + lastName + submitRef);
    $(this)[0].action = submitUrl;
    var url = $(location).attr('protocol');
    $(location).attr('href', url + 'share.html');
});

function validateFirst() {
    var x = document.forms["voteForStu"]["firstName"].value;
    if (x == " ") {
        alert("Please complete that name fields");
        return false;
    }
}

function validateLast() {
    var x = document.forms["voteForStu"]["lastName"].value;
    if (x == " ") {
        alert("Please complete that name fields");
        return false;
    }
}
