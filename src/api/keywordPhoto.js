export function createKeywordPhoto(api, data) {
	return api("POST", "/keywordPhoto/createKeywordPhoto", data);
  }
  
  export function getKeywordPhoto(api, data) {
	return api("POST", "/keywordPhoto/getKeywordPhoto", data);
  }
  
  export function modifyKeywordPhoto(api, data) {
	return api("POST", "/keywordPhoto/modifyKeywordPhoto", data);
  }
  
  export function getKeywordPhotos(api, data) {
	return api("POST", "/keywordPhoto/getKeywordPhotos", data);
  }
  
  export function removeKeywordPhoto(api, data) {
	return api("POST", "/keywordPhoto/removeKeywordPhoto", data);
  }
  