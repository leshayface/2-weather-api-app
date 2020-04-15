import React from 'react';

const Weather = ({city, country, title, description, temperature, humidity, realFeel}) => {
  return ( 
    <div className="m-2">
      {city && <p><strong>City: </strong>{city}</p>}
      {country && <p><strong>Country: </strong>{country}</p>}
      <div className="weather">
        {title && <p><strong>Weather: </strong>{title} (</p>}
        {description && <p>{description})</p>}
      </div>
      {temperature && <p><strong>Temperature: </strong>{temperature}&#8451;</p>}
      {realFeel && <p><strong>Real Feel: </strong>{realFeel}&#8451;</p>}
      {humidity && <p><strong>Humidity: </strong>{humidity}&#37;</p>}
    </div>
  );
}
 
export default Weather;