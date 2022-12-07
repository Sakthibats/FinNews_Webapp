import React from 'react'

function TableNews(props) {
    console.log(props.items)

    return (
        <div className='d-flex flex-column'>
            <h3>Latest news about: <span className='text-info'>{props.topic}</span></h3>
            <div className='d-flex'>
                <table className='table table-hover'>
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">Title</th>
                            {/* <th scope="col">Publisher</th> */}
                            <th scope="col" style={{"width":"30vh"}}>DateTime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.items.map((ele)=>{
                            return (
                                <tr key={ele.title+ele.publisher+ele.datetime}>
                                    <td title={ele.link}><a href={ele.link}>{ele.title}</a></td>
                                    {/* <td className={ele.sentiment==="Negative"?"fw-bold text-danger":(ele.sentiment==="Positive"?"fw-bold text-success":null)}>{ele.sentiment}</td> */}
                                    {/* <td>{ele.publisher}</td> */}
                                    <td>{ele.datetime.split("T")[0]}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableNews