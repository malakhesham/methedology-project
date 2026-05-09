// MET-20: Fix Login 401 Unauthorized Error

async function loginUser(email, password) {
    try {
        if (!email || !password) {
            throw new Error("Email and password are required");
        }

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        }); 

        if (response.status === 401) {
            console.log("Fix applied: Clearing old token before retry");
            localStorage.removeItem('token');
            throw new Error("Unauthorized - Invalid credentials");
        }

        const data = await response.json();
        localStorage.setItem('token', data.token);
        console.log("Login successful");
        return data;

    } catch (error) {
        console.error("Login error:", error.message);
        return null;
    }
}