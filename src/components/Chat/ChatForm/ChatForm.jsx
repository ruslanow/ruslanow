import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";

const ChatForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <Field component={"input"} name={"newMessageBody"} validate={required} placeholder="Введите текст сообщения..."/>
            <button>Send</button>
        </form>
    )
}


const ChatReduxForm = reduxForm({form: 'send-message-form'})(ChatForm)


export default ChatReduxForm
