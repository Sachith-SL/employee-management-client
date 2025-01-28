import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteEmployee, getAllEmployees } from "../api/EmployeeService";

interface Employee {
  id: number;
  name: string;
  department: string;
  salary: number;
}

function ReadEmployee() {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(0);
  const [data, setData] = useState([]);
  const handleGetEmployee = async () => {
    try {
      const data = await getAllEmployees();
      setData(data.employeeList);
    } catch (error) {}
  };

  const handleDeleteEmployee = (id: number) => {
    const isDeleteConfirmec = window.confirm("Are you sure?");
    if (isDeleteConfirmec) {
      deleteEmployee(id);
    }
    window.location.reload();
    // navigate("");
  };

  useEffect(() => {
    handleGetEmployee();
  }, []);

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Department</th>
            <th scope="col">Salary</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody key={refresh}>
          {data.map((employee: Employee, index: number) => (
            <tr key={index}>
              <th scope="row">{employee.id}</th>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
              <td>
                <Link
                  to={`/edit/${employee.id}`}
                  state={{ employee }}
                  className="btn btn-warning"
                >
                  Edit
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary">
        <Link className="btn btn-primary" to="/new">
          Create New Employee
        </Link>
      </button>
    </div>
  );
}

export default ReadEmployee;
