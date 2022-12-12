import { baseUrl, currencyFormat } from "./Constants";
import { useNavigate } from "react-router-dom";

const Employee = (props) => {
    const firstName = props.firstName || '';
    const lastName = props.lastName || '';
    const salary = props.salary || 0;
    //WHATS  USE navigate??
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        await fetch(`${baseUrl}/api/v1/Employees/${id}`, {
            method: 'DELETE',
          })
          //handle success/error
          //refresh page
          navigate(0)
      }
      
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{lastName}</td>
            <td>{firstName}</td>
            <td>{props.dateOfBirth}</td>
            <td>{currencyFormat(salary)}</td>
            <td>{props.dependents?.length || 0}</td>
            <td>
            <button onClick={()=> navigate(`/PaychecksForEmployeeId/${props.id}`)}>Paychecks</button> | <button data-bs-toggle="modal" id={`${props.id}`} data-bs-target={`#${props.editModalId}`}>Edit</button> | <button onClick={() => handleDelete(props.id)}>Delete</button>
            </td>
        </tr>
    );
};

export default Employee;