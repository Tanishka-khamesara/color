function Colorcards(props) {
    return (
      <div
        class="shadow"
        style={{
          border: "1px solid black",
          width: "12%",
          margin: "10px",
        }}
      >
        <div
          style={{
            height: "140px",
            backgroundColor: props.code,
          }}
        ></div>
        <h2
          style={{
            color: props.color,
          }}
        >
          {props.code}
        </h2>
        <span
          class="fontt"
          style={{
            color: props.color,
          }}
        >
          {props.color}
        </span>
      </div>
    );
  }
  export default Colorcards;