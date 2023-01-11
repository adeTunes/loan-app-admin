import { PasswordInput, TextInput } from "@mantine/core";

function LoginForm() {
  return (
    <div className="formContainer">
      <div className="headingGroup">
        <h1 className="formHeading">Welcome!</h1>
        <p className="subHeading">Enter details to login.</p>
      </div>
      <div className="inputGroup">
        <div className="fields">
          <TextInput
            styles={{
              root: { width: "85%" },
            }}
            placeholder="Email"
          />
          <PasswordInput
            styles={{
              visibilityToggle: {
                fontSize: "10px",
                color: "#39CDCC",
                "&:hover": {
                  background: "none",
                },
              },
              root: { width: "85%" },
              input: { paddingRight: "40px" },
              rightSection: { width: "40px" },
            }}
            placeholder="Password"
            visibilityToggleIcon={({ reveal, size }) =>
              reveal ? <>HIDE</> : <>SHOW</>
            }
          />
          <p>
            <a href="/" className="forgotPassword">
              FORGOT PASSWORD
            </a>
          </p>
        </div>
        <button className="submitButton">LOG IN</button>
      </div>
    </div>
  );
}

export default LoginForm;
