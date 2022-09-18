export function createKeyword(api, data, headers) {
  return api("POST", "/keyword/createKeyword", data, headers);
}

export function getKeyword(api, data) {
  return api("POST", "/keyword/getKeyword", data);
}

export function modifyKeyword(api, data) {
  return api("POST", "/keyword/modifyKeyword", data);
}

export function getKeywords(api, data) {
  return api("POST", "/keyword/getKeywords", data);
}

export function removeKeyword(api, data) {
  return api("POST", "/keyword/removeKeyword", data);
}
