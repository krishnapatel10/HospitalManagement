import axios from "axios"

function Signup() {



    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = {
            Name: e.target[1].value,
            email:e.target[2].value,
            password:e.target[3].value,
        }

       let res = await axios.post("http://localhost:5500/api/user/signup",data)

        console.log(res.data);
        alert("Signup Successful!");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                />

                <input
                    type="email"
                    placeholder="Email"
                />

                <input
                    type="password"
                    placeholder="Password"
                />

                <button>Signup</button>
            </form>
        </>
    );
}

export default Signup;
