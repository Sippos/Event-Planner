import {useState} from 'react'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'},
                body: JSON.stringify({email: email, password: password})
                })

            const data = await response.json()

            if(response.ok) {
                localStorage.setItem('token', data.token);
                alert('Login Succesful!')
            } else {
                alert('Login failed: ' + data.message)
            }
            } catch (error) {
                console.error("Something went wrong", error)
            }
    }

    return (
        <div className="container mx-auto p-4 mt-8">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleLogin} className="flex flex-col max-w-sm gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 rounded" />

            <button type="submit" className="bg-blue-600 text-white p-2 rounded">Login</button>
            </form>
        </div>
    )
    }

    export default LoginPage;