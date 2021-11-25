import { useState, FormEvent, ChangeEvent } from 'react';

interface MyFormProps {
  onSubmit: (form: { name: string; description: string }) => void;
}

const MyForm = ({ onSubmit }: MyFormProps) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
  });

  const { name, description } = form;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} />
      <input name="description" onChange={handleChange} />
      <button type="submit">등록</button>
    </form>
  );
};

export default MyForm;
