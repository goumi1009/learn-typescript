import MyForm from './components/MyForm';

const App = () => {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return <MyForm onSubmit={onSubmit} />;
};

export default App;
