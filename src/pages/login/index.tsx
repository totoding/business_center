import { useState } from "react";


function LoginForm() {
  const [loginMode, setLoginMode] = useState<"password" | "qrCode">("password");

  return (
    <div>
      <h2 className="text-2xl text-[#262626] py-1">欢迎使用</h2>
      { loginMode === "password" ? 
      (
        <div className="mb-4 text-sm text-[#8c8c8c] cursor-pointer" onClick={() => setLoginMode("qrCode")}>
          使用扫码登录  &gt;
        </div>
      ) : (
        <div className="mb-4 text-sm text-[#8c8c8c] cursor-pointer" onClick={() => setLoginMode("password")}>
          使用密码登录  &gt;
        </div>
        )
      }
      <div className="space-y-4">
        <input
          type="text"
          placeholder="用户名"
          className="w-full p-3 text-white border rounded-lg bg-white/10 backdrop-blur-sm border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
        />
        <input
          type="password"
          placeholder="密码"
          className="w-full p-3 text-white border rounded-lg bg-white/10 backdrop-blur-sm border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
        />
        <button className="w-full p-3 font-medium text-white transition-all duration-200 border rounded-lg bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30">
          登录
        </button>
      </div>
    </div>
  )
}

export default function Login() {
  return (
    <div className="
      flex 
      items-center 
      justify-center 
      w-full h-screen 
      bg-[url('/src/assets/images/login-bg.png')] 
      bg-cover 
      bg-center 
      bg-no-repeat">
      <div className="
      w-[1000px] h-[580px] 
      backdrop-blur-md 
      bg-white/20 
      border border-white/30 
      rounded-xl 
      shadow-lg 
      p-22
      flex
    ">
        <div className="w-1/2"></div>
        <div className="w-1/2">
          <LoginForm />
        </div>
      </div>

    </div>
  );
}