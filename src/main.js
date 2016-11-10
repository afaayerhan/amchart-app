import React from 'react';
import { connect } from 'react-redux';
import {PieChartContainer, BarChart, LineChart } from './App';
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChart: 'PieChart'
    }

    this.charts = ['BarChart', 'PieChart', 'LineChart'];
  }
  renderChart = () => {
    const {currentChart} = this.state;
    const { data } = this.props;
    if (currentChart === 'PieChart') {
      return <PieChartContainer data={data}/>
    }
    if (currentChart === 'BarChart') {
      return <BarChart data={data}/>
    }
    if (currentChart === 'LineChart') {
      return <LineChart data={data}/>
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
export default connect((state) => {
    return {
        data: state.data
    }
})(Main);