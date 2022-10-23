import React from 'react'

function TableNews(props) {
    console.log(props.items)
    return (
        <>
            <div>Latest news about: {props.topic}</div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Sentiment</th>
                        <th scope="col">Publisher</th>
                        <th scope="col" style={{"width":"30vh"}}>DateTime</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((ele)=>{
                        return (
                            <tr key={ele.title+ele.publisher+ele.datetime}>
                                <td>{ele.title}</td>
                                <td>{ele.sentiment}</td>
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