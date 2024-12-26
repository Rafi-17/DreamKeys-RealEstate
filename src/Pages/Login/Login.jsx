
const Login = () => {
    return (
        <div className="min-h-[calc(100vh-190px)] bg-[#f4f3ef] rounded-xl p-10 mt-12">
            <div className="flex justify-evenly items-center">
                <div className=" w-[350px]">
                    <h2 className="text-7xl text-[#bc986b] font-semibold">Welcome <br />Back...</h2>
                </div>
                <div className="bg-[#bc986b] text-center  w-[400px] mt-10 rounded-l-[80px] px-12 py-24">
                    <h2 className="text-3xl font-bold text-white mb-8">Login Here</h2>
                    <form className="gap-2">
                        <input className="mb-4 w-[300px] py-2 rounded-lg bg-[#f9e0c3] border-white border placeholder:text-gray-500 px-4 placeholder:text-sm" placeholder="Email" type="email" name="email"/><br />
                        <input className="w-[300px] py-2 rounded-lg bg-[#f9e0c3] border-white border placeholder:text-gray-500 px-4 placeholder:text-sm" placeholder="Password" type="password" name="password"/><br />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;