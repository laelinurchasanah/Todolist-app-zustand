import {create} from 'zustand';

const useStore = create((set) => ({
  todos: [
    { id: 1, text: 'Learn Zustand', user: 'Laeli' },
    { id: 2, text: 'Build a Todo App', user: 'Minatozaki' },
    { id: 3, text: 'Master Global State', user: 'Sana' }
  ],
  votes: {},

  // Function to add vote
  addVote: (id) =>
    set((state) => ({
      votes: {
        ...state.votes,
        [id]: (state.votes[id] || 0) + 1
      }
    })),

  // Function to get todos
  getTodoById: (id) => (state) => state.todos.find((todo) => todo.id === id)
}));

export default useStore;
