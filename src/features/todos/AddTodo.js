import { useState } from 'react';
import { useCreateTodoMutation } from './todosApi';
import { Error } from "../../app/components/Error";
import { useSelector } from 'react-redux';

const AddTodo = ({listId}) =>{ 
    const [name, setName] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [createTodo] = useCreateTodoMutation();
    const userId = useSelector((state) => state.auth.user?.id); // Access user ID
    console.log("listId received in AddTodo:", userId);
    const handleAddTodo = async (e) => {
        e.preventDefault();

        // Usa una variabile locale per gestire listId
        const finalListId = listId ?? userId;

        // Verifica che entrambi i valori siano validi
        if (!name.trim() || !finalListId) {
            setErrorMsg("Invalid input: Name and list ID are required.");
            return;
        }

        try {
            // Crea il todo passando name e finalListId
            await createTodo({ name, listId: finalListId }).unwrap();
            setName(''); // Resetta il campo del nome
            setErrorMsg(''); // Cancella eventuali errori
        } catch (error) {
            console.error("Error creating todo:", error);
            setErrorMsg(error.data?.message || "Failed to create todo");
        }
    };
    return (
        <>
        <form className="input-group mb-3" onSubmit={handleAddTodo}>
        <input className="form-control"  value= {name} onChange={(e) => setName(e.target.value) }
           placeholder = "Add todo"/>
<button className="btn btn-primary">ADD TODO <i className="bi bi-plus-circle"></i></button>
        </form>
            {errorMsg && <Error>{errorMsg}</Error> }
        </>
    );
}
export default AddTodo;