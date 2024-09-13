'use client';

import { lazy, useMemo, useState, Suspense, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import { Button, Typography, IconButton } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

import { paper } from 'src/theme/css';
import { CrossIcon } from 'src/assets/icons';
import { SPEAKERS } from 'src/_mock/speakers';
import { useSpeakersContext } from 'src/contexts/speakers-context';

import Scrollbar from '../scrollbar';
import { LoadingScreen } from '../loading-screen';
import SpeakerSearchInput from './speaker-search-input';

const SpeakersList = lazy(() => import('./speakers-list'));

export default function SpeakersDrawer() {
  // ** States
  const [selectedSpeakers, setSelectedSpeakers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // ** Hooks
  const theme = useTheme();
  const { isSpeakerDrawerOpen, onCloseSpeakerDrawer } = useSpeakersContext();
  const isMobile = useResponsive('down', 'sm');

  const FILTERED_SPEAKERS = useMemo(
    () =>
      searchQuery
        ? SPEAKERS.filter(
            ({ name }) => name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
          )
        : SPEAKERS,
    [searchQuery]
  );

  // ** Handlers
  const handleSelectSpeaker = (speakerId, isSelect) => {
    setSelectedSpeakers((prev) =>
      isSelect ? [...prev, speakerId] : prev.filter((id) => id !== speakerId)
    );
  };

  const onCloseDrawer = useCallback(() => {
    onCloseSpeakerDrawer();
    setSearchQuery('');
    setSelectedSpeakers([]);
  }, [onCloseSpeakerDrawer]);

  // ** Renders
  const renderHead = useMemo(
    () => (
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ py: 2, px: 2.5, bgcolor: '#F6F8F8' }}
      >
        <Typography sx={{ flexGrow: 1, fontWeight: 'fontWeightMedium', fontSize: '18px' }}>
          Add Speaker
        </Typography>

        <IconButton onClick={onCloseDrawer}>
          <CrossIcon sx={{ width: 24, height: 24 }} />
        </IconButton>
      </Stack>
    ),
    [onCloseDrawer]
  );

  const renderSearchInput = useMemo(
    () => <SpeakerSearchInput searchQuery={searchQuery} onSearch={setSearchQuery} />,
    [searchQuery]
  );

  const renderFooter = useMemo(
    () => (
      <Stack direction="row" justifyContent="space-between" sx={{ py: 2, px: 2.5 }}>
        <Stack direction="row" gap={2}>
          <Button
            color="primary"
            variant="contained"
            disabled={!selectedSpeakers.length}
            onClick={onCloseDrawer}
          >
            Add
          </Button>
          <Button color="primary" onClick={onCloseDrawer}>
            Cancel
          </Button>
        </Stack>
        <Button color="primary">Create a speaker</Button>
      </Stack>
    ),
    [onCloseDrawer, selectedSpeakers.length]
  );

  const renderSpeakersList = useMemo(
    () => (
      <Scrollbar>
        <Suspense fallback={<LoadingScreen sx={{ my: 4 }} />}>
          <SpeakersList
            speakers={FILTERED_SPEAKERS}
            handleSelectSpeaker={handleSelectSpeaker}
            searchQuery={searchQuery}
            selectedSpeakers={selectedSpeakers}
          />
        </Suspense>
      </Scrollbar>
    ),
    [FILTERED_SPEAKERS, selectedSpeakers, searchQuery]
  );

  return (
    <Drawer
      anchor="right"
      open={isSpeakerDrawerOpen}
      onClose={onCloseDrawer}
      slotProps={{
        backdrop: { invisible: false },
      }}
      sx={{
        [`& .${drawerClasses.paper}`]: {
          ...paper({ theme }),
          bgcolor: theme.palette.common.white,
          width: 600,
          borderRadius: `${theme.spacing(1.5)} 0 0 ${theme.spacing(1.5)}`,
          ...(isMobile
            ? {
                width: '100vw',
              }
            : {}),
        },
      }}
    >
      {renderHead}

      {renderSearchInput}

      {renderSpeakersList}

      {renderFooter}
    </Drawer>
  );
}
