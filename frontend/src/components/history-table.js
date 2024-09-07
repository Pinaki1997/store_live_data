import React, { useEffect, useState } from 'react';

import axios from 'axios';

const HistoryTable = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:5005/api/v1/customer/history');
            setHistory(result?.data?.data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Store ID</th>
                        <th>Customers In</th>
                        <th>Customers Out</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((row, index) => (
                        <tr key={index}>
                            <td>{row.store_id}</td>
                            <td>{row.total_in}</td>
                            <td>{row.total_out}</td>
                            <td>{row.hour}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HistoryTable;
