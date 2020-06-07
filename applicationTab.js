localStorage.setItem('anime', 'elfen lied');
localStorage.removeItem('anime');
// localStorage.clear(); // remove all items at once
console.log(localStorage.getItem('anime'));

// sessionStorage.setItem('anime', 'elfen lied');
console.log(sessionStorage.getItem('anime'));

// cookies - default expiration - session
document.cookie = 'anime=elfen lied;';
document.cookie = 'movie=dtb; expires=Sun, 7 June 21:06:00 GMT; path=/'; // path - cookie associated with / url only
console.log(document.cookie);
const anime = document.cookie.split('=')[1];
console.log(anime);

// delete a cookie - add empty value and expiration date which already expired
document.cookie = 'anime=; expires=Sun, 7 June 2019 21:06:00 GMT; path=/'