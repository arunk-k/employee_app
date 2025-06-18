import { Container, Navbar } from "react-bootstrap"
import { useState } from "react"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Alert } from "react-bootstrap"
import { addEmployee } from "../redux/employeeSlice"

const AddEmployee = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()

    const { employees } = useSelector(state => state.employeeSlice);
    const [data, setData] = useState({ name: '', department: '', age: '', address: '', email: '', phone: '' })
    const [showSuccess, setShowSuccess] = useState(false)

    const handleSubmit = () => {
        const { name, department, age, address, email, phone } = data;
        const employeeExisting = employees.find(item => item.email == email || item.phone == phone)

        if (!employeeExisting) {
            if (name && department && age && address && email && phone) {
                dispatch(addEmployee({ id: (employees.length + 1).toString(), ...data }))
                setShowSuccess(true)
                setTimeout(() => nav('/'), 2000)
            } else
                alert("All fields are required.")
        } else
            alert("An employee with this email or phone number already exists.")
    }

    return (
        <>
            <Navbar style={{ backgroundColor: "#071f26" }} expand="lg">
                <Container>
                    <Navbar.Brand className="p-3" as={Link} to={'/'}>
                        <img alt="" src="https://cdn-icons-png.flaticon.com/512/11246/11246228.png" width="30" height="30" className="d-inline-block align-top" />
                        {' '}
                        <span className='text-light'>Employee Management System</span>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <div style={{ background: "linear-gradient(to right,#106c85, #033543)", Height: "100vh" }} className="d-flex justify-content-center pt-5 pb-4 px-3">
                <div className="p-3 p-md-4 rounded border shadow w-100" style={{ background: "linear-gradient(to right,#15718a, #033543)", maxWidth: "500px" }}>

                    <h3 className='ps-4 pt-4 text-light'>Add Employee</h3>
                    {showSuccess && (
                        <div className="pt-3">
                            <Alert variant="info" onClose={() => setShowSuccess(false)} dismissible>
                                Employee added successfully!
                            </Alert>
                        </div>
                    )}

                    <FloatingLabel controlId="floatingName" label="Enter Your Name" className="ms-4 mt-4 me-4 text-secondary">
                        <Form.Control onChange={e => setData({ ...data, name: e.target.value })} value={data.name} type="text" placeholder="name" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingDepartment" label="Enter Your Department" className="ms-4 mt-4 me-4 text-secondary">
                        <Form.Control onChange={e => setData({ ...data, department: e.target.value })} value={data.department} type="text" placeholder="department" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingAge" label="Enter Your Age" className="ms-4 mt-4 me-4 text-secondary">
                        <Form.Control onChange={e => setData({ ...data, age: e.target.value })} value={data.age} type="number" placeholder="age" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingAddress" label="Enter Your Address" className="ms-4 mt-4 me-4 text-secondary">
                        <Form.Control onChange={e => setData({ ...data, address: e.target.value })} value={data.address} as="textarea" placeholder="address" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingEmail" label="Enter Your Email" className="ms-4 mt-4 me-4 text-secondary">
                        <Form.Control onChange={e => setData({ ...data, email: e.target.value })} value={data.email} type="email" placeholder="email" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPhone" label="Enter Your Phone Number" className="ms-4 mt-4 me-4 text-secondary">
                        <Form.Control onChange={e => setData({ ...data, phone: e.target.value })} value={data.phone} type="text" placeholder="phone" />
                    </FloatingLabel>

                    <div className='d-flex justify-content-center gap-3 mt-4'>
                        <button style={{ backgroundColor: "#01607a" }} onClick={handleSubmit} className="btn btn-light text-light mb-4 px-4">Submit</button>
                        <button style={{ backgroundColor: "#455659" }} onClick={() => nav("/")} className="btn btn-light text-light mb-4 px-4">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEmployee
