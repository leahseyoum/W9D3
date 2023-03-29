const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  
  options.headers = {
    'X-CSRF-Token': csrfToken,
    'Accept': 'application/json',
    ...options.headers
  };
  let res =  await fetch(url, options);
  
  if(res.ok){
    let data = await res.json()
    return data;
  }else if(!res.ok){
    throw new Error(res);
  };

}


export function followUser(id) {
  customFetch(`/users/${id}/follow`,{method:'POST'})
}
export function unfollowUser(id) {
  customFetch(`/users/${id}/follow`,{method:'DELETE'})
}