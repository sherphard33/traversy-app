import { useState } from "react";

function InputForm({save}) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  let task = {};
  const onSubmit = (e) => {
    e.preventDefault();
    save({
      text,
      day,
      reminder
    });

    setText('');
    setDay('');
    setReminder(false);
  }
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label className="label">Task</label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Add task"
        ></input>
      </div>

      <div className="form-control">
        <label className="label">Date & Time</label>
        <input
          value={day}
          onChange={(e) => setDay(e.target.value)}
          type="text"
          placeholder="Date and time"
        />
      </div>

      <div className="form-control-check">
        <label className="label">Set reminder</label>
        <input
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          type="checkbox"
        />
      </div>

      <input className="btn btn-block" type="submit" value="Save Task"/>
    </form>
  );
}

export default InputForm;
