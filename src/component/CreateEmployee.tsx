import { useState } from "react";
import { create } from "../api/EmployeeService";
import { useNavigate } from "react-router-dom";

function CreateEmployee() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: 0,
    name: "",
    department: "",
    salary: 0,
  });

  const handleCreateEmployee = async (employee: any) => {
    try {
      create(employee);
      alert("Employee created successfully"); // Add this line to show an alert when the employee is created successfully
      navigate("/"); // Redirect to the home page after creating the employee
    } catch (error) {
      console.log("Error in creating employee");
      alert("Error in creating employee");
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleCreateEmployee(employee);
    console.log("employee Data:", employee);
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee: any) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <form
          onSubmit={handleSubmit}
          className="border rounded border-1 p-4 mt-1"
        >
          <h3 className="text-center text-primary">Create New Employee</h3>
          <div className="form-group">
            <label className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Department</label>
            <input
              type="text"
              name="department"
              value={employee.department}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter your department (ex: IT)"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Salary</label>
            <input
              type="text"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter valid password"
            />
          </div>

          <button type="submit" className="btn btn-primary mt-3  w-100">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateEmployee;
