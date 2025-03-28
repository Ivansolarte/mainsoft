import { Link } from "react-router";
import { LinkProps } from "../../../types/interface.link";

export const Links = ({ to, children, classes }: LinkProps ) => {
  return <Link to={to} className={classes}>{children}</Link>;
};
