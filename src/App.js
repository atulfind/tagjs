import './App.css';

function App() {

  const tags = ['atul', 'kumar'];

  return (
    <div className="tagjs">
      <div>
        {
          tags.map(tag => <li className='tagjs-tag'>{tag}</li>)
        }
      </div>
    </div>
  );
}

export default App;
