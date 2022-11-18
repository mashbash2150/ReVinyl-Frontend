import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Articles from '../components/Articles'


const Feed = ({ user, authenticated, vinylList }) => {
  const navigate = useNavigate()
  const [selectedVinyl, setSelectedVinyl] = useState([])
  const [sellList, setSellList] = useState([])
  const [tradeList, setTradeList] = useState([])
  const [wantedList, setWantedList] = useState([])

  const chooseVinyl = (selected) => {
    setSelectedVinyl(selected)
    navigate(`/${selected.id}`)
  }

  const GetSelling= async (selected)=>{
    const res = await axios.get(`${BASE_URL}/feed/status/sell`)
    setSellList(res.data)
  }
  const GetTrading= async (selected)=>{
    const res = await axios.get(`${BASE_URL}/feed/status/trade`)
    setTradeList(res.data)
  }
  const GetWanted= async (selected)=>{
    const res = await axios.get(`${BASE_URL}/feed/status/wanted`)
    setWantedList(res.data)
  }

  useEffect(() => {
    GetSelling();
    GetTrading();
    GetWanted();
  }, [])
  

  return (
<div>
  <div className="status-banner">Available For Purchase   </div>
<div className="sell-container">
{sellList.map((record)=> (
    <div className="vinyl-card" key={record.id}>
    <div className="vinyl-text card" >
      </div>
      <div className="large-circle">
      <div className="album-title"><strong>{record.title}</strong></div>
      <div className="circle-text">Artist: {record.artist}</div>
        <div className="vinyl-img" key={record.id}>
          <div onClick={() => chooseVinyl(record)}>
            <img src={record.image} alt="vinyl" />
          </div>
        <div className="circle-text">Genre: {record.genre}</div>
      <div className="circle-text">Price: ${record.price}</div>
      </div>
      </div>
    </div>
))}
</div>

<div className="status-banner">Browse Trades</div>
<div className="trade-container">
{tradeList.map((record)=> (
    <div className="vinyl-card" key={record.id}>
    <div className="vinyl-text card" >
      </div>
      <div className="large-circle">
      <div className="album-title"><strong>{record.title}</strong></div>
      <div className="circle-text">Artist: {record.artist}</div>
        <div className="vinyl-img" key={record.id}>
          <div onClick={() => chooseVinyl(record)}>
            <img src={record.image} alt="vinyl" />
          </div>
        <div className="circle-text">Genre: {record.genre}</div>
      <div className="circle-text">Price: ${record.price}</div>
      </div>
      </div>
    </div>
))}
</div>
<div className='carousel-div'>
  <Articles />
</div>
<div className="wanted-status-banner">Wanted</div>
<div className="trade-container">
{wantedList.map((record)=> (
    <div className="vinyl-card" key={record.id}>
    <div className="vinyl-text card" >
      </div>
      <div className="large-circle">
      <div className="album-title"><strong>{record.title}</strong></div>
      <div className="circle-text">Artist: {record.artist}</div>
        <div className="vinyl-img" key={record.id}>
          <div onClick={() => chooseVinyl(record)}>
            <img src={record.image} alt="vinyl" />
          </div>
        <div className="circle-text">Genre: {record.genre}</div>
      <div className="circle-text">Price: ${record.price}</div>
      </div>
      </div>
    </div>
))}
</div>
    </div>
  )
}

export default Feed
