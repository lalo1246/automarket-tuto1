import React, {useEffect, useState} from 'react';
import { View} from 'react-native';
import { getTasks } from '../api'

import Layout from '../components/layout';
import TaskList from '../components/TaskList';

const HomeScreen = () => {
    
    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {
        const data = await getTasks();
        setTasks(data);
        console.log(data);
    }

    useEffect(() => {
        loadTasks();
    }, [])
    return (
        <Layout>
            <TaskList tasks={tasks}/>
        </Layout>
    )
}

export default HomeScreen;
