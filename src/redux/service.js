const fetch = window.fetch

export const apiCall = {
  getRequest: (apiUrl, callHeaders) => {
    return fetch(apiUrl, {
      method: 'GET',
      headers: callHeaders
    }).then(async res => {
      if (res.status === 200) {
        return res.json()
      } else {
        return { error: 'There was a problem sending your request' }
      }
    }).catch(err => {
      return err
    })
  },
}