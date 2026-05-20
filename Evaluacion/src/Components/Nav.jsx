import { useEffect } from 'react'
import { Link } from 'react-router' 
import { useNavigate } from 'react-router'






  

const Nav = () => {

  const navigate = useNavigate() 
  const token = localStorage.getItem('fakestore_token') || sessionStorage.getItem('fakestore_token')
  // El usuario puede haber elegido guardar la sesión en localStorage o sessionStorage.
  const user = localStorage.getItem('fakestore_user') || sessionStorage.getItem('fakestore_user') || ''

   useEffect(() => {
    // Si no hay token, redirige al login.
    if (!token) {
      navigate('/')
    }
  }, [navigate, token])

const handleLogout = () => {

    localStorage.removeItem('fakestore_token')
    localStorage.removeItem('fakestore_user')
    localStorage.removeItem('fakestore_email')
    sessionStorage.removeItem('fakestore_token')
    sessionStorage.removeItem('fakestore_user')
    sessionStorage.removeItem('fakestore_email')
    navigate('/')
  }

  
  return (
    <nav className="bg-yellow-400 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

         <ul className="flex space-x-4">
          <li>
            <Link to="/home" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-200">
              Post
            </Link>
          </li>
        </ul>

        <button onClick={handleLogout} className="px-6 py-3  bg-yellow-400 rounded-lg hover:bg-yellow-600">
            Cerrar Sesión
        </button>
      </div>
    </nav>
  )
}

export default Nav