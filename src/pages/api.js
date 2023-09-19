import { PATHS, ROUTES } from './';
import { redirect } from 'react-router-dom';

export const fetchData = async ({ request, params, requiredAuth, body }) => {
  if (requiredAuth) {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      return redirect(PATHS[ROUTES.LOGIN]);
    }
  }

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

export const loader = (props) => ({ data: fetchData(props) });

export const loginAction = async ({ request, params }) => {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData.entries());
  const response = await fetchData({
    request,
    params,
    requiredAuth: false,
    body: payload,
  });

  if (response.user) {
    return redirect(PATHS[ROUTES.HOME]);
  }

  return response;
};
