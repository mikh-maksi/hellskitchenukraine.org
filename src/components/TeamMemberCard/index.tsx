import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from '@mui/material';

import { SocialNavbar } from '../SocialNavbar';

interface TeamMemberCardProps {
  facebookLink?: string;
  instagramLink?: string;
  linkedInLink?: string;
  name: string;
  photoUrl: string;
  position: string;
  text: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  facebookLink,
  instagramLink,
  linkedInLink,
  name,
  photoUrl,
  position,
  text,
}) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        border: `2px solid ${theme.palette.gray}`,
        borderRadius: '10px',
        boxSizing: 'border-box',
        height: '100%',
        pt: 4,
      }}
    >
      <CardMedia
        component="img"
        sx={{
          background: theme.palette.darkYellow,
          borderRadius: '50%',
          height: '100px',
          margin: '0 auto',
          width: '100px',
        }}
        image={photoUrl}
        alt={photoUrl ? `Photo of ${name}` : ''}
      />
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            mb: 0.5,
            mt: 3,
            textAlign: 'center',
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: theme.palette.common.black, mb: 1, textAlign: 'center' }}
        >
          {position}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: '#B9B9BB', mb: 3, textAlign: 'center' }}
        >
          {text}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <SocialNavbar
            facebookLink={facebookLink}
            instagramLink={instagramLink}
            linkedInLink={linkedInLink}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
