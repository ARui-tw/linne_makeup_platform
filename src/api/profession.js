export function createProfession(api, data, headers) {
  return api("POST", "/profession/createProfession", data, headers);
}

export function getProfession(api, data) {
  return api("POST", "/profession/getProfession", data);
}

export function modifyProfession(api, data) {
  return api("POST", "/profession/modifyProfession", data);
}

export function getProfessions(api, data) {
  return api("POST", "/profession/getProfessions", data);
}

export function removeProfession(api, data) {
  return api("POST", "/profession/removeProfession", data);
}
