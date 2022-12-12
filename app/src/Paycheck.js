import { currencyFormat } from "./Constants";

const Paycheck = (props) => {
    const grossPay = props.grossPayPerPaycheck || 0;
    const totalDeductionsPerPaycheck = props.totalDeductionsPerPaycheck || 0;
    const monthlyBaseDeductionPerPaycheck = props.monthlyBaseDeductionPerPaycheck || 0;
    const deductionsPerDependentPerPaycheck = props.deductionsPerDependentPerPaycheck || 0;
    const additionalYearlyDeductionPerPaycheck = props.additionalYearlyDeductionPerPaycheck || 0;
    const additionalDeductionPerDependentPerPaycheck = props.additionalDeductionPerDependentPerPaycheck || 0;
    const netPayPerPaycheck = props.netPayPerPaycheck || 0;
    const startDate = props.startDate;
    const payDate = props.payDate;

    return (
        <tr>
            <th scope="row">{props.id}</th> 
            <td>{currencyFormat(grossPay)}</td>
            <td>{currencyFormat(totalDeductionsPerPaycheck)}</td>
            <td>{currencyFormat(monthlyBaseDeductionPerPaycheck)}</td>
            <td>{currencyFormat(deductionsPerDependentPerPaycheck)}</td>
            <td>{currencyFormat(additionalYearlyDeductionPerPaycheck)}</td>
            <td>{currencyFormat(additionalDeductionPerDependentPerPaycheck)}</td>
            <td>{currencyFormat(netPayPerPaycheck)}</td>
            <td>{startDate}</td>
            <td>{payDate}</td>
        </tr>
    );
};

export default Paycheck;
//should props.id be  paycheckId? 