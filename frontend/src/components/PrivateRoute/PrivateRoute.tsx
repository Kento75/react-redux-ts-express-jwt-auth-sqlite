import * as React from "react";
import { Redirect, Route } from 'react-router-dom';

interface IPrivateRouteProps {
  component: any;
  exact: any; // とりあえずこれ
  path: string;
}

const PrivateRoute: React.SFC<IPrivateRouteProps> = ({
  component: Component,
  ...rest
}) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

export default PrivateRoute;
