import React from 'react'
import { View, Text, FlatList } from 'react-native'

const TaskList = ({tasks}) => {
    return (
        <FlatList 
            data={tasks}
            keyExtractor={(item) => item.id + ''} //agrega concatena con '' para que se vuelva string. ¿?
            renderItem= {({ item }) =>{
                    return <Text>{item.title}</Text>
                }
            }
           />
    )
}

export default TaskList;
