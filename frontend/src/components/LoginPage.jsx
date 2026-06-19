import {useState} from 'react'

const LoginPage = ({isOpen, onClose, onLoginSuccess}) => {
    const [isLoginMode, setIsLoginMode] = useState(true)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    if (!isOpen) return null
    
    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null)
        setIsLoading(true)

        const endpoint = isLoginMode ? '/api/auth/login' : 'api/users'
        const payload = isLoginMode
            ? {email, password}
            : {name, email, password}

        try {
            const response = await fetch(`http://localhost:3001${endpoint}`, {
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
                onLoginSuccess()
                onClose()
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className='bg-white p-8 rounded-lg shadow-xl w-96 relative'>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black font-bold">
                        x
                    </button>
            
            <h2 className="text-2xl font-bold mb-6 text-center">
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
                        className="border p-2 rounded focus:outline-blue-500 required" />
                )}
                <input
                    type="email"
                    placeholder='Email Address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 rounded focus:outline-blue-500" required
                    />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 rounded focus:outline-blue-500"
                    required
                    />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-blue-500 text-white font-bold p-2 rounded hover:bg-blue-600 transition"
                    >
                    {isLoading ? 'Processing...' : (isLoginMode ? 'Sign In' : 'Sign Up')}
                    </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
                {isLoginMode ? "Don't have an account?" : "Already have and account?"}
                <button
                    onClick={() => {
                        setIsLoginMode(!isLoginMode)
                        setError(null)
                    }}
                    className='text-blue-500 font-semibold hover:underline'>
                        {isLoginMode ? 'Sign Up' : 'Sign In'}
                    </button>
            </p>
        </div>
    </div>
)
}

    export default LoginPage;