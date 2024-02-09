export default function InputField({ label, id, placeholder, value, type = "text", onChange, maxLength=60, }) {
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
              maxLength={maxLength}
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
  