import { PATHS, ROUTES } from './';
import { redirect } from 'react-router-dom';

export const fetchData = async ({ request, body }) => {
  const response = await fetch(request.url, {
    method: request.method,
    signal: request.signal,
    headers: {
      'Content-Type': 'application/json',
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });

  if (response.ok) {
    return await response.json();
  } else {
    throw {
      message: 'Failed to fetch vans',
      status: response.status,
      statusText: response.statusText,
    };
  }
};

export const requiredAuth = async ({ request }) => {
  const isLoggedIn = localStorage.getItem('isloggedin');
  if (!isLoggedIn) {
    const { pathname, origin } = new URL(request.url);
    const redirectURL = new URL(PATHS[ROUTES.LOGIN], origin);
    redirectURL.searchParams.set('redirectTo', pathname);
    // 1
    // return redirect(redirectURL);
    // 2
    throw redirect(redirectURL);
  }
};

export const loader = async (props) => {
  // 1
  // const redirect = await requiredAuth(props);
  // return redirect;
  // 2
  await requiredAuth(props);
  return { data: fetchData(props) };
};

export const loginAction = async ({ request, params }) => {
  const formData = await request.formData(),
    payload = Object.fromEntries(formData.entries()),
    response = await fetchData({
      request,
      params,
      body: payload,
    });

  if (response.user) {
    localStorage.setItem('isloggedin', true);
    const { origin, searchParams } = new URL(request.url),
      pathname = searchParams.get('redirectTo') || '',
      redirectURL = new URL(pathname, origin);
    return redirect(redirectURL);
  }

  return response;
};
