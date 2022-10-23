import React from 'react'

function TableNews(props) {
    console.log(props.items)
    return (
        <>
            <h3>Latest news about: <span className='text-info'>{props.topic}</span></h3>
            <table className='table'>
                <thead>
                    <tr className='table-dark'>
                        <th scope="col">Title</th>
                        <th scope="col">Sentiment</th>
                        <th scope="col">Publisher</th>
                        <th scope="col" style={{"width":"30vh"}}>DateTime</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((ele)=>{
                        return (
                            <tr key={ele.title+ele.publisher+ele.datetime} className={ele.sentiment==="Negative"?"table-danger":(ele.sentiment==="Positive"?"table-success":null)}>
                                <td>{ele.title}</td>
                                <td className={ele.sentiment==="Negative"?"fw-bold text-danger":(ele.sentiment==="Positive"?"fw-bold text-success":null)}>{ele.sentiment}</td>
                                <td>{ele.publisher}</td>
                                <td>{ele.datetime.split("T")[0]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default TableNews