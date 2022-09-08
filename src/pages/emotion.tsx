import { styled } from '@mui/material/styles'

import { Typography } from '@mui/material';

const StyledTypography = styled(Typography)`
  background-color: red;
`

const Emotion = () => {
  return (
    <StyledTypography>Emotion</StyledTypography>
  )
}

export default Emotion