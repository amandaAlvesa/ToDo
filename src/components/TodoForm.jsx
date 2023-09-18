import React from 'react'

const TodoForm = () => {
  return (
    <div className='todoform'>
        <h2>Criar Tarefa: </h2>
        <form>
            <input type="text" placeholder='Digite o Titulo' />
            <select>
                <option value="">Selecione uma Categoria </option>
                <option value="trabalho">Trabalho</option>
                <option value="pessoal">Pessoal</option>
                <option value="estudos">Estudos </option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm