import { createContext } from "react";

export const postlist=createContext([]);
const Postlistprovider=(props)=>{
    return (
        <postlist.Provider value={[]}>
            {props.children}
        </postlist.Provider>
    );

}
export default postlistprovider;