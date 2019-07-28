import * as React from "react";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

interface IH1Props extends TypographyProps {}

export const H1: React.FunctionComponent<IH1Props> = props => (
  <Typography variant="h3" component="h1" gutterBottom>
    {props.children}
  </Typography>
);

interface IH2Props extends TypographyProps {}

export const H2: React.FunctionComponent<IH2Props> = props => (
  <Typography variant="h4" component="h2" gutterBottom {...props}>
    {props.children}
  </Typography>
);

interface IH3Props extends TypographyProps {}

export const H3: React.FunctionComponent<IH3Props> = props => (
  <Typography variant="h5" component="h3" gutterBottom {...props}>
    {props.children}
  </Typography>
);

interface IBodyProps extends TypographyProps {}

export const Body: React.FunctionComponent<IBodyProps> = props => (
  <Typography variant="body1" gutterBottom {...props}>
    {props.children}
  </Typography>
);

interface IBodySecondaryProps extends TypographyProps {}

export const BodySecondary: React.FunctionComponent<
  IBodySecondaryProps
> = props => (
  <Typography variant="body2" gutterBottom {...props}>
    {props.children}
  </Typography>
);
