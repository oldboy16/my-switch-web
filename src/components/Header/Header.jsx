import './Header.css'
import profile from './assets/image/profile-img.png'
export function Header({data}){
    console.log(data);
    return(
        <header>
            <img src={profile} alt="" />
        </header>
    )
}