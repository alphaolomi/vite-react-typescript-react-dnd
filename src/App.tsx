import Example from './example'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <main
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <div>
            <h1>Drag and Drop</h1>
            <Example />
          </div>
        </main>
      </DndProvider>
    </div>
  )
}

export default App
