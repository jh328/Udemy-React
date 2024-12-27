export default function Section({title , children, ...props}){
    return(
    <seciton{...props}>
        <h2>{title}</h2>
        {children}
   </seciton>
    )
}