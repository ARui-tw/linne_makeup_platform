export function createAbsoluteScore(api, data, headers) {
  return api("POST", "/absoluteScore/createAbsoluteScore", data, headers);
}

export function getAbsoluteScore(api, data) {
  return api("POST", "/absoluteScore/getAbsoluteScore", data);
}

export function modifyAbsoluteScore(api, data) {
  return api("POST", "/absoluteScore/modifyAbsoluteScore", data);
}

export function getAbsoluteScores(api, data) {
  return api("POST", "/absoluteScore/getAbsoluteScores", data);
}

export function removeAbsoluteScore(api, data) {
  return api("POST", "/absoluteScore/removeAbsoluteScore", data);
}
