import * as React from "react";
import Typography from "@material-ui/core/Typography";

interface IH1Props {}

export const H1: React.FunctionComponent<IH1Props> = props => (
  <Typography variant="h1" gutterBottom>
    {props.children}
  </Typography>
);

interface IH2Props {}

export const H2: React.FunctionComponent<IH2Props> = props => (
  <Typography variant="h2" gutterBottom>
    {props.children}
  </Typography>
);

interface IH3Props {}

export const H3: React.FunctionComponent<IH3Props> = props => (
  <Typography variant="h3" gutterBottom>
    {props.children}
  </Typography>
);

interface IBodyProps {}

export const Body: React.FunctionComponent<IBodyProps> = props => (
  <Typography variant="body1" gutterBottom>
    {props.children}
  </Typography>
);

interface IBodySecondaryProps {}

export const BodySecondary: React.FunctionComponent<
  IBodySecondaryProps
> = props => (
  <Typography variant="body2" gutterBottom>
    {props.children}
  </Typography>
);
