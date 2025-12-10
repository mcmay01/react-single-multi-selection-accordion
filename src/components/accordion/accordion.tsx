import { useState } from 'react'
import data from './data'

const Accordion = () => {
  const [selected, setSelected] = useState<number | null>(null)

  const handleSelection = (id: number) => {
    setSelected(selected === id ? null : id)
  }

  return (
    <div>
      <div className=''>
        <h2 className='text-3xl text-center mb-4'>Accordion</h2>
        {data && data.length > 0 ? (
          data.map(({ id, question, answer }) => (
            <div className='bg-gray-900 text-white mb-2 cursor-pointer' key={id}>
              <div
                className='flex items-center justify-between mx-4'
                onClick={() => handleSelection(id)}
              >
                <h3 className='text-2xl  border-b'>{question}</h3>
                <span className='text-2xl'>{selected === id ? '-' : '+'}</span>
              </div>
              {selected === id && <div className='text-xl'>{answer}</div>}
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
