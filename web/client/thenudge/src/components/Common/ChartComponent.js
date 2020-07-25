// ChartComponent
//  
//  A simple reusable component for displaying
//  line charts with multiple datasets on same
//  graph with custom colors
//

import React from "react";
import { Chart, Dataset } from "react-rainbow-components";

export default function ({labels, datasets}) {

    const containerStyles = {
        maxWidth: 600,
    };

    const datasets = datasets.map((dataset) => (
      <Dataset
        title={dataset.title}
        values={dataset.values}
        backgroundColor={dataset.color}
      />
    ));
    return (

        <div
        className="rainbow-p-vertical_medium rainbow-m_auto"
        style={containerStyles}
        >
        <div className="rainbow-align-content_center">
            <Chart
            labels={labels}
            type="line"
            className="rainbow-m-horizontal_xx-large rainbow-m-top_x-large"
            >
            {datasets}
            </Chart>
        </div>
        </div>
)
}

