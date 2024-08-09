import './App.css';


function App() {
  return (
    <div className="App">
      <header className="manrope-font header fixed"></header>
      <p className="manrope-font title animation-title-1">Эй, тут так пусто...</p>
      <div className='container animation-title-1'>
        <div className='container2'>
          <img src="drill.png" alt="the drill" className='flex project-image'></img>
          <h1 className="flex manrope-font2 projects-text">Это один из моих проектов.</h1>
        </div>
        <div className='container2'>
          <img src="drill.png" alt="the drill" className='flex project-image'></img>
          <h1 className="flex manrope-font2 projects-text">Это ещё один из моих проектов.</h1>
        </div>
        <div className='container2'>
          <img src="drill.png" alt="the drill" className='flex project-image'></img>
          <h1 className="flex manrope-font2 projects-text">Чёт дохуя у меня проектов.</h1>
        </div>
      </div>
    </div>
  );
}


export default App;
