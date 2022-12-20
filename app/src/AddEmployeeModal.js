import { useState } from 'react';
import { baseUrl } from './Constants';

const initialValues = {
    firstName: "",
    lastName: "",
    salary: "",
    dob: "",
    dep1FirstName: "",
    dep1LastName: "",
    dep1Dob: "",
    dep1Relationship: "",
    dep2FirstName: "",
    dep2LastName: "",
    dep2Dob: "",
    dep2Relationship: "",
    salaryNote: ""
};

const AddEmployeeModal = (props) => {   
    const [values, setValues] = useState(initialValues); 
    const [errors, setErrors] = useState([]);

    let handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
        //Name
        if(!fields["name"]){
          formIsValid = false;
          errors["name"] = "Cannot be empty";
        }
    
        if(typeof fields["name"] !== "undefined"){
          if(!fields["name"].match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["name"] = "Only letters";
          }      	
        }
    
        //Email
        if(!fields["email"]){
          formIsValid = false;
          errors["email"] = "Cannot be empty";
        }
    
        if(typeof fields["email"] !== "undefined"){
          let lastAtPos = fields["email"].lastIndexOf('@');
          let lastDotPos = fields["email"].lastIndexOf('.');
    
          if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
          }
        }
    
    
    
        this.setState({errors: errors});
        return formIsValid;
      }

      if(this.handleValidation()){
        alert("Form submitted");
      }else{
        alert("Form has errors.")
      }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleClose = () => {
        document.getElementById('closeModal').click();
    }

    const createBody = () => {
        let body = JSON.stringify({
            'firstName': values.firstName,
            'lastName': values.lastName,
            'salary': parseFloat(values.salary), 
            'dateOfBirth': '1950-12-12T23:12:51.672Z', //convert to this format?
            'dependents': [
                {
                    'firstName': values.dep1FirstName,
                    'lastName': values.dep1LastName,
                    'dateOfBirth': '2000-12-12T23:12:51.672Z',
                    'relationship': parseInt(values.dep1Relationship)//convert to int?
                },
                {
                    'firstName': values.dep2FirstName,
                    'lastName': values.dep2LastName,
                    'dateOfBirth': '2000-12-12T23:12:51.672Z',
                    'relationship': parseInt(values.dep2Relationship)
                }
            ],
            'salaryNote': values.salaryNote
        });

        return body;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const bodyTest = JSON.stringify({
            'firstName': 'Homer',
            'lastName': 'Simpson',
            'salary': 100000,
            'dateOfBirth': '1950-12-12T23:12:51.672Z',
            'dependents': [
                {
                    'firstName': 'Bart',
                    'lastName': 'Simpson',
                    'dateOfBirth': '2000-12-12T23:12:51.672Z',
                    'relationship': 1
                },
                {
                    'firstName': 'Marge',
                    'lastName': 'Simpson',
                    'dateOfBirth': '2000-12-12T23:12:51.672Z',
                    'relationship': 3
                }
            ],
            'salaryNote': 'new hire'
        })
    
        console.log(bodyTest);
        console.log("/////////////////////")


        console.log(values);
        let body = createBody();
        console.log(body);
    
        const raw = await fetch(`${baseUrl}/api/v1/Employees`, {
            method: 'POST',
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json'
            },
            body: body
        });
        const response = await raw.json();
                if (response.success) {
                    //close modal and return to index
                    handleClose();
                    props.getEmployees();
                }
                else {
                    //set error
                }
       
    };

    return (
        <div className="modal fade" id="add-employee-modal" tabIndex="-1" aria-labelledby="add-employee-modal-label" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="add-employee-modal-label">Add/Edit Employee</h1>
                        <button type="button" id="closeModal" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">First Name</label>
                            <input className="form-control" name="firstName" value={values.firstName} onChange={handleInputChange}/>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="name">Last Name</label>
                            <input className="form-control" name="lastName" value={values.lastName} onChange={handleInputChange}/>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="name">Salary</label>
                            <input className="form-control" name="salary" value={values.salary} onChange={handleInputChange} />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="name">Date Of Birth</label>
                            <input className="form-control" name="dob" value={values.dob} onChange={handleInputChange} />
                        </div>
                        <br />
                        <hr />
                        <br />
                        {/* ideally want to make this dynamic, able to add as many dependents as you want etc */}
                        <div className="form-group">
                            <label htmlFor="name">Dep. 1 First Name</label>
                            <input className="form-control" name="dep1FirstName" value={values.dep1FirstName} onChange={handleInputChange} />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="name">Dep. 1 Last Name</label>
                            <input className="form-control" name="dep1LastName" value={values.dep1LastName} onChange={handleInputChange} />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="name">Dep. 1 Date Of Birth</label>
                            <input className="form-control" name="dep1Dob" value={values.dep1Dob} onChange={handleInputChange} />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="name">Dep. 1 Relationship</label>
                            <select name="dep1Relationship" value={values.dep1Relationship} onChange={handleInputChange}>
                                <option value="0">None</option>
                                <option value="1">Spouse</option>
                                <option value="2">Domestic Partner</option>
                                <option value="3">Child</option>
                            </select>
                        </div>

                        <br />
                        <hr />
                        <br />
                        <div className="form-group">
                            <label htmlFor="name">Dep. 2 First Name</label>
                            <input className="form-control" name="dep2FirstName" value={values.dep2FirstName} onChange={handleInputChange}/>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="name">Dep. 2 Last Name</label>
                            <input className="form-control" name="dep2LastName" value={values.dep2LastName} onChange={handleInputChange}/>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="name">Dep. 2 Date Of Birth</label>
                            <input className="form-control" name="dep2Dob" value={values.dep2Dob} onChange={handleInputChange}/>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="name">Dep. 2 Relationship</label>
                            <select name="dep2Relationship"  value={values.dep2Relationship} onChange={handleInputChange}>
                                <option value="0">None</option>
                                <option value="1">Spouse</option>
                                <option value="2">Domestic Partner</option>
                                <option value="3">Child</option>
                            </select>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEmployeeModal;