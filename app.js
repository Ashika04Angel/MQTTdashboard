const brokerAddress = 'mqtt://test.mosquitto.org:8080/';
const topics = [
    'home/Solax/BatteryTemperature',
    'home/Solax/PvVoltage2',
    'home/Solax/GridPower',
];

// Connect to MQTT broker
const client = mqtt.connect(brokerAddress);

client.on('connect', () => {
    console.log(" Connected to MQTT broker");

    client.subscribe(topics, (err) => {
        if (!err) {
            console.log(" Subscribed to topics:", topics);
        } else {
            console.error(" Error subscribing to topics:", err);
        }
    });
});

// Receive messages
client.on('message', (topic, message) => {
    console.log(` Message received! Topic: ${topic}, Value: ${message.toString()}`);
});

client.on('message', (topic, message) => {
    const value = message.toString();
    
    if (topic === 'home/Solax/BatteryTemperature') {
        const element = document.getElementById("clientID");
        if (element) {
            element.textContent = value;
        } else {
            // console.warn(" Element with ID 'clientID' not found!");
        }
    } else if (topic === 'home/Solax/PvVoltage2') {
        const element = document.getElementById("Amount");
        if (element) {
            element.textContent = value;
        } else {
            // console.warn(" Element with ID 'Amount' not found!");
        }
    } else if (topic === 'home/Solax/GridPower') {
        var randomValue = (Math.random() * 2 + 10).toFixed(2);
        const propertyElement = document.getElementById("property");
        const propertyElement1 = document.getElementById("property1");

        if (propertyElement && propertyElement1) {
            propertyElement.textContent = randomValue;
            propertyElement1.textContent = randomValue;
        } else {
            // console.warn(" Elements 'property' or 'property1' not found!");
        }
    }
    
    // console.log(" UI Updated Successfully!");
});