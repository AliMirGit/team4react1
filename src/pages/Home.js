import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home(){
    const [feedback, setFeedback] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, ] = useState(null);

    const fetchData = async (disableLoadState) => {
        const response = await fetch('/data-api/rest/Feedback');
        //const response = await fetch('http://localhost:4280/data-api/rest/Feedback');
        console.log(response);
        if (!response.ok)
        {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        setFeedback(data.value);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    },[])

    if (error) {
        return <p>{error.message}</p>
    }
    if (isLoading) {
        return (
            <div>
                Loading customer feedback...
            </div>
        )
    }

    var feedbackDetails = "";
    feedbackDetails = feedback.map( (item, index) => {
        return (
            <tr key={index}>
                <td>{item.FeedbackId}</td>
                <td>{item.FirstName} {item.LastName}</td>
                <td>{item.Email}</td>
                <td>{item.Rating}</td>
            </tr>
        )
    })

    return (
        <div>
            <h1>Home Page Team4</h1>
            <h2>Customer feedback received:</h2>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <Link className="btn btn-primary float-end" to="/feedback-form">Submit Feedback</Link>
                            </div>
                            <div className="card-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Rating</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {feedbackDetails}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Home;