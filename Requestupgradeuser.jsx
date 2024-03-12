import './form.css';

const RequestUpgradeUser = (props) => {
    return (
        <div className="RequestUpgradeUser">
            <div className='h2'>
                <h2>ข้อมูลสิทธิ์ปัจจุบัน</h2>
            </div>
            <div className='p'>
            <p>รหัสพนักงาน : 123xxxxxxxx</p>
            <p>ชื่อ-นามสกุล : นายเอ รักสงบ</p>
            <p>สังกัด : xxx</p>
            <p>สิทธิ์ : ดูได้อย่างเดียว</p>
            </div>
             <div className="user-department">
                    <select className="list2">
                    <option  value="" disabled selected hidden classname='hl'>กำหนดสิทธิ์ผู้ใช้</option>
                    <option value="">มีสิทธิ์ดูหน้าเว็บได้อย่างเดียว</option>
                    <option value="">มีสิทธิ์ดูหน้าเว็บได้/export ข้อมูลดิบได้</option>
                    <option value="">มีสิทธิ์ดูหน้าเว็บได้/export ข้อมูลดิบได้/และสามารถใช้ฟังก์ชัน AI</option>
                    <option value="">มีสิทธิ์ดูหน้าเว็บได้/เพิ่มข้อมูลหม้อแปลงได้</option>
                    <option value="">มีสิทธิ์ดูหน้าเว็บได้/เพิ่มข้อมูลหม้อแปลงได้/export ข้อมูลดิบได้</option>
                    <option value="">มีสิทธิ์ดูหน้าเว็บได้/เพิ่มข้อมูลหม้อแปลงได้/ใช้ฟังก์ชัน AI </option>
                    <option value="">มีสิทธิ์ดูหน้าเว็บได้/เพิ่มข้อมูลหม้อแปลงได้/export ข้อมูลดิบได้/ใช้ฟังก์ชัน AI </option>
                    <option value="">มีสิทธิ์ดูหน้าเว็บได้/เพิ่มข้อมูลหม้อแปลงได้/export ข้อมูลดิบได้/ใช้ฟังก์ชัน AI/permit สิทธิ์ editor ได้</option>
                    <option value="admin">developer</option>
                    </select>
             </div>
             <button type="submit" className="send-button">ยืนยัน</button>
             <button type="cancel" className="cancel-button">ยกเลิก</button>
        </div>
    )
}

export default RequestUpgradeUser