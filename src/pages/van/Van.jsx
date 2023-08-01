import React from 'react';
import { useParams } from 'react-router-dom';

const van = () => {
  const { id } = useParams();
  return <div>van {id}</div>;
};

export default van;
