
import './App.css'
import Card from './components/card'
function App() {

  return (
    <>
      <div className='h-screen w-full flex items-center flex-col pt-32'>
        <h1 className='font-bold text-xl'>React Compound Component System</h1>
        <div className='mt-4 max-w-lg space-y-4 text-justify'>
           <Card>
            <Card.Header>
              <Card.Title>Cart title</Card.Title>
            </Card.Header>
           <Card.Body>
              Mollit sint dolor occaecat nostrud. Ut occaecat et irure magna culpa aliqua proident. Proident ut voluptate cillum consequat est eiusmod ea dolore ipsum elit culpa occaecat reprehenderit.

In non non mollit ipsum irure nisi adipisicing sunt quis sint. Anim culpa ad proident cupidatat tempor esse pariatur velit quis. Aute nostrud ea laboris ipsum. Reprehenderit fugiat veniam dolor magna nisi reprehenderit pariatur laboris ut proident.

Cupidatat ex anim esse reprehenderit. Adipisicing proident velit elit et est. Deserunt laboris adipisicing eiusmod magna elit non quis ex.

            </Card.Body>
            <Card.Footer>
              <button type="button" className='bg-blue-500 hover:bg-blue-600 text-blue-50 py-2 px-4 rounded-md'>Read More</button>
            </Card.Footer>
           </Card>
        </div>
      </div>
    </>
  )
}

export default App
