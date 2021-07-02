const registerForm = ({
    handleSubmit,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword
}) => {
    return(
    <form onSubmit={handleSubmit} action="">
        <div className="form-group mb-3">
            <label className='form-label'>Name</label>
            <input
                type="text"
                className='form-control'
                placeholder='Enter name'
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </div>
        <div className="form-group mb-3">
            <label className='form-label'>Password</label>
            <input
                type="password"
                className='form-control'
                placeholder='Enter pass'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
        </div>
        <div className="form-group mb-3">
            <label className='form-label'>Email</label>
            <input
                type="email"
                className='form-control'
                placeholder='Enter email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
        </div>
        <button className='btn btn-primary'>Submit</button>
    </form>
    )
}

export default registerForm;