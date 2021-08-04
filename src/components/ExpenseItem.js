import './ExpenseItem.css';
import './ExpenseDate';
import ExpenseDate from "./ExpenseDate";
import './Card.css'
import Card from "./Card";
function ExpenseItem(props){

    return (
        <Card className="expense-item">
       <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>
    </Card>);
}

export default ExpenseItem; //need to export the file so its usable outside of its home file