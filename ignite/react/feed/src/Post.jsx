export function Post(props) {
  console.log(props)
  return (
    <div>
      <strong>{props.author}</strong>
      <p>Content: {props.content}</p>
    </div>
  )
}
