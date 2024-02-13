import POPOSSpace from '../POPOSSpace/POPOSSpace.js'
import './POPOSList.css';
import { useState } from 'react'
import data from '../../sfpopos-data.js'

function POPOSList() {
  const [query, setQuery ] = useState('')
  const spaces = data
  .filter(obj => obj.title.toLowerCase().includes(query.toLowerCase()) || obj.address.toLowerCase().includes(query.toLowerCase()))
  .map(( { id, title, address, images, hours } ) => {

    return (
      <POPOSSpace
        id={id}
        key={`%{title}-${id}`}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    )
  })

  return (
    <div className="POPOSList">
      <form>
        <input
            value={query}
            placeholder='search'
            onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      { spaces }
    </div>
  )
}

export default POPOSList