import './App.css'; 
import RequestUpgradeUser from './components/Requestupgradeuser';

const App = () => {
    return (
        <div className='app'>   
            <div className="box"> 
            <form>
                <h1>แก้ไขสิทธิ์ผู้ใช้งาน</h1>
                <RequestUpgradeUser placeholder="ID USER"/><br/>
            </form>
            </div>
        </div>
    );
}

export default App;