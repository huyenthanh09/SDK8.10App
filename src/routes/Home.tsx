import { modifyMeasure } from "@gooddata/sdk-model";
import { BarChart } from "@gooddata/sdk-ui-charts";
import React from "react";

import Page from "../components/Page";
import { Md } from "../md";

const Price = modifyMeasure(Md.HourlyRate.Sum, (m) => m.format("#,##0").alias("$ Price"));
const style = { height: 300 };

const Home: React.FC = () => {
    return <Page>
        <div style={style} className="s-bar-chart">
            <BarChart measures={[Price]} viewBy={Md.EmployeeRegion} />
        </div>
    </Page>;
};

export default Home;
