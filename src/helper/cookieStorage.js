export function setIteam(key, value) {
  document.cookie = `${key}=${value}`;
}

export function getItem(item) {
  if (typeof document !== "object") return "";
  const cookies = document?.cookie?.split(";");
  return getItemFromCookie(cookies, item);
}

export function getItemFromCookie(cookies, item) {
  return cookies.reduce((acc, currCookie) => {
    const trimmedCookie = currCookie.trim();
    if (trimmedCookie.startsWith(`${item}=`)) {
      acc = trimmedCookie.replace(`${item}=`, "");
    }
    if (acc !== "") {   
      return acc;
    }  
    return acc;
  }, "");
}

export function clearAllCookie() {
  const cookies = document.cookie.split(";");
  cookies.forEach((currCookie) => {
    const trimmedCookie = currCookie.trim();
    const eqPos = trimmedCookie.indexOf("=");
    const name = eqPos > -1 ? trimmedCookie.substr(0, eqPos) : trimmedCookie;
    document.cookie = `${name}=;Expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;
  });
}
