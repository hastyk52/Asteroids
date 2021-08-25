import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { handleLogin } = this.props;
    const { username } = this.state;
    handleLogin(username);
    this.setState({ username: '' });
  }

  render() {
    const { username } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            value={username}
            type="text"
            placeholder="username"
            onChange={this.handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

export default Login;
