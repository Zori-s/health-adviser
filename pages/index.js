  /*
    This example requires some changes to your config:
    
    ```
    // tailwind.config.js
    module.exports = {
      // ...
      plugins: [
        // ...
        require('@tailwindcss/forms'),
      ],
    }
    ```
  */
  export default function Home() {

    return (
      <div className="w-screen h-screen flex">
        <img src="Doctor.png" className="w-[calc(60%)] h-full object-cover hidden md:block" />
      <div className="w-full  md:w-[calc(40%)] bg-[#8AAEB1] flex flex-col ">
        
          <form id="login-form" action="/api/login" className="max-w-[320px] w-full p-0 mt-2 mx-auto">
            <div>
              <button className=" text-blue-900 font-bold justify-end">Бүртгэл үүсгэх</button>
              </div>
              <div className="mt-40">
                <h4 className="text-1.5xl text-white font-normal" >Тавтай морил</h4>
                <h2 className="text-4xl text-white font-sans ">Та нтэрч орно уу</h2>
                <div>
                  <input id="username" className="w-full bg-gray-200 mt-2 p-1 focus: border-gray-400 focus:bg-white focus:outline-none" type="text" placeholder="Нэвтрэх нэр" />
                </div>
                <div>
                  <input id="password" className="w-full bg-gray-200 mt-2 p-1 focus: border-gray-400 focus:bg-white focus:outline-none" type="password" placeholder="Нууц үг" />
                </div>

                <div>
                  <button className="w-full my-5 py-2 text-white bg-[#303E53]">Нэвтрэх</button>
                </div>
              </div>
          </form>
        
      </div>
      </div>
    );
  }
