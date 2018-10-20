import * as React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

interface ILoginPageState {
  username: string;
  password: string;
  submitted: boolean;
}

class LoginPage extends React.Component<{}, ILoginPageState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      username: "",
      password: "",
      submitted: false
    };
  }

  public render() {
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
        <Form size="large" name="form" onSubmit={null}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="User Name"
              name="username"
              error={false}
              value=""
              onChange={null}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              error={false} // あとで変更
              value=""  // あとで変更
              onChange={null}  // あとで変更
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
