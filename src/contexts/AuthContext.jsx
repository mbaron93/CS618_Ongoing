// Import necessary React hooks and PropTypes for validation
import { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

/**
 * AuthContext - React Context for managing authentication state
 * 
 * This context provides authentication state (token) and a setter function
 * to update the token throughout the application without prop drilling.
 * 
 * Default values:
 * - token: null (no user is authenticated by default)
 * - setToken: empty function (will be replaced by actual setter)
 */
export const AuthContext = createContext({
  token: null,
  setToken: () => {},
})

/**
 * AuthContextProvider - Provider component that wraps the application
 * 
 * This component creates and manages the authentication state using useState
 * and provides it to all child components through the Context API.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components that need access to auth state
 * 
 * @example
 * <AuthContextProvider>
 *   <App />
 * </AuthContextProvider>
 */
export const AuthContextProvider = ({ children }) => {
  // State to store the authentication token (null when user is not logged in)
  const [token, setToken] = useState(null)
  
  // Provide the token and setToken function to all child components
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

/**
 * PropTypes validation for AuthContextProvider
 * Ensures that children prop is provided and is a valid React element
 */
AuthContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

/**
 * useAuth - Custom hook for accessing authentication context
 * 
 * This hook simplifies access to the authentication state by providing
 * a convenient way to get both the token and setToken function.
 * 
 * @returns {Array} [token, setToken] - Current token and setter function
 * 
 * @example
 * function LoginComponent() {
 *   const [token, setToken] = useAuth()
 *   
 *   const handleLogin = (newToken) => {
 *     setToken(newToken) // Update the token after successful login
 *   }
 *   
 *   return <div>{token ? 'Logged in' : 'Not logged in'}</div>
 * }
 */
export function useAuth() {
  // Access the context values (token and setToken)
  const { token, setToken } = useContext(AuthContext)
  
  // Return as an array for convenient destructuring
  return [token, setToken]
}