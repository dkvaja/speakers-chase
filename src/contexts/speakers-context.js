'use client';

import PropTypes from 'prop-types';
import { useMemo, useContext, useCallback, createContext } from 'react';

import { useBoolean } from 'src/hooks/use-boolean';

export const SpeakersContext = createContext({
  isSpeakerDrawerOpen: false,
  onOpenSpeakerDrawer: () => {},
  onCloseSpeakerDrawer: () => {},
  onToggleSpeakerDrawer: () => {},
});

export const useSpeakersContext = () => useContext(SpeakersContext);

export const SpeakersProvider = ({ children }) => {
  // ** States
  const speakerDrawerHandler = useBoolean();

  // ** Handlers
  const onToggleDrawer = useCallback(() => {
    speakerDrawerHandler.onToggle();
  }, [speakerDrawerHandler]);

  const onCloseDrawer = useCallback(() => {
    speakerDrawerHandler.onFalse();
  }, [speakerDrawerHandler]);

  const onOpenDrawer = useCallback(() => {
    speakerDrawerHandler.onTrue();
  }, [speakerDrawerHandler]);

  const memoizedValue = useMemo(
    () => ({
      isSpeakerDrawerOpen: speakerDrawerHandler.value,
      onOpenSpeakerDrawer: onOpenDrawer,
      onCloseSpeakerDrawer: onCloseDrawer,
      onToggleSpeakerDrawer: onToggleDrawer,
    }),
    [speakerDrawerHandler, onToggleDrawer, onOpenDrawer, onCloseDrawer]
  );

  return <SpeakersContext.Provider value={memoizedValue}>{children}</SpeakersContext.Provider>;
};

SpeakersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
