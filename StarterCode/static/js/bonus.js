// Gauge chart
function getGauge(id) {
    //Read 'metadata from json file for each subject and assign it to a variable
    d3.json('../data/samples.json')
        .then(data => {
            var subjectData = data.metadata
                .filter(subject => subject.id.toString() === id)[0];
            console.log(subjectData);
            

            // Extract "wfreq" data and assign it to a variable to build an indicator
            var value = subjectData.wfreq;
            console.log(value);

            // Data
            var data = [
                {
                    domain: { x: [0, 1], y: [0, 1] },
                    type: 'indicator',
                    mode: 'gauge+number+delta',
                    value: value,
                    title: {
                        text: 'Belly Button Washing Frequency <br><i>Scrubs per week</i>',
                        font: { size: 24, color: 'black', family: 'Arial' }                        
                    },

                    gauge: {
                        axis: { range: [null, 9], tickwidth: 1, tickcolor: 'darkgrey' },
                        bar: { color: 'red', thickness: 0.3 },
                        bgcolor: 'white',
                        borderwidth: 0,
                        bordercolor: 'gray',

                        axes: [{
                            pointers: [{
                                value: 80,
                                type: 'Marker',
                                markerType: 'Circle'
                            }]
                        }],

                        steps: [
                            { range: [0, 1], color: '#a1ccb5'},
                            { range: [1, 2], color: '#82bb9d'},
                            { range: [2, 3], color: '#59b489'},
                            { range: [3, 4], color: '#50ab81'},
                            { range: [4, 5], color: '#47a278'},
                            { range: [5, 6], color: '#3d9970'},
                            { range: [6, 7], color: '#339068'},
                            { range: [7, 8], color: '#298760'},
                            { range: [8, 9], color: '#276248'}
                        ],
                    },
                },
            ];

            // Layout
            var layout = {
                width: 440,
                height: 400,
                margin: { t: 35, r: 15, l: 15, b: 0 },
                font: { color: 'black', family: 'Arial' }                
            };

            // Render the plot to the div tag with id 'gauge'
            Plotly.newPlot('gauge', data, layout);            
        });
};