import React from 'react';
import PropTypes from 'prop-types';

import { Paper, Typography } from '@mui/material';

const NoDataView = ({ sx = {}, other = {}, query }) => (
  <Paper
    sx={{
      bgcolor: 'unset',
      textAlign: 'center',
      ...sx,
    }}
    {...other}
  >
    <Typography variant="h6" gutterBottom>
      Not Found
    </Typography>

    <Typography variant="body2">
      No results found for &nbsp;
      <strong>&quot;{query}&quot;</strong>.
      <br /> Try checking for typos or using complete words.
    </Typography>
  </Paper>
);

export default NoDataView;

NoDataView.propTypes = {
  sx: PropTypes.object,
  other: PropTypes.object,
  query: PropTypes.string,
};
