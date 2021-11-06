import { Container as MUIContainer } from '@mui/material';

const Container = ({ children }) => (
  <MUIContainer maxWidth={'xl'}>{children}</MUIContainer>
);

export default Container;