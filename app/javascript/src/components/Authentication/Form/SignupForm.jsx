import React from "react";
import { Link } from "react-router-dom";

import Input from "components/Input";
import Button from "components/Button";
import Container from "components/Container";

const SignupForm = ({
  handleSubmit,
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  loading,
  setPasswordConfirmation,
}) => {
  return (
    <>
      {/* <div className="bg-white border shadow-md mx-auto mt-16 md-8 w-1/2 px-2 py-4"> */}
      <Container>
        <h2 className="text-3xl font-extrabold text-center text-indigo-500">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            label="Email"
            placeholder="oliver@example.com"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            label="First Name"
            placeholder="Oliver"
            onChange={e => setFirstName(e.target.value)}
          />
          <Input
            label="Last Name"
            placeholder="Smith"
            onChange={e => setLastName(e.target.value)}
          />
          <Input
            type="password"
            label="Password"
            placeholder="********"
            onChange={e => setPassword(e.target.value)}
          />
          <Input
            type="password"
            label="Password Confirmation"
            placeholder="********"
            onChange={e => setPasswordConfirmation(e.target.value)}
          />
          <div className="flex justify-center">
            <Button type="submit" buttonText="Submit" loading={loading} />
          </div>
        </form>
        <div className="flex justify-center items-center mt-2">
          <span className="text-xs">Already have an account?</span>
          <Link to="/login" className="text-xs font-bold underline pl-1">
            Login
          </Link>
        </div>
      </Container>
      {/* <h2 className="text-3xl font-extrabold text-center text-indigo-500">
          Sign Up
      </h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          label="Email"
          placeholder="oliver@example.com"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          label="First Name"
          placeholder="Oliver"
          onChange={e => setName(e.target.value)}
        />
        <Input
          label="Last Name"
          placeholder="Smith"
          onChange={e => setName(e.target.value)}
        />
        <Input
          type="password"
          label="Password"
          placeholder="********"
          onChange={e => setPassword(e.target.value)}
        />
        <Input
          type="password"
          label="Password Confirmation"
          placeholder="********"
          onChange={e => setPasswordConfirmation(e.target.value)}
        />
        <Button type="submit" buttonText="Register" loading={loading} />
      </form>
      <div className="flex justify-center items-center mt-2">
        <span className="text-xs">Already have an account?</span>
        <Link
          to="/login"
          className="text-xs font-bold underline pl-1"
        >
          Login
        </Link>
      </div> */}
      {/* </div> */}
    </>
  );
};

export default SignupForm;
