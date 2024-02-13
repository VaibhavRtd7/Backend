import { useGlobalContext } from './Api';

function App() {

  const state = useGlobalContext();
  return (
    <div>
       {
          state.data.map( (user) => {
            return (
              <div key={user.id}>
                {user.name}
              </div>
            )
          })
       }
    </div>
  )
}


export default App;
