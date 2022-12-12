import { useState, useEffect } from 'react';
import { baseUrl } from './Constants';
import { useParams } from "react-router-dom";
import Paycheck from './Paycheck';

const Paychecks = (props) => {
    let { id } = useParams(); 
    const [paychecks, setPaychecks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      async function getPaychecks() {
          const raw = await fetch(`${baseUrl}/api/v1/Paycheck/EmployeeId/${id}`);
          const response = await raw.json();
          if (response.success) {
              setPaychecks(response.data);
              setError(null);
          }
          else {
              setPaychecks([]);
              setError(response.error);
          }
      };
      getPaychecks();
  }, []);

  console.log(paychecks);
  return (
    <div className="paycheck-listing">
        <table className="table caption-top">
            <caption>Paychecks for Employee Id: {id}</caption>
            <thead className="table-dark">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Gross Pay</th>
                    <th scope="col">Total Deductions</th>
                    <th scope="col">Base Deduction</th>
                    <th scope="col">Base Deduction/Dependent</th>
                    <th scope="col">Additional Yearly Deduction</th>
                    <th scope="col">Additional Deduction/Dependent</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">Pay Date</th>
                </tr>
            </thead>
            <tbody>
            {paychecks.map(({paycheckId, grossPayPerPaycheck, totalDeductionsPerPaycheck, monthlyBaseDeductionPerPaycheck, deductionsPerDependentPerPaycheck, additionalYearlyDeductionPerPaycheck, additionalDeductionPerDependentPerPaycheck, netPayPerPaycheck, startDate, payDate}) => (
                <Paycheck
                    key={paycheckId}
                    id={paycheckId}
                    grossPayPerPaycheck={grossPayPerPaycheck}
                    totalDeductionsPerPaycheck={totalDeductionsPerPaycheck}
                    monthlyBaseDeductionPerPaycheck={monthlyBaseDeductionPerPaycheck}
                    deductionsPerDependentPerPaycheck={deductionsPerDependentPerPaycheck}
                    additionalYearlyDeductionPerPaycheck={additionalYearlyDeductionPerPaycheck}
                    additionalDeductionPerDependentPerPaycheck={additionalDeductionPerDependentPerPaycheck}
                    netPayPerPaycheck={netPayPerPaycheck}
                    startDate={startDate}
                    payDate={payDate}
                />
            ))}
            </tbody>
        </table>
    </div>
  );
};

export default Paychecks;