import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { theme } from '../../theme';

const StyledButtonTheme = styled(Button)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${theme.palette.primary.main};
`;

export default StyledButtonTheme;
