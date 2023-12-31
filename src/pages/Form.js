import React, { useState } from 'react';

function Form() {
    //const [status, setStatus] = useState('');
    //const [message, setMessage] = useState('');
    const [feedback, setFeedback] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Rating: '',
        Comments: ''
    })

    const handleInput = (e) => {
        e.persist();
        setFeedback({...feedback, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();  // prevent page reload
        const data = {
            FirstName: feedback.FirstName,
            LastName: feedback.LastName,
            Email: feedback.Email,
            Rating: feedback.Rating,
            Comments: feedback.Comments            
        }
        const finalFormEndpoint = '/data-api/rest/Feedback';
        console.log("target=" + finalFormEndpoint);
        const response = await fetch(finalFormEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                //'X-MS-API-ROLE': 'admin'
            },
            body: JSON.stringify(data)         
        });
        if (!response.ok) {
            console.log("Error, data=" + JSON.stringify(data));
            console.log("Error, status=" + response.statusText);
            console.table(response.value);
            throw new Error(response.statusText);
        }


        /*
        fetch(finalFormEndpoint, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error(response.statusText);
                }
                return response.json();
        })
        .then(() => {
            setMessage("Thanks for your feedback.");
            setStatus('success');
        })
        .catch((err) => {
            setMessage(err.toString());
            setStatus('error');
        });
        */
    }

    return (
        <div>
            <h1>Feedback Form Team4</h1>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Enter Your Feedback</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className='mb-3'>
                                        <label>First Name</label>
                                        <input type="text" name="FirstName" value={feedback.FirstName} onChange={handleInput} className='form-control' />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Last Name</label>
                                        <input type="text" name="LastName" value={feedback.LastName} onChange={handleInput} className='form-control' />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Email</label>
                                        <input type="text" name="Email" value={feedback.Email} onChange={handleInput} className='form-control' />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Rating</label>
                                        <input type="text" name="Rating" value={feedback.Rating} onChange={handleInput} className='form-control' />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Comments</label>
                                        <input type="text" name="Comments" value={feedback.Comments} onChange={handleInput} className='form-control' />
                                    </div>
                                    <div className='mb-3'>
                                        <button type="submit" className='btn btn-primary'>Submit Feedback</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;