// const { get } = require("https");
// const brokerAddress = 'mqtt://test.mosquitto.org:8080/';
// const topic = [
//     'home/Solax/BatteryTemperature',
//     'home/Solax/PvVoltage2',
//     'home/Solax/GridPower',
// ];
// let val =[];
// let i =[];
// let dataArray = '';
// var num1, num2, num3 =''
// let voltagevalue = '';
// let max = 500;
// let test = [];
// let value = '';
// const client = mqtt.connect(brokerAddress)

// client.on('connect',()=>{
//     console.log("connected to MQTT broker")
//     client.subscribe(topic,(err)=>{
//         if(!err){
//             console.log("subscribed to topic");
//         }
//         else{
//             console.error("Error subscribing to topic:",topic)
//         }
//     })
// });
// client.on('message',(topic,message,clientID)=>{
//     const value = message.toString();
//     console.log("Recevied message:",value,topic,clientID);
// })

// if(topic === 'home/Solax/BatteryTemperature'){ 
//     document.getElementById("clientID").textContent = value 
//     num1um1=value; 
//     test.push({battery:num1}) 
//     // console.log({battery:num1}) 
//     } 
//     else if(topic === 'home/Solax/PvVoltage2'){ 
//     document.getElementById("Amount").textContent = value 
//     num2 = value 
//     test.push({voltage:num2}) 
//     // console.log({voltage:num2}) 
//     } 
//     else if(topic === 'home/Solax/GridPower') { 
//     var random = (Math.random()*2 + 10).toFixed(2); 
//     document.getElementById("Property").textContent = random 
//     document.getElementById("Property1").textContent = random 
//     voltagevalue= value 
//     // num3 = value 
//     num3=(Math.random()*2 + 10).toFixed(2) 
//     test.push({current:num3}) 
//     // console.log(num3) 
//     // console.log({current:num3}) 
//     Checkthershold(voltagevalue); 
//     val.push(value) 
//     } 






//     const brokerAddress = 'mqtt://test.mosquitto.org:8080/';
// const topics = [
//     'home/Solax/BatteryTemperature',
//     'home/Solax/PvVoltage2',
//     'home/Solax/GridPower',
// ];

// // Connect to MQTT broker
// const client = mqtt.connect(brokerAddress);

// let max = 500;
// let val = [];
// let dataArray = '';

// client.on('connect', () => {
//     console.log(" Connected to MQTT broker");

//     client.subscribe(topics, (err) => {
//         if (!err) {
//             console.log(" Subscribed to topics:", topics);
//         } else {
//             console.error(" Error subscribing to topics:", err);
//         }
//     });
// });

// // Receive messages
// client.on('message', (topic, message) => {
//     console.log(` Message received! Topic: ${topic}, Value: ${message.toString()}`);
// });

// client.on('message', (topic, message) => {
//     const value = message.toString();
    
//     if (topic === 'home/Solax/BatteryTemperature') {
//         const element = document.getElementById("clientID");
//         if (element) {
//             element.textContent = value;
//         } else {
//             // console.warn(" Element with ID 'clientID' not found!");
//         }
//     } else if (topic === 'home/Solax/PvVoltage2') {
//         const element = document.getElementById("Amount");
//         if (element) {
//             element.textContent = value;
//         } else {
//             // console.warn(" Element with ID 'Amount' not found!");
//         }
//     } else if (topic === 'home/Solax/GridPower') {
//         var randomValue = (Math.random() * 2 + 10).toFixed(2);
//         const propertyElement = document.getElementById("property");
//         const propertyElement1 = document.getElementById("property1");

//         if (propertyElement && propertyElement1) {
//             propertyElement.textContent = randomValue;
//             propertyElement1.textContent = randomValue;
//         } else {
//             // console.warn(" Elements 'property' or 'property1' not found!");
//         }
//     }
    
//     // console.log(" UI Updated Successfully!");
// });
// // graph

// // chart

// var chartDom = document.getElementById('doughnut');
// var myChart = echarts.init(chartDom);
// var option;

// const grid = document.getElementById('grid');
// const volt = document.getElementById('volt');
// const battery = document.getElementById('battery');

// if (grid && volt && battery) {
//     grid.addEventListener('click', function() {
//         grid.style.backgroundColor = "green";
//         volt.style.backgroundColor = "white";
//         battery.style.backgroundColor = "white";
//     });

//     volt.addEventListener('click', function() {
//         grid.style.backgroundColor = "white";
//         volt.style.backgroundColor = "green";
//         battery.style.backgroundColor = "white";
//     });

//     battery.addEventListener('click', function() {
//         grid.style.backgroundColor = "white";
//         volt.style.backgroundColor = "white";
//         battery.style.backgroundColor = "green";
//     });
// } else {
//     console.error("One or more elements not found!");
// }
// const innerLable = {
//     id: 'innerLable',
//     afterdatasetdraw(chart,args,pluginoptions){
//         var {ctx} = chart;
//         var meta = args.meta;
//         const xCoor = meta.data[0].x;
//         const yCoor = meta.data[0].y;
//         const perc = dataArray/max*100;
//         ctx.textAlign = 'center';
//         ctx.font = 'bold 40px Arial';
//         ctx.fillText(perc.toFixed(2) + '%' ,
//     xCoor,yCoor);
//     },
// };

// const options = {
//     series:[
//         {radius:['20%','20%'],

//         }],
//         responsive:false,
//         plugins:{

//         },
// };

// const value = val;
// const data = {
//     // labels:['power'],
//     datasets:[
//         {
//             data:[dataArray,100-dataArray],
//             backgroundColor:['#1679ab'],
//             borderwidth:1,
//             cutout:'80%'
//         },
//     ],
// };
// Chart.register(innerLable);
// const cx = document.getElementById('doughnut')
// new Chart(cx ,{
//     type:'doughnut',
//     plugins:[innerLable],
//     data,
//     options:{
//         layout:{
//             padding:0
//         },
//     }
// });
    