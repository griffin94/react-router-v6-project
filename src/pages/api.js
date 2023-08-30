export const request = async ({ request, params }) => {
  const response = await fetch(request.url, {
    signal: request.signal,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw { message: 'Failed to fetch vans', status: 500 };
  }

  const data = await response.json();
  return data;
};

export const loader = (props) => ({ data: request(props) });
