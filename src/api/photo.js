export function createPhoto(api, data, headers) {
  return api("POST", "/photo/createPhoto", data, headers);
}

export function getPhoto(api, data) {
  return api("POST", "/photo/getPhoto", data);
}

export function getRandomPhoto(api, data) {
  return api("POST", "/photo/getRandomPhoto", data);
}

export function modifyPhoto(api, data) {
  return api("POST", "/photo/modifyPhoto", data);
}

export function getPhotos(api, data) {
  return api("POST", "/photo/getPhotos", data);
}

export function removePhoto(api, data) {
  return api("POST", "/photo/removePhoto", data);
}
