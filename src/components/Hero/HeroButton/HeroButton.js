import * as React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const HeroButton = (props) => {
  const classes = useStyles();
  const {
    text,
    children,
    component,
    to,
    variant,
    color,
    ...others } = props;
  return (
    <React.Fragment>
      <Button
        className={classes.button}
        component={component}
        to={to}
        variant={variant || 'flat'}
        color={color || 'default'}
        {...others}
      >
        {children ? children : text}
      </Button>
    </React.Fragment>
  );
}

/**
 * @render react
 * @name HeroButton
 * @example
 * <div>
 *  <HeroButton text="Click me to be a Hero!" />
 * </div>
 */
export default HeroButton;