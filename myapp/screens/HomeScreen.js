import React, {useEffect, useState} from 'react';
import { View, Text, Flatlist } from 'react-native';
import { getTasks } from '../api'

const HomeScreen = () => {
    
    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    }

    useEffect(() => {
        loadTasks();
    }, [])
    return (
        <View>
            <Flatlist
            data= {tasks}
            renderItem = { () => (
                <Text>Hello world</Text>
            )}
            />
        </View>
    )
}

export default HomeScreen;
