import logo from '../assets/logo.png'
function navbar() {
  return (
    <>
    <div className="navbar">
        <div className="logo">
            <img src={ logo } alt="image" />
        </div>
        <ul>
            <li>Home</li>
            <li>Project</li>
            <li>Contact</li>
        </ul>
    </div>
    </>
  )
}

export default navbar