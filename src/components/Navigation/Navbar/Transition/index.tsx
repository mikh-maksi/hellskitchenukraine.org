import React from 'react';
import Slide, { SlideProps } from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

export const Transition = React.forwardRef((
  props: TransitionProps & {
    children?: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) => <Slide direction="down" ref={ref} {...(props as SlideProps)} />);

Transition.displayName = 'Transition';
