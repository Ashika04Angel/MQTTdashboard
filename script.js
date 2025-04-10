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
