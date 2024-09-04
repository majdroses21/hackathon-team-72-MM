export default function (
  request,
  opts,
) {
  console.log("opts is :" , opts);
  let loggedIn = useCookie("loggedIn").value; 

  const token = useCookie("token").value;

  let headers = {};
  if (opts) {
    headers = { ...opts.headers }
  }
  if (loggedIn) {
    headers.Authorization = `Bearer ${token}`;
  }
// https://api-mahrtex.000webhostapp.com
//http://api-mx.byethost7.com
// http://127.0.0.1:8000
  return useFetch('http://127.0.0.1:8000' + request, {
    ...opts,
    headers,
  })
}