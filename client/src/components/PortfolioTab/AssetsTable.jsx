import React from 'react'

function AssetsTable() {

    const assets = [
        { id: 1, name: "Tesla Inc (TSLA)" },
        { id: 2, name: "Meta Platforms Inc. (META)" },
        { id: 3, name: "Alphabet Inc Class A (GOOGL)" },
        { id: 4, name: "Ticker symbol" },
      ];

  return (
      <>
          <div className='px-4 has-text-left'>
              <h1>Assets</h1>
          </div>
          <table>
              <thead>
                  <tr>
                      <th>Efficient Frontier Assets</th>
                      <th>Allocation</th>
                      <th>Min. Weight</th>
                      <th>Max. Weight</th>
                  </tr>
              </thead>
              <tbody>
                  {assets.map((asset) => (
                      <tr>
                          <td>
                              <div>
                                  <input class="input" type="email" placeholder="Email" />
                                  <span class="icon is-small is-left">
                                      <i class="fas fa-envelope"></i>
                                  </span>
                              </div>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </>
    
  )
}

export default AssetsTable