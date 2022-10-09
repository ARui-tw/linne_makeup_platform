export function createPhotoRelativeScore(api, data) {
  return api("POST", "/photoRelativeScore/createPhotoRelative", data);
}

export function getPhotoRelativeScore(api, data) {
  return api("POST", "/photoRelativeScore/getPhotoRelative", data);
}

export function modifyPhotoRelativeScore(api, data) {
  return api("POST", "/photoRelativeScore/modifyPhotoRelative", data);
}

export function getPhotoRelativeScores(api, data) {
  return api("POST", "/photoRelativeScore/getPhotoRelative", data);
}

export function removePhotoRelativeScore(api, data) {
  return api("POST", "/photoRelativeScore/removePhotoRelative", data);
}
