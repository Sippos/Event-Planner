import {useState} from 'react'

const LoginPage = () => {
    const [isLoginMode, setIsLoginMode] = useState(true)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    
    
    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null)

        if (password.length < 8) {
            setError("Password must be at least 8 characters long.")
            return
        }
        setIsLoading(true)

        const endpoint = isLoginMode ? '/api/auth/login' : '/api/users'
        const payload = isLoginMode
            ? {email, password}
            : {name, email, password}

        try {
            const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001';

            const response = await fetch(`${API_URL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'},
                body: JSON.stringify(payload)
                })

            const data = await response.json()

            if(!response.ok) {
                throw new Error(data.message || 'Authentication failed')
            }

            if (isLoginMode) {
                localStorage.setItem('token', data.token);
                window.location.href = '/';
            } else {
                setIsLoginMode(true)
                setError("Account created! Please sign in.")
                setPassword('')
            }
            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
    }

    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className='glass-panel-heavy p-8 rounded-xl shadow-2xl w-96 relative border-t-white/30'>
            
            <h2 className="text-2xl font-display font-bold mb-6 text-primary text-center">
                {isLoginMode ? 'Welcome Back' : 'Create an Account'}</h2>
            
            {error && (
                <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm text-center">
                    {error}
                </div>
            )}

            <form onSubmit={handleLogin} className="flex flex-col max-w-sm gap-4">
                {!isLoginMode && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-surface-container-low/50 border border-white/10 p-3 rounded focus:outline-none focus:border-primary focus:shadow-glow-primary text-on-surface font-sans transition-all placeholder:text-outline" required />
                )}
                <input
                    type="email"
                    placeholder='Email Address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-surface-container-low/50 border border-white/10 p-3 rounded focus:outline-none focus:border-primary focus:shadow-glow-primary text-on-surface font-sans transition-all placeholder:text-outline" required
                    />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-surface-container-low/50 border border-white/10 p-3 rounded focus:outline-none focus:border-primary focus:shadow-glow-primary text-on-surface font-sans transition-all placeholder:text-outline"
                    required
                    />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-primary to-secondary text-on-primary-container font-bold p-3 rounded hover:shadow-glow-primary transition-all mt-2"
                    >
                    {isLoading ? 'Processing...' : (isLoginMode ? 'Sign In' : 'Sign Up')}
                    </button>
            </form>

            <p className="text-center text-sm text-on-surface-variant mt-6">
                {isLoginMode ? "Don't have an account? " : "Already have an account? "}
                <button
                    onClick={() => {
                        setIsLoginMode(!isLoginMode)
                        setError(null)
                    }}
                    className='text-secondary font-semibold hover:text-secondary-fixed-dim hover:drop-shadow-[0_0_8px_rgba(211,251,255,0.8)] transition-all'>
                        {isLoginMode ? 'Sign Up' : 'Sign In'}
                    </button>
            </p>
        </div>
    </div>
)
}

    export default LoginPage;