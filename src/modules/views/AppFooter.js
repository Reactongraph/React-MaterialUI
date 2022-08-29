import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { pure } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LayoutBody from '../components/LayoutBody';
import Typography from '../components/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#000',
  },
  layoutBody: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing() / 2,
    paddingBottom: theme.spacing() / 2,

  },
  language: {
    marginTop: theme.spacing(),
    width: 150,
  },
});

const AppFooter = (props) => {
  const { classes } = props;

  return (
    <Typography component="footer" className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <Grid container spacing={10}>
          <Grid item xs={6} sm={4} md={2} className="w3_agile-footer1 f1">
            <h2>
              Adventure
            </h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem atus error sit volupt unde omnis iste
                            iatis un.</p>
            {/* <ul className={classes.list} align="center">
              <li className={classes.listItem}>
                <Link href="#">Home</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="#">About</Link>
              </li>
            </ul> */}
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant="h6" align="center" gutterBottom className="footerColorHeading">
              Adventure Island
            </Typography>
            <ul className={classes.list} align="center">
              <li className={classes.listItem}>
                <Link href="#">Services</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="#">Privacy</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" align="center" gutterBottom className="footerColorHeading">
              Support
            </Typography>
            <ul className={classes.list} align="center">
              <li className={classes.listItem}>
                <Link href="#">Contact</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="#">info@materialtest.com</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" align="center" gutterBottom className="footerColorHeading">
              Pages
            </Typography>
            <ul className={classes.list} align="center">
              <li className={classes.listItem}>
                <Link href="/signup">Sign up</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/signin">Sign in</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant="h6" align="center" gutterBottom className="footerColorHeading">
              Follow Us
            </Typography>
            <ul className="footer-social-icons">
              <li>
                <Link href="#" className="hover_icon">
                  <i className="fa icon1 fa-facebook icons" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover_icon">
                  <i className="fa icon2 fa-twitter icons" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover_icon">
                  <i className="fa icon3 fa-google-plus icons" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa icon3 fa-linkedin icon4 icons" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item md={12} className="footerborder" style={{ textAlign:'center'}}>
            <Typography variant="caption" align='center' className="footerColorHeading">
              <Link href="#" title="Flaticon">
                Copyright @ www.mymaterialtest.com
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </LayoutBody>
    </Typography>
  );
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  pure,
  withStyles(styles),
)(AppFooter);
