// import '../styles/A.module.css'

export const Button = ({text, type='button', className, onClick}) => {
    const newClassName = className + " btn"
    return <input onClick={onClick} className={newClassName} type={type} value={text}/>
}




