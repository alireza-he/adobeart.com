import {getCookie as cookieGet, setCookies as cookiesSet, removeCookies} from 'cookies-next';

export const getCookie = (cookieName, options) => {
    return cookieGet(cookieName, options);
};

export const setCookie = async (cookieName, cookieValue, expireDays = 5) => {
    cookiesSet(cookieName, cookieValue, {maxAge: expireDays * 24 * 60});
};

export const deleteCookie = async (cookieName, options = null) => {
    removeCookies(cookieName, options);
};

export const deleteCookieInSSR = async (res, cookieName = []) => {
    if(typeof cookieName === "object" && cookieName.length)
        cookieName = cookieName.map(data => data + `=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`)
    else if(typeof cookieName === "string")
        cookieName = [cookieName + `=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`]
    res.setHeader(
        "Set-Cookie",
        cookieName
    );
};