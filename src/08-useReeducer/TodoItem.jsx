export const TodoItem = ( { todo } ) => {
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between">
        <span className="align-self-center">{ todo.description }</span>
        <button className="btn btn-danger">Borrar</button>
      </li>
    </div>
  );
};
