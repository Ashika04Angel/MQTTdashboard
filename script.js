const brokerAddress = 'mqtt://test.mosquitto.org:8080/';
const topic= [
    'home/Solax/BatteryTemperature',
    'home/Solax/PvVoltage2',
    'home/Solax/GridPower'
];
const client = mqtt.connect(brokerAddress)
let val, i, test = []
let dataArray, voltagevalue = "";
let max = 500;
var num1,num2,num3 = '';

client.on('connect',()=>{
    console.log("connected to MQTT broker")
    client.subscribe(topic,(err) =>{
        if(!err){
            console.log("Subscribed to topic:",topic);
        }
        else{
            console.error("Error subscribing to topic",err);
        }
    });
});
client.on('message',(topic,message,clientID)=>{
    const value = message.toString();
    console.log("Recevied message:",value,topic,clientID)
})
