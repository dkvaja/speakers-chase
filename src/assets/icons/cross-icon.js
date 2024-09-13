import { memo } from 'react';

import Box from '@mui/material/Box';

const CrossIcon = ({ ...other }) => (
  <Box
    component="svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...other}
  >
    <path
      d="M17 7L7 17"
      stroke="#808080"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 7L17 17"
      stroke="#808080"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Box>
);
export default memo(CrossIcon);
