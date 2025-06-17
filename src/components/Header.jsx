import { Container, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <Navbar style={{ backgroundColor: "#071f26" }} expand="lg">
                <Container>
                         <Navbar.Brand as={Link} to="/">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/512/11246/11246228.png" width="30" height="30" className="d-inline-block align-top" />
                        {' '}
                        <span className='text-light'>Employee Management System</span>
                    </Navbar.Brand>
                    <Navbar.Toggle className='mt-2 custom-toggler' aria-controls="basic-navbar" />
                    <Navbar.Collapse className='justify-content-end pt-2' id="basic-navbar-nav">
                        <Navbar.Text className=''>
                            <Link to={"/add"} style={{ backgroundColor: "#04495c", color: "#fcf2f7" }} className='btn btn-light  mb-1'>Add Employee <i className="fa-solid fa-plus fa-sm"></i> </Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
