export default function TextImput({label, id, ...props}){
    return(
        <div className="flex flex-col gap-1 my-2">
            <label className="text-slate-100 front-semibold" htmlFor={id}>{label}</label>
            <input type="text"{...props} id={id} className="bg-slate-800 rouded p-2 outline-none focus:ring-pink-600 focus:right-1"/>
        </div>
    )
}