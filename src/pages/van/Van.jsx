import { Container, Stack } from 'react-bootstrap';
import { Badge, Image, Name, Price } from '../../components';
import vans from '../../mocks/vans';

const Van = () => {
  const { description, id, imageUrl, name, price, type } = vans[0];
  return (
    <Container className='d-flex flex-column flex-md-row gap-2 gap-md-4 p-4'>
      <Image
        src={imageUrl}
        alt={name}
      />
      <Stack gap={2}>
        <Badge type={type} />
        <Name>{name}</Name>
        <Price>{price}</Price>
        <span>{description}</span>
      </Stack>
    </Container>
  );
};

export default Van;
