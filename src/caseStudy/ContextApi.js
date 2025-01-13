import { createContext, useContext, useReducer } from 'react';

const PostsContext = createContext();

const postsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
    case 'REMOVE_POST':
      return state.filter((post, index) => index !== action.payload);
    default:
      return state;
  }
};

const PostsProvider = ({ children }) => {
  const [posts, dispatch] = useReducer(postsReducer, []);

  return (
    <PostsContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostsContext.Provider>
  );
};

const usePosts = () => {
  return useContext(PostsContext);
};

const App = () => {
  const { posts, dispatch } = usePosts();

  const addPost = () => {
    dispatch({ type: 'ADD_POST', payload: 'New Post' });
  };

  const removePost = (index) => {
    dispatch({ type: 'REMOVE_POST', payload: index });
  };
  return (
    <div>
      <button onClick={addPost}>Add Post</button>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            {post}
            <button onClick={() => removePost(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Root = () => (
  <PostsProvider>
    <App />
  </PostsProvider>
);

export default Root;
