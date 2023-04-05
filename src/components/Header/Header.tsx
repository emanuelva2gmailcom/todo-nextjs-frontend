export default function Header() {
  return (
    <div className="flex flex-row px-[40px] py-[34px] w-full h-auto border-4 border-b-indigo-500 ">
      <div className="w-[127px] h-[55px]">
        <img className="h-full w-auto" src="/logo-inovax.png" alt="logo" />
      </div>
      <div className="flex flex-col">
        <p className="font-black text-[20px]">TO DO LIST</p>
        <p className="text-[16px]">Teste de capacidade técnica</p>
      </div>
    </div>
  );
}
