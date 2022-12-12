const handleSubmit = (event) => {
    event.preventDefault();

    const emailInput = event.target.email; // accessing directly
    const ageInput = event.target.elements.age; // accessing via `form.elements`

    console.log(emailInput.value); // output: 'foo@bar.com'
    console.log(ageInput.value); // output: '18'
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
                        <div className="modal-body">
                            <input type="email" name="email" defaultValue="foo@bar.com" />
                            <input type="number" name="age" min="18" max="60" defaultValue="18" />
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