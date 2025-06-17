import { Alert, Spinner, Table } from 'react-bootstrap'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteEmployee } from '../redux/employeeSlice'
import Header from '../components/Header'

const Home = () => {
    const { employees } = useSelector(state => state.employeeSlice)
    console.log(employees)

    const dispatch = useDispatch()
    const [showDeleteSuccess, setShowDeleteSuccess] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500)
        return () => clearTimeout(timer)
    }, [])

    const handleDelete = (id) => {
        dispatch(deleteEmployee(id))
        setShowDeleteSuccess(true)
        setTimeout(() => setShowDeleteSuccess(false), 2000)
    }

    return (
        <>
        <Header />
            <div className='container mt-5 pt-2'>
                {showDeleteSuccess && (
                    <Alert variant="danger" onClose={() => setShowDeleteSuccess(false)} dismissible>
                        Employee deleted successfully!
                    </Alert>
                )}
                <div className="table-responsive">
                    <Table style={{ background: "linear-gradient(to right,rgb(21, 113, 138), #033543)" }} className='text-light' responsive="xs">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Age</th>
                                <th>Address</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading
                                    ?
                                    <tr>
                                        <td colSpan="8" className="text-center">
                                            <div className="d-flex justify-content-center align-items-center gap-2">
                                                <span>Loading...</span>
                                                <Spinner animation="grow" variant="light" size="sm" />
                                            </div>
                                        </td>
                                    </tr>
                                    :
                                    employees.length > 0
                                        ?
                                        employees.map((item, index) => (
                                            <tr key={index+1}>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.department}</td>
                                                <td>{item.age}</td>
                                                <td>{item.address}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.email}</td>
                                                <td>
                                                    <Link to={`/edit/${item.id}`} className="btn btn-outline-light btn-sm me-2 mb-2">
                                                        <i className="fa-solid fa-pen"></i>
                                                    </Link>
                                                    <button onClick={() => handleDelete(item.id)} className="btn btn-outline-danger btn-sm mb-2">
                                                        <i className="fa-solid fa-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                        :
                                        <tr>
                                            <td colSpan="8" className="text-center fst-italic">
                                                No employees found.
                                            </td>
                                        </tr>

                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Home
