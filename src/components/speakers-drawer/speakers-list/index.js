import React from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';

import NoDataView from 'src/components/no-data-view';

import SpeakerCard from '../speaker-card';

const SpeakersList = ({ speakers = [], searchQuery, handleSelectSpeaker, selectedSpeakers }) => (
  <Stack spacing={3} sx={{ px: 2.5 }}>
    {speakers.length > 0 ? (
      speakers.map((speaker) => (
        <SpeakerCard
          key={speaker.id}
          speakerDetails={speaker}
          onSelectSpeaker={handleSelectSpeaker}
          isSelected={selectedSpeakers.includes(speaker.id)}
        />
      ))
    ) : (
      <NoDataView query={searchQuery} />
    )}
  </Stack>
);

export default SpeakersList;

SpeakersList.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  handleSelectSpeaker: PropTypes.func.isRequired,
  speakers: PropTypes.array.isRequired,
  selectedSpeakers: PropTypes.array.isRequired,
};
