import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Container, List} from "semantic-ui-react";
import {IActivity} from "../models/activity";
import NavBar from "../../features/nav/NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

const App = () => {
    const [activities, setActivities] = useState<IActivity[]>([]);
    
    useEffect(() => {
        axios.get<IActivity[]>('http://localhost:5000/api/activities').then(res => {
            setActivities(res.data);
        });
    }, []);
    
    return (
        <React.Fragment>
            <NavBar />
            <Container style={{marginTop: '7em'}}>
                <ActivityDashboard activities={activities}/>
            </Container>
        </React.Fragment>
    );
}

export default App;
