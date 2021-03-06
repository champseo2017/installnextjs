import {memo} from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "../../assets/jss/nextjs-material-dashboard/components/typographyStyle.js";

const useStyles = makeStyles(styles);

const Danger = memo((props) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.dangerText}>
      {children}
    </div>
  );
})

Danger.propTypes = {
  children: PropTypes.node,
};

export default Danger