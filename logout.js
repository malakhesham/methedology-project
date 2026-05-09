// MET-22: Fix Token Not Cleared on Logout

function logoutUser() {
    try {
        // Fix: Clear all auth tokens on logout
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        sessionStorage.removeItem('userSession');
        
        console.log("All tokens cleared successfully");
        
        // Redirect to login page
        window.location.href = '/login'; 
        
    } catch (error) {
        console.error("Logout error:", error.message);
    }
}

function clearUserData() {
    localStorage.clear();
    sessionStorage.clear();
    console.log("All user data cleared");
}