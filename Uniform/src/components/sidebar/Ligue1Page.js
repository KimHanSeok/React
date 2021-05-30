import './Ligue1Page.css';
import Item from './Item';
import {ItemData} from './ItemData';

const Ligue1Page = () => {
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
                {itemDatas[4].map((ligue1Datas) => <Item
                    key = {cnt++} 
                    _id = {ligue1Datas._id}
                    name = {ligue1Datas.name}
                    price = {ligue1Datas.price}
                    img = {ligue1Datas.img}
                    detail = {ligue1Datas.details}
                    />)}
            </div>
        </>
    )
};

export default Ligue1Page;