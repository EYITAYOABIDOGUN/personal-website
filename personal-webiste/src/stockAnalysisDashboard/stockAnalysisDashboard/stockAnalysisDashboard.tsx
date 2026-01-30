import {useState} from 'react'
import {analyzeStock} from '../stockAnalysisDashboard'

function StockAnalysisDashboard(){

  const[stockData,setStockData]=useState(null)
  const[stockSymbol,setStockSymbol]=useState('')
  const[gotData,setGotData]=useState(false)

  function goBack(){
    setGotData(false)
    setStockData(null)
  }

  async function runStockAnalysis(){
    if(!stockSymbol)return
    const data=await analyzeStock(stockSymbol)
    if(data){
      setStockData(data)
      setGotData(true)
    }
  }

  if(gotData){
    return(
      <div>
        <div onClick={goBack}>Back</div>
        <pre>{JSON.stringify(stockData,null,2)}</pre>
      </div>
    )
  }

  return(
    <div>
      <div id="stock-analysis-dashboard-title">
        STOCK ANALYSIS DASHBOARD
      </div>

      <div id="stock-analysis-dashboard-subtitle">
        Put in a stock symbol you'd like to analyze (e.g. MSFT)
      </div>

      <input
        value={stockSymbol}
        onChange={e=>setStockSymbol(e.target.value)}
      />

      <button
        className="stock-analysis-dashboard-button"
        onClick={runStockAnalysis}
      >
        Analyze
      </button>
    </div>
  )
}

export default StockAnalysisDashboard
