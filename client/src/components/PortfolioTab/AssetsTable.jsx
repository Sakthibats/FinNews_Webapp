import React from 'react'

function AssetsTable() {

    const assets = [
        { id: 1, name: "Tesla Inc (TSLA)" },
        { id: 2, name: "Meta Platforms Inc. (META)" },
        { id: 3, name: "Alphabet Inc Class A (GOOGL)" },
        { id: 4, name: "Ticker symbol" },
        { id: 5, name: "Ticker symbol" },
    ];

    return (
        <>
            <div className='container px-4 has-text-left my-5'>
                <h1>Assets</h1>
            </div>
            <table className='container table is-narrow is-hoverable rounded'>
                <thead>
                    <tr>
                        <th>Efficient Frontier Assets</th>
                        <th>Allocation %</th>
                        <th>Min. Weight %</th>
                        <th>Max. Weight %</th>
                    </tr>
                </thead>
                <tbody>
                    {assets.map((asset) => (
                        <tr>
                            <td>
                                <div class="control has-icons-left has-icons-right m-2">
                                    <input class="input is-small" type="email" placeholder="Ticker,ETFs" />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-home"></i>
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div class="control has-icons-left has-icons-right m-2">
                                    <input class="input is-small" type="number" placeholder="0-100" />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-calculator"></i>
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div class="control has-icons-left has-icons-right m-2">
                                    <input class="input is-small" type="number" placeholder="0-100" />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-calculator"></i>
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div class="control has-icons-left has-icons-right m-2">
                                    <input class="input is-small" type="number" placeholder="0-100" />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-calculator"></i>
                                    </span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='container is-flex is-justify-content-space-between'>
                <button className="button is-warning is-small">Add more</button>
                <button className="button is-info is-small">Rebalance</button>
            </div>
        </>
    )
}

export default AssetsTable