'use client';

import React from 'react';

import { Stack, Button, Typography } from '@mui/material';

import CompactLayout from 'src/layouts/compact';
import { useSpeakersContext } from 'src/contexts/speakers-context';

import SpeakersDrawer from 'src/components/speakers-drawer';

const HomeView = () => {
  // ** Hooks
  const { onOpenSpeakerDrawer, isSpeakerDrawerOpen } = useSpeakersContext();

  return (
    <CompactLayout>
      <SpeakersDrawer />
      {!isSpeakerDrawerOpen ? (
        <Stack sx={{ py: 12 }} alignItems="flex-start">
          <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.label' }}>
            Add Speaker
          </Typography>
          <Button size="large" variant="contained" color="primary" onClick={onOpenSpeakerDrawer}>
            Add Speaker
          </Button>
        </Stack>
      ) : null}
    </CompactLayout>
  );
};

export default HomeView;
