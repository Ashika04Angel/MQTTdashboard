const brokerAddress = 'mqtt://test.mosquitto.org:8080/';
const topic= [
    // 'sensors/temperature/livingroom',
    'home/Solax/BatteryTemperature',
    'home/Solax/PvVoltage2',
    'home/Solax/GridPower'
];
const client = mqtt.connect(brokerAddress)
let val = [];
let i =[];
let dataArray = '';
var num1 ,num2 ,num3 = '';
let max = 500;
let test = [];
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
if(topic === 'home/Solax/BatteryTemperature'){
    document.getElementById("clientID").textContent = value
    num1 = parseFloat(value);
    test.push({battery:num1})
    console.log({battery:num1})
}
else if(topic === 'home/Solax/PvVoltage2'){
    document.getElementById("Amount").textContent = value;
    num2 = value
    console.log(num2)
}
else if(topic === 'home/Solax/GridPower'){
    document.getElementById("property").textContent = JSON.parse(value);
    num3 = value
    console.log(num3)
}
// Doughnut chart
var chartDom = document.getElementById('doughnut');
var myChart = echart.init(chartDom);
var option;
const timer = document.getElementById

