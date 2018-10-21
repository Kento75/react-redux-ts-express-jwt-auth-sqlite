import * as React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

import { IUserAction, userActions } from "../../actions/UserActions/UserActions";
import { IAuthenticationState } from "../../reducers/AuthenticationReducer";

export interface ILoginPageProps {
  username: string;
  password: string;
  submitted: boolean;
  login?: () => void;
  dispatch: any;
}

class LoginPage extends React.Component<ILoginPageProps, IAuthenticationState> {
  constructor(props: any) {
    super(props);

    // reset login status
    // this.props.dispatch(userActions.logout());

    this.state = {
      user: {},
      username: "",
      password: "",
      loggedIn: false,
      submitted: false
    };
  }

  public handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "username") {
      this.setState({ username: value })
    } else {
      this.setState({ password: value });
    }
  };

  public handleSubmit = (e: any) => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  };

  public render() {
//    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;

    return (
    <div className="ui inverted vertical masthead center aligned segment">
    <Grid
      textAlign="center"
      style={{ minHeight: 700 }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="/assets/logo.png" /> Log-in to your account
        </Header>
        {/*
        {submitted && !username ? (
          <Message error>Username is required</Message>
        ) : (
          <div />
        )}
        {submitted && !password ? (
          <Message error>Password is required</Message>
        ) : (
          <div />
        )}
        */}
        <br />
        <Form size="large" name="form" onSubmit={this.handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="User Name"
              name="username"
              error={false}
              value={username}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              error={false} // あとで変更
              value={password}
              onChange={this.handleChange}  // あとで変更
            />
            <Button color="teal" fluid size="large" disabled={false} loading={false}>
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
  );
  }
}

export default LoginPage;
