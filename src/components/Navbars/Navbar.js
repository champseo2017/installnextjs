import { useContext, Fragment } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import AdminNavbarLinks from "./AdminNavbarLinks";
//import RTLNavbarLinks from "./RTLNavbarLinks.js";
import Button from "../CustomButtons/Button";

import styles from "../../assets/jss/nextjs-material-dashboard/components/headerStyle.js";

const useStyles = makeStyles(styles);
import { LoginAdminContext } from "../../middleware/LoginAdminContext";
import empty from "is-empty";

const Header = (props) => {
  const [token_Admin] = useContext(LoginAdminContext);
  // used for checking current route
  const router = useRouter();
  // create styles for this component
  const classes = useStyles();
  function makeBrand() {
    var name = "NextJS Material Dashboard";
    props.routes.map((prop) => {
      if (router.route.indexOf(prop.layout + prop.path) !== -1) {
        name = props.rtlActive ? prop.rtlName : prop.name;
      }
      return null;
    });
    return name;
  }
  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color,
  });
  return (
    <Fragment>
      {empty(token_Admin) ? (
        <div />
      ) : (
        <AppBar className={classes.appBar + appBarClasses}>
          <Toolbar className={classes.container}>
            <div className={classes.flex}>
              {/* Here we create navbar brand, based on route name */}
              <Button color="transparent" href="#" className={classes.title}>
                {makeBrand()}
              </Button>
            </div>
            <Hidden smDown implementation="css">
              {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
            </Hidden>
            <Hidden mdUp implementation="css">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={props.handleDrawerToggle}
              >
                <Menu />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      )}
    </Fragment>
  );
};

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
};

export default Header;
