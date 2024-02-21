function ProfilePicture(){
    const imgUrl = './src/assets/profile.jpg';
    const handleClick=(e)=> e.target.style.display = "none"

    return( <img onClick={(e)=>handleClick(e)} className="img" src={imgUrl}></img>

    )

}
export default ProfilePicture;