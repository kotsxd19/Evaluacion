import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import Nav from '../Components/Nav' 

const Home = () => {
  const navigate = useNavigate() 
  const token = localStorage.getItem('fakestore_token') || sessionStorage.getItem('fakestore_token')
 
  const user = localStorage.getItem('fakestore_user') || sessionStorage.getItem('fakestore_user') || ''

  useEffect(() => {

    if (!token) {
      navigate('/')
    }
  }, [navigate, token])

  

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {token && <Nav />} {}
      <div className="flex flex-col items-center justify-center flex-grow">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-yellow-400 text-shadow-lg/10">
            Bienvenido 
          </h1>
          <p>{user ? `${user}` : ''}</p>
        </header>
        <main className="mt-8">
        </main>
      </div>
    </div>
  )
}

export default Home
