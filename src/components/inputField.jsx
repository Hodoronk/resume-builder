export default function InputField({ label, id, placeholder, value, type = "text", onChange }) {
    return (
      <div className="input-group">
        <label htmlFor={id}>
          <span className="label-text">{label}</span>
        </label>
        {type === "textarea" ? (
          <textarea
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        ) : (
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        )}
      </div>
    );
  }
  