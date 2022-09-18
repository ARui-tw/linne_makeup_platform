export function createArtwork(api, data, headers) {
  return api("POST", "/artwork/createArtwork", data, headers);
}

export function getArtwork(api, data) {
  return api("POST", "/artwork/getArtwork", data);
}

export function modifyArtwork(api, data) {
  return api("POST", "/artwork/modifyArtwork", data);
}

export function getArtworks(api, data) {
  return api("POST", "/artwork/getArtworks", data);
}

export function removeArtwork(api, data) {
  return api("POST", "/artwork/removeArtwork", data);
}
