import { Component } from "react";
import './Cardlist.css'


class Cardlist extends Component{
    render(){
        const {monsters} = this.props;
        return(
            <div className="cart-list">
                {monsters.map((monster) => {
                    const {name,email,id} = monster;
                    return(
                        <div className="cart-container" key={id}>
                          <img 
                            alt={'monster ${name}'}
                            src={`https://robohash.org/${id}?set=set2&size=180x180`}
                          />
                         <h2>{name}</h2>
                         <p>{email}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Cardlist;