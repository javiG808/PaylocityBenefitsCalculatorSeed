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

    try {
        let res = await fetch(`${baseUrl}/api/v1/Employees/`, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            salary: salary,
            dateOfBirth: dateOfBirth, 
            dependents: dependents
          }),
        });
        //if success etc
        console.log(res);
      } catch (err) {
        console.log(err);
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