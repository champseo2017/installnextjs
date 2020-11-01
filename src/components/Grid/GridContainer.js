import { memo } from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
// @material-ui/core components

import Grid from "@material-ui/core/Grid";

const GridContainer = memo((props) => {
  const { children, ...rest } = props;
  return <Grid container {...rest}>{children}</Grid>;
});

GridContainer.propTypes = {
  children: PropTypes.node,
};

export default GridContainer;
