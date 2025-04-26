// const { get } = require("https");
const brokerAddress = 'mqtt://test.mosquitto.org:8080/';
const topic = ['home/Solax/BatteryTemperature',
    'home/Solax/PvVoltage2',
    'home/Solax/GridPower',
];
let val =[];
let i =[];
let dataArray = '';
var num1, num2, num3 =''
let voltagevalue = '';
let max = 500;
let test = [];
const client = mqtt.connect(brokerAddress)

client.on('connect',()=>{
    console.log("connected to MQTT broker")
    client.subscribe(topic,(err)=>{
        if(!err){
            console.log("subscribed to topic");
        }
        else{
            console.error("Error subscribing to topic:",topic)
        }
    })
});
client.on('message',(topic,message,clientID)=>{
    const value = message.toString();
    console.log("Recevied message:",value,topic,clientID);
})

if(topic === 'home/Solax/BatteryTemperature'){ 
    document.getElementById("clientID").textContent = value 
    num1um1=value; 
    test.push({battery:num1}) 
    // console.log({battery:num1}) 
    } 
    else if(topic === 'home/Solax/PvVoltage2'){ 
    document.getElementById("Amount").textContent = value 
    num2 = value 
    test.push({voltage:num2}) 
    // console.log({voltage:num2}) 
    } 
    else if(topic === 'home/Solax/GridPower') { 
    var random = (Math.random()*2 + 10).toFixed(2); 
    document.getElementById("Property").textContent = random 
    document.getElementById("Property1").textContent = random 
    voltagevalue= value 
    // num3 = value 
    num3=(Math.random()*2 + 10).toFixed(2) 
    test.push({current:num3}) 
    // console.log(num3) 
    // console.log({current:num3}) 
    Checkthershold(voltagevalue); 
    val.push(value) 
    } 
    