// change server url in deployment

// export const SERVER_URL = "https://detectorserver.azurewebsites.net";
export const SERVER_URL = window.location.port === "3000" ? "http://localhost:8080" : "http://localhost:8080";
export const WEBSOCKET_URL = window.location.port === "3000" ? "ws://localhost:8080" : "wss://detectorserver.azurewebsites.net:8081" 
export const D_ERR_SHADOW = "0 0 3px 2px rgb(230 73 53)";
export const NAME_REGEX = /^[a-zA-Z]+$/;
export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/