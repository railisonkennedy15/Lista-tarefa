import React, { useState } from "react";
import {View,Text} from "react-native";
import { Todo } from "./Todo";

const TodoList = () => {

const  [titulo,setTitulo] = useState("Lista de tarefas")

return (
        <View>
            <Text>{titulo}</Text>
            <Todo name={"Fazer café"}/>
            <Todo name={"Café com Leite"}/> 
            <button title="Alterar" onpress={()=>setTitulo("Minha Lista de Tarefas")} />
        </View>
    )
}

export {TodoList}