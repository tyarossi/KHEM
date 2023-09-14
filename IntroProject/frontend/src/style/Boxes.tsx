import { Box, BoxProps, styled } from '@mui/material';
import theme from 'utils/Theme';

export const MainBox = styled(Box)<BoxProps>(() => ({
	backgroundColor: theme.palette.primary.main,
}));

export default MainBox;
