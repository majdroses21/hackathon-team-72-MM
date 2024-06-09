/*
export default function (request, opts) {
    const loggedIn = useState('loggedIn', ()=>true);
    const token = useState('token', () => 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzExNDg5MTk0LCJleHAiOjE3MTE0OTI3OTQsIm5iZiI6MTcxMTQ4OTE5NCwianRpIjoiSUdES2RZRktaVDJJYUh4aiIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.UbVEvg26IyxPQf5hnNxn-DXr9ck7p--Nctsb1pmc9n8')


    // const { loggedIn, token } = useAuthStore();
  
    let headers = {};
    if (opts) {
      headers = { ...opts.headers };
    }
    if (loggedIn) {
      headers.Authorization = `Bearer ${token}`;
    }
  ///*
    const { data, error } = useFetch('http://127.0.0.1:8000' + request, {
      ...opts,
      headers,
    });
  
    return { data, error };
  }
  ///

  return  useFetch('http://127.0.0.1:8000' + request, {
    ...opts,
    headers,
  })
}
*/
export default function (
  request,
  opts,
) {
  console.log("opts is :" , opts);
  const loggedIn = useState('loggedIn', () => true)

  const token = localStorage.getItem('token');

  let headers = {};
  if (opts) {
    headers = { ...opts.headers }
  }
  if (loggedIn.value) {
    console.log("loged in");
    headers.Authorization = `Bearer ${token}`;
  }

  return useFetch('http://127.0.0.1:8000' + request, {
    ...opts,
    headers,
  })
}