import React from "react";
import { Link } from "react-router-dom";

import Input from "components/Input";
import Button from "components/Button";
import Container from "components/Container";

const LoginForm = ({ handleSubmit, setEmail, setPassword, loading }) => {
  return (
    <>
      <Container>
        <h2 className="text-3xl font-extrabold text-center text-indigo-500">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            label="Email"
            placeholder="oliver@example.com"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="password"
            label="Password"
            placeholder="********"
            onChange={e => setPassword(e.target.value)}
          />
          <div className="flex justify-center">
            <Button type="submit" buttonText="Submit" loading={loading} />
          </div>
        </form>
        <div className="flex justify-center items-center mt-2">
          <span className="text-xs">Do not have an account?</span>
          <Link to="/signup" className="text-xs font-bold underline pl-1">
            Signup
          </Link>
        </div>
      </Container>
    </>
  );
};

export default LoginForm;
