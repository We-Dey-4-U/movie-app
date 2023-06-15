import { Typography, useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      we-dey-<span style={{ color: theme.palette.secondary.main }}>4u-movies</span>
    </Typography>
  );
};

export default Logo;