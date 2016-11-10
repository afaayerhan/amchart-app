import './index.css';
import {data} from './data';
var React = require("react");
var ReactDOM = require("react-dom");

var AmCharts = require("amcharts3-react");
require("amcharts3/amcharts/pie.js");
export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChart: 'PieChart'
    }

    this.charts = ['BarChart', 'PieChart', 'LineChart'];
  }
  renderChart = () => {
    const {currentChart} = this.state;
    if (currentChart === 'PieChart') {
      return <PieChartContainer/>
    }
    if (currentChart === 'BarChart') {
      return <Chart/>
    }
    if (currentChart === 'LineChart') {
      return <LineChart/>
    }
  }
  changeChart = (chart) => {
    this.setState({currentChart: chart})
  }
  render() {
    return <div style={{
      width: `100%`,
      height: `100%`
    }}>
      {this
        .charts
        .map(chart => <button key={chart} onClick={() => this.changeChart(chart)}>{chart}</button>)}
      {this.renderChart()}
    </div>
  }
}
var Chart = React.createClass({

  render: function () {
    // Render the chart
    return React.createElement(AmCharts, {
      "type": "serial",
      "theme": "light",
      "dataProvider": data,
      "valueAxes": [
        {
          "gridColor": "#FFFFFF",
          "gridAlpha": 0.2,
          "dashLength": 0
        }
      ],
      "gridAboveGraphs": true,
      "startDuration": 1,
      "graphs": [
        {
          "balloonText": "[[category]]: <b>[[value]]</b>",
          "fillAlphas": 0.8,
          "lineAlpha": 0.2,
          "type": "column",
          "valueField": "year2004"
        }, {
          "balloonText": "[[category]]: <b>[[value]]</b>",
          "fillAlphas": 0.8,
          "lineAlpha": 0.2,
          "type": "column",
          "valueField": "year2005"
        }
      ],
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "country",
      "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
        "tickPosition": "start",
        "tickLength": 20
      },
      "export": {
        "enabled": true
      }
    });
  }
});
var PieChart = React.createClass({
  render: function () {
    return React.createElement(AmCharts, {
      "type": "pie",
      "theme": "light",
      "path": "node_modules/amcharts3/amcharts",
      "dataProvider": data,
      "valueField": this.props.valueField,
      "titleField": "country",
      "balloon": {
        "fixedPosition": true
      },
      "export": {
        "enabled": true
      }
    })
  }
})
class PieChartContainer extends React.Component {
  render() {
    return <div style={{
      width: `100%`,
      height: '100%'
    }}>
      <PieChart valueField="year2004"/>
      <PieChart valueField="year2005"/>
    </div>

  }
}
var LineChart = React.createClass({
  render() {
    return React.createElement(AmCharts, {
      "type": "serial",
      "theme": "light",
      "marginRight": 40,
      "marginLeft": 40,
      "autoMarginOffset": 20,
      "mouseWheelZoomEnabled": true,
      "dataDateFormat": "YYYY-MM-DD",
      "valueAxes": [
        {
          "id": "v1",
          "axisAlpha": 0,
          "position": "left",
          "ignoreAxisWidth": true
        }
      ],
      "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
      },
      "graphs": [
        {
          "id": "g1",
          "balloon": {
            "drop": true,
            "adjustBorderColor": false,
            "color": "#ffffff"
          },
          "bullet": "round",
          "bulletBorderAlpha": 1,
          "bulletColor": "#FFFFFF",
          "bulletSize": 5,
          "hideBulletsCount": 50,
          "lineThickness": 2,
          "title": "red line",
          "useLineColorForBulletBorder": true,
          "valueField": "year2004",
          "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
        }, {
          "id": "g2",
          "balloon": {
            "drop": true,
            "adjustBorderColor": false,
            "color": "#ffffff"
          },
          "bullet": "round",
          "bulletBorderAlpha": 1,
          "bulletColor": "#FFFFFF",
          "bulletSize": 5,
          "hideBulletsCount": 50,
          "lineThickness": 2,
          "title": "red line",
          "useLineColorForBulletBorder": true,
          "valueField": "year2005",
          "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
        }
      ],

      "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha": 1,
        "cursorColor": "#258cbb",
        "limitToGraph": "g1",
        "valueLineAlpha": 0.2,
        "valueZoomable": true
      },

      "categoryField": "country",

      "export": {
        "enabled": true
      },
      "dataProvider": data
    })
  }
})
ReactDOM.render(React.createElement(LineChart, null), document.getElementById("root"));