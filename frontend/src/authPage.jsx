const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const {value} = e.target[0]
    props.onAuth({ username: value, secret: value})
  };


  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
          <div className="form-subtitle">Set a username to get started</div>
          
          <div className="auth">
                <div></div>
                <input />
                <button>
                    ENTER
                </button>
          </div>
      </form>
    </div>
  )
}

export default AuthPage