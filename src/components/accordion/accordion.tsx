import { useState } from 'react'
import data from './data'

const Accordion = () => {
  const [selected, setSelected] = useState<number | null>(null)
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [selectedArray, setSelectedArray] = useState([])

  const handleSelection = (id: number) => {
    setSelected(selected === id ? null : id)
  }
  const handleMultiSelection = (id: number) => {
    const copy = [...selectedArray]
    const indexOfCurrentId = copy.indexOf(id)

    if (indexOfCurrentId === -1) {
      copy.push(id)
    } else {
      copy.splice(indexOfCurrentId, 1)
    }

    setSelectedArray(copy)
    setSelected(selected === id ? null : id)
  }
  console.log('selected', selected, 'selectedArray', selectedArray)

  return (
    <div>
      <div className=''>
        <h2 className='text-3xl text-center mb-4'>Accordion</h2>
        <button
          className={`${
            enableMultiSelection ? 'bg-gray-900' : 'bg-gray-600'
          } text-white mb-2 rounded-lg px-2 py-1`}
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        >
          {enableMultiSelection ? 'Disable' : 'Enable'} MultiSelection
        </button>
        {data && data.length > 0 ? (
          data.map(({ id, question, answer }) => (
            <div className='bg-gray-900 text-white mb-2 cursor-pointer' key={id}>
              <div
                className='flex items-center justify-between mx-4'
                onClick={
                  enableMultiSelection ? () => handleMultiSelection(id) : () => handleSelection(id)
                }
              >
                <h3 className='text-2xl  border-b'>Question: {question}</h3>
                <span className='text-2xl'>{selected === id ? '-' : '+'}</span>
              </div>
              {(selected === id || selectedArray.indexOf(id) !== -1) && (
                <div className='text-xl'>Answer: {answer}</div>
              )}
            </div>
          ))
        ) : (
          <div className='text-3xl'>No data found</div>
        )}
      </div>
    </div>
  )
}

export default Accordion
