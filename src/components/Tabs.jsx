import {Fragment} from "react"
export default function Tabs({children, buttons}){
    return
    <>
    <menu>
        {buttons}
    </menu>
    {children}
    </>
}