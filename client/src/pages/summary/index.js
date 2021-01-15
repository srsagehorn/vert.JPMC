import React from 'react';
import PortfolioTable from '../../components/PortfolioTable';
import News from '../../components/news';

export default function SummaryPage() {
    return (
        <div>
            <h1 className = "center">Top Stocks To Watch</h1>
            <PortfolioTable />
            <News />
        </div>
    )
}