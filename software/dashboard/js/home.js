

const logOutButton = document.querySelector('.log-out');

logOutButton.addEventListener('click', logOutOfSite);

//the functions removes the localstored token and sens you back to the login page
function logOutOfSite() {
    window.localStorage.removeItem('token');

    window.location.href = ('/index.html');
}