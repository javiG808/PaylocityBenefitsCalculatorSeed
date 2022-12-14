import { baseUrl } from './Constants';

let handleSubmit = async (event) => {
    event.preventDefault();

    console.log(event);
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const salary = event.target.salary.value;
    const dateOfBirth = event.target.dob.value;
    const dependents = [];
    dependents[0] = { firstName: event.target.dep1FirstName.value, lastName: event.target.dep1LastName.value, dateOfBirth: event.target.dep1Dob.value, relationship: event.target.dep1Relationship.value};
    dependents[1] = { firstName: event.target.dep2FirstName.value, lastName: event.target.dep2LastName.value, dateOfBirth: event.target.dep2Dob.value, relationship: event.target.dep2Relationship.value};

    let bodyTest = JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        salary: salary,
        dateOfBirth: dateOfBirth, 
        dependents: dependents
      });

      console.log(bodyTest);

      const raw = await fetch('https://localhost:7124/api/v1/Employees', {
        method: 'POST',
        headers: {
            'accept': 'text/plain',
            'Content-Type': 'application/json'
        },
        // body: '{\n  "firstName": "Homer",\n  "lastName": "Simpson",\n  "salary": 100000,\n  "dateOfBirth": "1950-12-12T23:12:51.672Z",\n  "dependents": [\n    {\n      "firstName": "Bart",\n      "lastName": "Simpson",\n      "dateOfBirth": "2000-12-12T23:12:51.672Z",\n      "relationship": 1\n    },\n\t{\n      "firstName": "Marge",\n      "lastName": "Simpson",\n      "dateOfBirth": "2000-12-12T23:12:51.672Z",\n      "relationship": 3\n    }\n  ],\n  "salaryNote": "new hire"\n}',
        body: JSON.stringify({
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
    });
    const response = await raw.json();
            if (response.success) {
                //close modal and return to index
            }
            else {
                //set error
            }
   
};

const AddEmployeeModal = () => {
    return (
        <div className="modal fade" id="add-employee-modal" tabIndex="-1" aria-labelledby="add-employee-modal-label" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="add-employee-modal-label">Add/Edit Employee</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">First Name</label>
                            <input className="form-control" id="firstName" />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="name">Last Name</label>
                            <input className="form-control" id="lastName" />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="name">Salary</label>
                            <input className="form-control" id="salary" />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="name">Date Of Birth</label>
                            <input className="form-control" id="dob" />
                        </div>
                        <br />
                        <hr />
                        <br />
                        {/* ideally want to make this dynamic, able to add as many dependents as you want etc */}
                        <div className="form-group">
                            <label htmlFor="name">Dep. 1 First Name</label>
                            <input className="form-control" id="dep1FirstName" />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="name">Dep. 1 Last Name</label>
                            <input className="form-control" id="dep1LastName" />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="name">Dep. 1 Date Of Birth</label>
                            <input className="form-control" id="dep1Dob" />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="name">Dep. 1 Relationship</label>
                            <select name="dep1Relationship" id="dep1Relationship">
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
                            <input className="form-control" id="dep2FirstName" />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="name">Dep. 2 Last Name</label>
                            <input className="form-control" id="dep2LastName" />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="name">Dep. 2 Date Of Birth</label>
                            <input className="form-control" id="dep2Dob" />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="name">Dep. 2 Relationship</label>
                            <select name="dep2Relationship" id="dep2Relationship">
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