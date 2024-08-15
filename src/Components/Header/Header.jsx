import profile from "../../assets/images/profile.png"
const Header = () => {
    return (
        <div className="flex items-center justify-between mt-10 border-b-2 p-3">
            <h1 className="text-4xl font-medium">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;