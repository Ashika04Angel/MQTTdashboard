const brokerAddress = 'mqtt://test.mosquitto.org:8080/';
const topics = [
    'home/Solax/BatteryTemperature',
    'home/Solax/PvVoltage2',
    'home/Solax/GridPower',
];

// Connect to MQTT broker
const client = mqtt.connect(brokerAddress);

let max = 500;
let dataArray = 50;  // Default value to avoid issues
let val = [];
let labels = [];

client.on('connect', () => {
    console.log("Connected to MQTT broker");

    client.subscribe(topics, (err) => {
        if (!err) {
            console.log("Subscribed to topics:", topics);
        } else {
            console.error("Error subscribing to topics:", err);
        }
    });
});
// line chart

const crt = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(crt, {
    type: 'line',
    data: {
        labels: labels, // X-axis labels
        datasets: [{
            label: 'MQTT Data',
            data: val, // Y-axis values from MQTT
 borderWidth: 2,
            borderColor: 'blue',
            fill: false,
            tension: 0.4 // Smooth line
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: { display: true, text: 'Time' }
            },
            y: {
                title: { display: true, text: 'Value' }
            }
        }
 }
});


// Receive messages and update UI
client.on('message', (topic, message) => {
    const value = parseFloat(message.toString());
 


    if (topic === 'home/Solax/BatteryTemperature') {
        const element = document.getElementById("clientID");
        if (element) element.textContent = value;
    } else if (topic === 'home/Solax/PvVoltage2') {
        const element = document.getElementById("Amount");
        if (element) element.textContent = value;
    } else if (topic === 'home/Solax/GridPower') {
        const randomValue = (Math.random() * 2 + 10).toFixed(2);
        const propertyElement = document.getElementById("property");
        const propertyElement1 = document.getElementById("property1");

        if (propertyElement && propertyElement1) {
            propertyElement.textContent = randomValue;
            propertyElement1.textContent = randomValue;
        }
    }

    // Update chart data
    data.datasets[0].data = [value, 100 - value];
    myChart.setOption({ series: [{ data: data.datasets[0].data }] });


// Chart.js doughnut chart setup
const chartDom = document.getElementById('doughnut');
const doughnut = echarts.init(chartDom);
const option = {};

// Button interactions
const grid = document.getElementById('grid');
const volt = document.getElementById('volt');
const battery = document.getElementById('battery');

const data = {
    labels: ['percentage'],
    datasets: [
        {
            data: [dataArray, 100 - dataArray],
            backgroundColor: ['#1679ab'],
            borderWidth: 0,
            cutout: '80%'
        },
    ],
};
// Custom plugin for text inside the doughnut chart
const innerLable = {
    id: 'innerLable',
    afterDraw(chart) {
        const { ctx, chartArea: { width, height } } = chart;
        ctx.textAlign = 'center';
        ctx.font = 'bold 20px Arial';
        ctx.fillText(data.datasets[0].data[0] + '%', width / 2, height / 2);
    }
};
// Register plugin
Chart.register(innerLable);

const updateChartText = (newValue) => {
    data.datasets[0].data = [newValue, 100 - newValue]; // Update dataset
    myChart.update({ series: [{ data: data.datasets[0].data }] }); // Update chart
};


// Initialize the chart
const cx = document.getElementById('doughnut');
new Chart(cx, {
    type: 'doughnut',
    plugins: [innerLable],
    data,
    options: {
        layout: { padding: 0 }
    }
});
grid.addEventListener('click', function () {
    grid.style.backgroundColor = "green";
    volt.style.backgroundColor = "white";
    battery.style.backgroundColor = "white";
    updateChartText(40); // Example value
});

volt.addEventListener('click', function () {
    grid.style.backgroundColor = "white";
    volt.style.backgroundColor = "green";
    battery.style.backgroundColor = "white";
updateChartText(70); // Example value
});

battery.addEventListener('click', function () {
    grid.style.backgroundColor = "white";
    volt.style.backgroundColor = "white";
    battery.style.backgroundColor = "green";
    max = 100000;
    updateChartText(55); // Example value
});
if (!isNaN(value)) {
        val.push(value); // Store received MQTT values
        labels.push(new Date().toLocaleTimeString()); // Add time-based labels

        // Ensure data doesn't exceed 70 points
        if (val.length >= 70) {
            val.shift();
            labels.shift();
        }

        // Update the chart dynamically
        myChart.data.labels = labels;
        myChart.data.datasets[0].data = val;
        myChart.update();
         }
});



