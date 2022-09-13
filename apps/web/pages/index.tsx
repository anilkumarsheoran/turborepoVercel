/* eslint-disable turbo/no-undeclared-env-vars */
import { Button } from "ui";

export default function Web() {
  return (
    <div>
      <h1>Testing 2 Web 2</h1>
      <h2>This is {process.env.NEXT_PUBLIC_ENV_NAME} env</h2>
      <Button />
    </div>
  );
}
