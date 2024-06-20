import {calculateInvestmentResults,formatter} from "../util/investment"
export default function Result({input}) {
   const result=calculateInvestmentResults(input)
   const intial=result[0].annualInvestment-result[0].interest-result[0].annualInvestment
   //console.log(result);
  return (
   <table id="result">
    <thead> 
        <tr>
            <td>year</td>
            <td>Investment value</td>
            <td>interest</td>
            <td>Total Intrest</td>
            <td>annualInvestment</td>
        </tr>
    </thead>
    <tbody>
      {result.map((row,index)=>{
        const totalintrest=row.valueEndOfYear-row.annualInvestment*row.year-intial
        const totamountinvested=row.valueEndOfYear-totalintrest;
        return(
        <tr key={index}>
          <td>{row.year}</td>
          <td>{formatter.format(row.valueEndOfYear)}</td>
          <td>{formatter.format(row.interest)}</td>
          <td>{formatter.format(totalintrest)}</td>
          <td>{formatter.format(totamountinvested)}</td>
        </tr>)
        })}
    </tbody>
   </table>
  )
}

