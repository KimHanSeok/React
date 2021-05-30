import './Matchworn.css';
import Item from './Item';
import {ItemData} from './ItemData';

const Matchworn = () => {
    const itemDatas = ItemData;
    let cnt = 0;

    return (
        <>
            <div className="premier_title" >
                <div className="premier_title_text_box">
                    <h1>PREMIER LEAGUE</h1>
                    <p>
                        REP1ER's PREMIER LEAGUE<br />
                    </p>
                </div>
            </div>

            <div className = "premier_grid">
                {itemDatas[11].map((matchwornDatas) => <Item
                    key = {cnt++} 
                    _id = {matchwornDatas._id}
                    name = {matchwornDatas.name}
                    price = {matchwornDatas.price}
                    img = {matchwornDatas.img}
                    detail = {matchwornDatas.details}
                    />)}
            </div>
        </>
    )
};

export default Matchworn;