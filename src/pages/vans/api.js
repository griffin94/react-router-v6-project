export const loader = ({ request, params }) => ({
  data: (async () => {
    const url = new URL(request.url);
    url.pathname = 'vans';
    console.log('request');
    const response = await fetch(url.href, {
      signal: request.signal,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  })(),
});
