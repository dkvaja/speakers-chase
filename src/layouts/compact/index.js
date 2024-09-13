import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

const CompactLayout = ({ children }) => (
  <Container component="main">
    <Stack
      sx={{
        m: 'auto',
        maxWidth: '100vw',
        minHeight: '100vh',
      }}
    >
      {children}
    </Stack>
  </Container>
);

CompactLayout.propTypes = {
  children: PropTypes.node,
};

export default CompactLayout;
