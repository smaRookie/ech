import axios from 'axios'
export function getDate (url) {
  return new Promise((resolve, reject) => {
    axios.get(url).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}
