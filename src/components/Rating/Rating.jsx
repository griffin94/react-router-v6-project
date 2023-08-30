import React from 'react';
import { Stack } from 'react-bootstrap';

const Rating = ({ value }) => (
  <Stack bsPrefix='hstack'>
    {new Array(value)
      .fill(<i class='bi bi-star-fill text-warning'></i>)
      .map((star) => star)}
  </Stack>
);

export default Rating;
