import {parseJwt} from "./jwt";
import {getCookie} from "./cookie";

export const getToken = (cookieString = null) => {
    let token;
    if(cookieString === null)
        token = getCookie('IS_ACCESS_TOKEN');
    else
        token = getCookieFromString(cookieString, 'IS_ACCESS_TOKEN');
    const decoded = parseJwt(token);
    if (!decoded)
        return null;
    // else if(decoded.iss.includes("islamic-sources.com"))
    //     return null;
    return token;
};

export const getCookieFromString = (string, cookieName) => {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(string);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

export const getRequest = async (method, token = null, config = {}) => {
    const get = await import('axios').then(res => res.default.get);
    token ??= await getToken();
    return await get(process.env.BASE_URL + "/" + method, {headers: token ? {Authorization: "Bearer " + token} : {}, ...config});
};
export const postRequest = async (method, body = {}, headers = {}, config = {}, cookieStr = null) => {
    const post = await import('axios').then(res => res.default.post);
    const authorization = !headers.Authorization ? {
        Authorization: "Bearer " + (await getToken(cookieStr))
    } : {};
    return await post(process.env.BASE_URL + "/" + method, body, {...config, headers: {...authorization, ...headers}})
}