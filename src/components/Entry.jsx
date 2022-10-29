

export const Entry = (props) => {
  return (
    <div className="term">
    <dt>

      <span className="emoji" role="img" aria-label="Tence Biceps">
        {props.emoji}
      </span>
      <span className="title">{props.name}</span>

    </dt>
    <dd>
       {props.description}
    </dd>
  </div>
  )
}
