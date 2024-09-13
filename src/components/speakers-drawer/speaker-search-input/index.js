import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import { TextField, InputAdornment } from '@mui/material';

import { SearchIcon } from 'src/assets/icons';

const SpeakerSearchInput = ({ searchQuery, onSearch }) => (
  <Stack sx={{ py: 2, px: 2.5 }}>
    <TextField
      size="small"
      placeholder="Search..."
      type="search"
      value={searchQuery}
      onChange={({ target: { value } }) => onSearch(value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ width: 24, height: 24 }} />
          </InputAdornment>
        ),
      }}
    />
  </Stack>
);

export default SpeakerSearchInput;

SpeakerSearchInput.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
