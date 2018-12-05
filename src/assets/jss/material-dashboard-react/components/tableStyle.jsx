import {
  warningColor,
  primaryColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  blackColor,
  defaultFont
} from "../../../../assets/jss/material-dashboard-react.jsx";

const tableStyle = theme => ({
  warningTableHeader: {
    color: warningColor
  },
  primaryTableHeader: {
    color: primaryColor
  },
  dangerTableHeader: {
    color: dangerColor
  },
  successTableHeader: {
    color: successColor
  },
  infoTableHeader: {
    color: infoColor
  },
  roseTableHeader: {
    color: roseColor
  },
  grayTableHeader: {
    color: grayColor
  },
  blackTableHeader: {
      color: blackColor
  },
  table: {
    marginBottom: "0",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "transparent",
    borderSpacing: "0",
    borderCollapse: "collapse",
      textAlign: "center"
  },
  tableHeadCell: {
    color: "inherit",
    ...defaultFont,
    fontSize: "1em",
      textColor: "black"
  },
  tableCell: {
    ...defaultFont,
    lineHeight: "1.42857143",
    verticalAlign: "middle",
  },
  tableResponsive: {
    width: "100%",
    marginTop: theme.spacing.unit * 1,
    overflowX: "auto"
  }
});

export default tableStyle;
