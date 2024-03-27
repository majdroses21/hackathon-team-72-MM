export default function<T>(
    request: Parameters<typeof $fetch<T>>[0],
    opts?: Parameters<typeof $fetch<T>>[1],
  ) {
    const loggedIn = useState('loggedIn', ()=>true)

    const token = useState('token', () => 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzExNDg5MTk0LCJleHAiOjE3MTE0OTI3OTQsIm5iZiI6MTcxMTQ4OTE5NCwianRpIjoiSUdES2RZRktaVDJJYUh4aiIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.UbVEvg26IyxPQf5hnNxn-DXr9ck7p--Nctsb1pmc9n8')

    return $fetch<T>('http://127.0.0.1:8000' + request, {
      ...opts,
      headers: {
        Authorization: loggedIn.value ? `Bearer ${token.value}` : '',
        ...opts?.headers,
      },
    })
  }