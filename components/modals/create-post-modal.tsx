import { InputKit } from "../kit/input";

// interface ICreateModal {
//     id:number;
//     title: string;
//     body: string;
//     tags?:string[];
// }


export const CreatePostModal = () => {
    return (
        <form>
        <InputKit name="id"/>
        <InputKit name="title"/>
        <InputKit name="body"/>
        </form>
    )
}