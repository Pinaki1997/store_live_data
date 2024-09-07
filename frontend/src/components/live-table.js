import React, { useEffect, useState } from 'react';

import socket from '../services/socket-services';

const LiveTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        socket.on('live-update', (message) => {
            setData(message?.data?.data || message?.data);
        });
        socket.emit('initial-message')
        return () => {
            socket.off('live-update');
        };
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
                    <tr>
                        <td>{data?.total_customer_in}</td>
                        <td>{data?.store_id}</td>
                        <td>{data?.total_customer_out}</td>
                        <td>{data?.event_time}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default LiveTable;
