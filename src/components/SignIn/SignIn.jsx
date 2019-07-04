import React from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./SignIn.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={e => this.handleSubmit(e)}>
          <FormInput
            handleChange={this.handleChange}
            required
            label="email"
            type="email"
            name="email"
            value={this.state.email}
          />
          <FormInput
            handleChange={this.handleChange}
            required
            label="password"
            type="password"
            name="password"
            value={this.state.password}
          />
          <div className="buttons">
            <Button type="submit">sign in</Button>
            <Button isGoogleSignIn onClick={signInWithGoogle}>
              sign in with google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
