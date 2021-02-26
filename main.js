Plotly.d3.csv("https://raw.githubusercontent.com/Salamun8/stocks/main/AAPL.csv", function (err, rows) {

    function unpack(rows, key) {
        return rows.map(function (row) { return row[key]; });
    }


    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'High',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'High'),
        line: { color: 'green' }
    }

    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'Low',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'Low'),
        line: { color: 'red' }
    }

    var data = [trace1, trace2];

    var layout = {
        title: 'Apple Historical Stock Data',
        plot_bgcolor: 'black',
        xaxis: {
            autorange: true,
            range: ['1984-09-07', '2008-02-19'],
            rangeselector: {
                buttons: [
                    {
                        count: 1,
                        label: '1m',
                        step: 'month',
                        stepmode: 'backward'
                    },
                    {
                        count: 6,
                        label: '6m',
                        step: 'month',
                        stepmode: 'backward'
                    },
                    { step: 'all' }
                ]
            },
            rangeslider: { range: ['1984-09-07', '20021-02-19'] },
            type: 'date'
        },
        yaxis: {
            autorange: true,
            range: [86.8700008333, 138.870004167],
            type: 'linear'
        }
    };

    Plotly.newPlot('myDiv', data, layout, { showSendToCloud: true });
})


Plotly.d3.csv("https://raw.githubusercontent.com/Salamun8/stocks/main/FB_stocks.csv", function (err, rows) {

    function unpack(rows, key) {
        return rows.map(function (row) { return row[key]; });
    }


    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'High',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'High'),
        line: { color: 'green' }
    }

    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'Low',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'Low'),
        line: { color: 'red' }
    }

    var data = [trace1, trace2];

    var layout = {
        title: 'Facebook Historical Stock Data',
        plot_bgcolor: 'black',
        xaxis: {
            autorange: true,
            range: ['1984-09-07', '2008-02-19'],
            rangeselector: {
                buttons: [
                    {
                        count: 1,
                        label: '1m',
                        step: 'month',
                        stepmode: 'backward'
                    },
                    {
                        count: 6,
                        label: '6m',
                        step: 'month',
                        stepmode: 'backward'
                    },
                    { step: 'all' }
                ]
            },
            rangeslider: { range: ['1984-09-07', '20021-02-19'] },
            type: 'date'
        },
        yaxis: {
            autorange: true,
            range: [86.8700008333, 138.870004167],
            type: 'linear'
        }
    };

    Plotly.newPlot('myDiv2', data, layout, { showSendToCloud: true });
})

Plotly.d3.csv("https://raw.githubusercontent.com/Salamun8/stocks/main/GOOGL_stocks.csv", function (err, rows) {

    function unpack(rows, key) {
        return rows.map(function (row) { return row[key]; });
    }


    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'High',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'High'),
        line: { color: 'green' }
    }

    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'Low',
        x: unpack(rows, 'Date'),
        y: unpack(rows, 'Low'),
        line: { color: 'red' }
    }

    var data = [trace1, trace2];

    var layout = {
        title: 'Google Historical Stock Data',
        plot_bgcolor: 'black',
        xaxis: {
            autorange: true,
            range: ['1984-09-07', '2008-02-19'],
            rangeselector: {
                buttons: [
                    {
                        count: 1,
                        label: '1m',
                        step: 'month',
                        stepmode: 'backward'
                    },
                    {
                        count: 6,
                        label: '6m',
                        step: 'month',
                        stepmode: 'backward'
                    },
                    { step: 'all' }
                ]
            },
            rangeslider: { range: ['1984-09-07', '20021-02-19'] },
            type: 'date'
        },
        yaxis: {
            autorange: true,
            range: [86.8700008333, 138.870004167],
            type: 'linear'
        }
    };

    Plotly.newPlot('myDiv3', data, layout, { showSendToCloud: true });
})