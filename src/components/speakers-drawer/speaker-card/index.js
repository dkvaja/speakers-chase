import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import { Paper, Button, Avatar, Divider, Checkbox, Typography } from '@mui/material';

import { EditIcon } from 'src/assets/icons';

const SpeakerCard = ({ speakerDetails, onSelectSpeaker, isSelected = false }) => {
  // ** Handlers
  const onEditSpeaker = (e) => {
    e.stopPropagation();
  };

  return (
    <Paper
      variant="outlined"
      elevation={0}
      sx={{
        p: 1.5,
        cursor: 'pointer',
        ...(isSelected
          ? {
              borderColor: (theme) => theme.palette.success.main,
            }
          : {}),
      }}
      onClick={() => onSelectSpeaker(speakerDetails.id, !isSelected)}
    >
      <Stack direction="row" gap={2} sx={{ position: 'relative' }}>
        <Avatar alt="User" src="/assets/user-icon.png" sx={{ width: 48, height: 48 }} />
        <Stack sx={{ flex: 1 }}>
          <Typography
            variant="subtitle1"
            fontWeight="fontWeightMedium"
            sx={{ color: '#373F66' }}
            pb={0.5}
          >
            {speakerDetails?.name}
          </Typography>
          <Stack direction="row" alignItems="center" gap={2} pb={1}>
            <Typography sx={{ color: '#717693' }} variant="body2">
              {speakerDetails?.position}
            </Typography>
            <Divider orientation="vertical" flexItem sx={{ color: '#E9E9E9' }} />
            <Typography sx={{ color: '#717693' }} variant="body2">
              {speakerDetails?.companyName}
            </Typography>
          </Stack>
          <Stack direction="row">
            <Button
              startIcon={<EditIcon sx={{ color: 'primary', width: 18, height: 18 }} />}
              color="primary"
              onClick={onEditSpeaker}
              sx={{
                fontFamily: 'fontSubtitleFamily',
                fontWeight: 'fontWeightMedium',
              }}
            >
              Edit Speaker
            </Button>
          </Stack>
        </Stack>
        <Checkbox
          color="success"
          sx={{ position: 'absolute', top: -8, right: -8 }}
          checked={isSelected}
          onChange={({ target: { checked } }) => onSelectSpeaker(speakerDetails.id, checked)}
        />
      </Stack>
    </Paper>
  );
};

export default SpeakerCard;

SpeakerCard.propTypes = {
  speakerDetails: PropTypes.object,
  onSelectSpeaker: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};
