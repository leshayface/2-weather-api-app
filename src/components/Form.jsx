import React from 'react';

const Form = ({getWeather}) => {
  return ( 
    <form>
      <div className="input-group mb-3">
        <input type="text" className="form-control rounded mr-2" name="city" placeholder="City..." />
        <input type="text" className="form-control rounded mr-2" name="country" placeholder="Country..." />
        <button type="button" className="btn btn-warning" onClick={getWeather}>Submit</button>
      </div>
    </form>
  );
}
 
export default Form;