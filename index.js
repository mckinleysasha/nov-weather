body {
  background: #fefef7;
  font-family: "Roboto", sans-serif;
}

a {
  color: #f16e5d;
}

.weather-app {
  background: white;
  max-width: 600px;
  margin: 60px auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 30px 50px rgba(65, 50, 100, 0.08);
}

header {
  border-bottom: 1px solid #7254bd;
  padding-bottom: 30px;
}

.search-input {
  background-color: #aba7b6c4;
  border: none;
  color: rgba(39, 33, 66, 0.4);
  font-size: 16px;
  padding: 20px;
  width: 75%;
  border-radius: 6px;
}

.search-button {
  margin-left: 5px;
  font-size: 16px;
  background-color: #f1a05d;
  color: white;
  border: none;
  padding: 20px;
  line-height: 1;
  border-radius: 5px;
}

main {
  padding: 30px 0;
}

.current-temperature {
  font-size: 48px;
}

.current-weather {
  display: flex;
  justify-content: space-between;
}

.current-city {
  font-size: 38px;
  font-weight: 900;
  margin: 0;
}

.current-details {
  color: rgba(39, 33, 66, 0.4);
  font-size: 16px;
  font-weight: 400;
  body {
  line-height: 1.5;
}

.current-details strong {
  color: #f65282;
}

.current-temperature-icon {
  position: relative;
  top: -0.5rem; /* Adjusted for better accessibility */
  font-size: 2.5rem; /* Changed to rem for scalability */
  margin-right: 0.625rem; /* Changed to rem for scalability */
}

.current-temperature-value {
  font-size: 5rem; /* Changed to rem for scalability */
  font-weight: bold;
}

.current-temperature-unit {
  font-size: 1.75rem; /* Changed to rem for scalability */
  position: relative;
  top: -2rem; /* Adjusted for better accessibility */
}

footer {
  border-top: 1px solid #f9f7fe;
  text-align: center;
  padding-top: 1rem; /* Changed to rem for scalability */
  color: rgba(39, 33, 66, 0.4);
}