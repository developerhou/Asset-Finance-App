import React, { useState } from "react";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
  });

  const [registrationResponse, setRegistrationResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://8rfq8c3wx3.execute-api.ap-southeast-2.amazonaws.com/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerData),
        }
      );

      if (!response.ok) {
        throw new Error(`Registration failed! Status: ${response.status}`);
      }

      const result = await response.json();
      setRegistrationResponse(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>User Registration</h1>
      <label>
        Username:
        <input
          type="text"
          value={registerData.username}
          onChange={(e) =>
            setRegisterData({ ...registerData, username: e.target.value })
          }
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={registerData.password}
          onChange={(e) =>
            setRegisterData({ ...registerData, password: e.target.value })
          }
        />
      </label>
      <button onClick={handleRegister} disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>
      {registrationResponse && (
        <div>
          <h2>Registration Response:</h2>
          <pre>{JSON.stringify(registrationResponse, null, 2)}</pre>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Register;
