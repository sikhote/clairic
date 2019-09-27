import { lighten } from 'polished';
import {
  colors,
  spacing,
  borderRadii,
  fontSizes,
  lineHeights,
} from '../../lib/styling';

export default {
  root: {
    position: 'relative',
    background: colors.a,
    padding: `0 ${spacing.e}px`,
    height: fontSizes.c * lineHeights.normal * 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadii.a,
    cursor: 'pointer',
    userSelect: 'none',
    '&:active': {
      background: lighten(0.1, colors.a),
    },
  },
  rootIsLoading: {
    pointerEvents: 'none',
  },
  rootIsCircle: {
    borderRadius: borderRadii.b,
    width: fontSizes.c * lineHeights.normal * 2,
  },
  childrenIsLoading: {
    visibility: 'hidden',
  },
  icon: {
    display: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.white,
  },
  iconIsLoading: {
    display: 'flex',
  },
};