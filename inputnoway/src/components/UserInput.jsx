function UserInput({input,handleChange}) {
  return (
    <section id="user-input">
        <div className="input-group">
          <p>
            <lable>Intial Investment</lable>
            <input type="number"
            value={input.initialInvestment} 
            required 
            onChange={(event)=>handleChange('initialInvestment',event.target.value)}/>
          </p>
          <p>
            <lable>Annual Investment</lable>
            <input type="number"
            value={input.annualInvestment}
            required 
            onChange={(event)=>handleChange('annualInvestment',event.target.value)}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <lable>Expected Return</lable>
            <input type="number"
            value={input.expectedReturn} 
            required 
            onChange={(event)=>handleChange('expectedReturn',event.target.value)}/>
          </p>
          <p>
            <lable>Duration</lable>
            <input type="number"
            value={input.duration} 
            required 
            onChange={(event)=>handleChange('duration',event.target.value)}/>
          </p>
        </div>
    </section>
  )
}

export default UserInput;