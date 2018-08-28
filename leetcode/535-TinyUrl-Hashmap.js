/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const BASE_URL = "http://tinyurl.com/";
const alphanumerics = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let map = new Map();

function getRandom() {
    let rand = '';
    //Javascript math.random generates a floating point pseudo random floating number between 0 and 1.
    for(let i=0;i<6;i++) {
        let rangeRandom = Math.floor(Math.random()*62);
        rand += alphanumerics.charAt(rangeRandom);
    }
    return rand;
}

var encode = function(longUrl) {
    let key = getRandom();
    while(map[key] !== undefined) {
        key = getRandom();
    }
    map[key] = longUrl;
    return BASE_URL + key;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    let key = shortUrl.replace(BASE_URL, '');
    return map[key];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */