import loadinglogo from '../images/loadinglogo.svg'

const LoadingPage = () => {
    return (
        <div className="loading-page">
        <h2 className='loading-h2'>Loading ...</h2>
        <img src={loadinglogo} className="App-logo" alt="logo" />
      </div>
    )
};

export default LoadingPage;