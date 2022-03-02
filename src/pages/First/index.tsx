import { TodoListProps, connect } from 'umi';

import { useRef } from 'react';

interface IProps extends TodoListProps {
  [keys: string]: any;
}

const TodoList: React.FC<IProps> = (props) => {
  console.log(props);
  const { list, dispatch } = props;
  const inputRef = useRef<any>();
  return (
    <div>
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            dispatch({
              type: 'todoList/setTodoList',
              payload: {
                type: 'add',
                value: inputRef.current.value,
              },
            });
            inputRef.current.value = '';
          }}
        >
          提交
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <td style={{ width: 120 }}>序号</td>
            <td style={{ width: 120 }}>姓名</td>
            <td style={{ width: 120 }}>操作</td>
          </tr>
        </thead>

        <tbody>
          {list.map((name: string, index: number) => (
            <tr key={index}>
              <td style={{ width: 120 }}>{index + 1}</td>
              <td
                style={{ width: 120, overflow: 'hidden', textOverflow: 'clip' }}
              >
                {name}
              </td>
              <td
                style={{ width: 120, color: 'red', cursor: 'pointer' }}
                onClick={() => {
                  dispatch({
                    type: 'todoList/setTodoList',
                    payload: {
                      type: 'delete',
                      value: name,
                    },
                  });
                }}
              >
                删除
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default connect(({ todoList }: { todoList: TodoListProps }) => ({
  list: todoList['todoList'],
}))(TodoList);
