import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import HeroButton from './HeroButton/HeroButton';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Hero = ({ title, subTitle, actionText, actionUrl }) => {
  const classes = useStyles();

  return (
    <div className={classes.hero}>
      <div className={classes.content}>
        <div className={classes.text}>
          <Typography
            variant="subtitle2"
            align="center"
            //component="h1"
            color="inherit"
            gutterBottom
            className={classes.title}
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            //component="h2"
            color="inherit"
            gutterBottom
            className={classes.headline}
          >
            {subTitle}
          </Typography>
          <div className={classes.buttonMargin}>
            <HeroButton
              component={Link}
              to={actionUrl}
              variant="outlined"
              color="primary"
              text={actionText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * @render react
 * @name Hero
 * @example
 * <div>
 *  <Hero
 *    title="Hero Title"
 *    subTitle="Here goes the subtitle!"
 *    imageSrc="./images/demo.png"
 *    actionText="Getting Started"
 *    actionUrl="/demo/getting-started"
 *  />
 * </div>
 */
export default Hero;