
export default function LoginForm({ email, setEmail, password, setPassword, handleSubmit, loggedIn}) {
  return (
    <div className="card">
      <p className="card-title">Login</p>

      <div className="field">
        <label className="label">Your Email:</label>
        <input className="input" type="text" value={email}
          onChange={e => setEmail(e.target.value)} />
      </div>

      <div className="field">
        <label className="label">Your Password:</label>
        <input className="input" type="password" value={password}
          onChange={e => setPassword(e.target.value)} />
      </div>


      <button className="button" onClick={handleSubmit}>Login</button>
      {loggedIn && <div className="success-msg">✅ You're logged in!</div>}
    </div>
  )
}