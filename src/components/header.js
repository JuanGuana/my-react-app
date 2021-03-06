import React from 'react'
import Link from 'gatsby-link'
import '../components/Header.css'

class Header extends React.Component {
 constructor(props) {
   super(props)

   this.state = {
     hasScrolled: false
   }
 }

 componentDidMount() {
   window.addEventListener('scroll', this.handleScroll)
 }

 handleScroll = (event) => {
   const scrollTop = window.pageYOffset

   if (scrollTop > 50) {
     this.setState({hasScrolled: true})
   } else {
     this.setState({hasScrolled: false})
   }
 }
 
  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup"> 
          <Link to="/"><img src={'../images/logo-designcode.svg'} width="30" /></Link>
          <Link to="/courses">Cursos</Link>
          <Link to="/downloads">Descargas</Link>
          <Link to="/workshops">Talleres</Link>
          <Link to="/buy"><button>Comprar</button></Link>
        </div>
      </div>
    )
  }
}

export default Header
