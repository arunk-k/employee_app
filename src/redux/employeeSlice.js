import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees: JSON.parse(sessionStorage.getItem("employees")) || [
        {
            id: "1",
            name: "James Walker",
            department: "Development",
            age: "29",
            address: "London, UK",
            email: "james@gmail.com",
            phone: "7123456789"
        },
        {
            id: "2",
            name: "Oliver Smith",
            department: "HR",
            age: "31",
            address: "Manchester, UK",
            email: "oliver@gmail.com",
            phone: "7234567890"
        },
        {
            id: "3",
            name: "Thomas Brown",
            department: "Design",
            age: "28",
            address: "Birmingham, UK",
            email: "thomas@gmail.com",
            phone: "7345678901"
        },
        {
            id: "4",
            name: "William Davis",
            department: "Marketing",
            age: "27",
            address: "Leeds, UK",
            email: "william@gmail.com",
            phone: "7456789012"
        },
        {
            id: "5",
            name: "Henry Wilson",
            department: "Finance",
            age: "30",
            address: "Bristol, UK",
            email: "henry@gmail.com",
            phone: "7567890123"
        },
        {
            id: "6",
            name: "George Evans",
            department: "Support",
            age: "26",
            address: "Liverpool, UK",
            email: "george@gmail.com",
            phone: "7678901234"
        },
        {
            id: "7",
            name: "Edward Moore",
            department: "QA",
            age: "32",
            address: "Sheffield, UK",
            email: "edward@gmail.com",
            phone: "7789012345"
        },
        {
            id: "8",
            name: "Daniel Taylor",
            department: "Development",
            age: "29",
            address: "Nottingham, UK",
            email: "daniel@gmail.com",
            phone: "7890123456"
        },
        {
            id: "9",
            name: "Matthew Harris",
            department: "Design",
            age: "27",
            address: "Southampton, UK",
            email: "matthew@gmail.com",
            phone: "7901234567"
        },
        {
            id: "10",
            name: "Joseph Clark",
            department: "Operations",
            age: "33",
            address: "Leicester, UK",
            email: "joseph@gmail.com",
            phone: "7012345678"
        }
    ]
};

const employeeSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload)
            sessionStorage.setItem("employees", JSON.stringify(state.employees))
        },
        deleteEmployee: (state, action) => {
            state.employees = state.employees.filter(emp => emp.id != action.payload)
            sessionStorage.setItem("employees", JSON.stringify(state.employees))
        },
        editEmployee: (state, action) => {
            state.employees = state.employees.map(item => item.id == action.payload.id ? action.payload : item)
            sessionStorage.setItem("employees", JSON.stringify(state.employees))
        }
    }
})

export const { addEmployee, deleteEmployee, editEmployee } = employeeSlice.actions
export default employeeSlice.reducer
