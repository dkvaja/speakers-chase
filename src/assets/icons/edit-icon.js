import { memo } from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const EditIcon = ({ ...other }) => {
  // ** Hooks
  const theme = useTheme();

  // ** Constants
  const PRIMARY_MAIN = theme.palette.primary.main;

  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 18 19"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <g clipPath="url(#clip0_1264_208)">
        <path
          d="M8.25 3.5H3C2.60218 3.5 2.22064 3.65804 1.93934 3.93934C1.65804 4.22064 1.5 4.60218 1.5 5V15.5C1.5 15.8978 1.65804 16.2794 1.93934 16.5607C2.22064 16.842 2.60218 17 3 17H13.5C13.8978 17 14.2794 16.842 14.5607 16.5607C14.842 16.2794 15 15.8978 15 15.5V10.25"
          stroke={PRIMARY_MAIN}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.875 2.37499C14.1734 2.07662 14.578 1.909 15 1.909C15.422 1.909 15.8266 2.07662 16.125 2.37499C16.4234 2.67336 16.591 3.07803 16.591 3.49999C16.591 3.92194 16.4234 4.32662 16.125 4.62499L9 11.75L6 12.5L6.75 9.49999L13.875 2.37499Z"
          stroke={PRIMARY_MAIN}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1264_208">
          <rect width="18" height="18" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </Box>
  );
};

export default memo(EditIcon);
