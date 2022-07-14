import "./styles.css";

// export function Card(props) e nos cards props.name etc...
// ou usar destructure
export function Card({ name, time }) {
    return (
        <>
            <div className="card">
                <strong>{name}</strong>
                <small>{time}</small>
            </div>
        </>
    );
}
