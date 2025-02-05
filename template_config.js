/* Configuration file */
/* Rename file to config.js before editing */
module.exports = {
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // "Old" Landroid settings - these must be set correctly regardless of home automation system, if you have a Landroid
  // 2015 or 2016 model whose app communicates directly with the mower
  
  /** The PIN code to your Landroid */
  pinCode: "YOUR PIN CODE", // <---- MUST BE EDITED!!!
  
  /** 
   * The URL where your Worx Landroid is accessible by a web browser. Examples: "https://192.168.0.5", "http://mylandroid.dynamic-ip-provider:8080"
   * The default "http://Landroid" is how the Landroid identifies itself on the network, and should work in most cases where
   * this application and the Landroid are on the same network. (NOTE! No '/' at the end)
   */
  landroidUrl: "http://Landroid",
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // "New" Landroid settings - these must be set correctly regardless of home automation system, if you have a Landroid
  // 2017 model whose app communicates with the mower via a cloud service
  
  /** The e-mail address of the account that you use in the app */
  email: "your@email.com", // <---- MUST BE EDITED!!!
  
  /** The password of the account that you use in the app */
  password: "Your_password", // <---- MUST BE EDITED!!!
  
  /** The MAC address of your mower. (Uppercase/lowercase is irrelevant; colon may be used as separator) */
  macAddress: "AA:BB:CC:DD:EE:FF",
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Settings needed if you plan to use Domoticz
  
  /** 
   * The URL to the Domoticz server. The default setting assumes the server is running on the same unit as this app,
   * on the default port (8080)
   */
  domoticzUrl: "http://localhost:8080",

  /** The URL of your MQTT broker, such as Mosquitto. Public server mqtt://test.mosquitto.org may be used for testing */ 
  mqttBrokerUrl: 'mqtt://localhost',

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Settings needed if you plan to use Home Assistant 
  
  /** 
   * The URL where Home Assistant web UI is available. Defaults to the same computer as this app is run, with the default 
   * Home Assistant port.
   */
  homeAssistantUrl: "http://localhost:8123",
  
  /** The password you have chosen for Home Assistant */
  homeAssistantPassword: "YOUR HOME ASSISTANT PASSWORD" // <---- Must be edited if you plan to use Home Assistant!!!
};