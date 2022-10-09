export function createRelativeScore(api, data) {
  return api("POST", "/relativeScore/createRelativeScore", data);
}

export function getRelativeScore(api, data) {
  return api("POST", "/relativeScore/getRelativeScore", data);
}

export function modifyRelativeScore(api, data) {
  return api("POST", "/relativeScore/modifyRelativeScore", data);
}

export function getRelativeScores(api, data) {
  return api("POST", "/relativeScore/getRelativeScores", data);
}

export function removeRelativeScore(api, data) {
  return api("POST", "/relativeScore/removeRelativeScore", data);
}
