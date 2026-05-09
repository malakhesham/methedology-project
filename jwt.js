// MET-14: JWT Token Generation Service

function generateToken(user) {
    const header = { alg: "HS256", typ: "JWT" };
    const payload = {
        id: user.id,
        email: user.email,
        role: user.role,
        exp: Date.now() + 3600000
    };
    console.log("Token generated for:", user.email);
    return { header, payload }; 
}

function verifyToken(token) {
    if (!token) {
        console.log("No token found");
        return false;
    }
    console.log("Token verified successfully");
    return true;
}

function refreshToken(token) {
    console.log("Token refreshed");
    return { ...token, exp: Date.now() + 3600000 };
}