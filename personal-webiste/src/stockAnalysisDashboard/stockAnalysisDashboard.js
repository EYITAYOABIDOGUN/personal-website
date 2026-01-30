const stockAnalysisDashboardInput='stock-analysis-dashboard-input'

async function analyzeStock(){
    document.getElementById('stock-analysis-dashboard-data').innerHTML=''
    const stockSymbolToAnalyze=document.getElementById(stockAnalysisDashboardInput).value
    if(stockSymbolToAnalyze.length===0){
        alert('You must put in a ticker symbol before running the analysis')
        return
    }

    const url='http://127.0.0.1:5000/analyze-stock/'+stockSymbolToAnalyze

    let response
    try{
        response=await fetch(url)
    }catch{
        alert('Cannot connect to stock analysis server. Is it running?')
        return
    }

    if(!response.ok){
        alert('There was a problem getting the analysis for your stock!')
        return
    }

    const data=await response.json()
    document.getElementById('stock-analysis-dashboard-data').innerHTML=
        `<pre>${JSON.stringify(data,null,2)}</pre>`
}
