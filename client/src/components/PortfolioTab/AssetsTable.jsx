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
          <div className='px-4 has-text-left my-5'>
              <h1>Assets</h1>
          </div>
          <table className='table is-narrow is-hoverable is-fullwidth rounded'>
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
                                  <input class="input is-small" type="email" placeholder="" />
                                  <span class="icon is-small is-left">
                                      <i class="fas fa-calculator"></i>
                                  </span>
                              </div>
                          </td>
                          <td>
                              <div class="control has-icons-left has-icons-right m-2">
                                  <input class="input is-small" type="email" placeholder="sdf" />
                                  <span class="icon is-small is-left">
                                      <i class="fas fa-home"></i>
                                  </span>
                              </div>
                          </td>
                          <td>
                              <div class="control has-icons-left has-icons-right m-2">
                                  <input class="input is-small" type="email" placeholder="dfg" />
                                  <span class="icon is-small is-left">
                                      <i class="fas fa-home"></i>
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