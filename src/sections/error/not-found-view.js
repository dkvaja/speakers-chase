'use client';

import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import CompactLayout from 'src/layouts/compact';

const NotFoundView = () => (
  <CompactLayout>
    <Stack sx={{ height: '100vh', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Sorry, Page Not Found!
      </Typography>

      <Typography sx={{ color: 'text.secondary', mb: 2 }}>
        Sorry, we couldn’t find the page you’re looking for.
      </Typography>

      <Button component={RouterLink} href="/" size="large" variant="contained" color="primary">
        Go to Home
      </Button>
    </Stack>
  </CompactLayout>
);

export default NotFoundView;
