 
const Text = ({userClick, user}) => {
  return (
    <div>

<button onClick={()=>userClick(user)}>click me {user}</button>
    </div>
  )
}

export default Text
