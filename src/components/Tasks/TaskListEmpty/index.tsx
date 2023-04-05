export default function TaskListEmpty() {
    return <div className="flex flex-col justify-center items-center w-full grow border-2 border-dashed border-[#437EB1] text-[#437EB1] text-center lg:text-[20px] md:text-[12px] text-[10px]">
        <img className="w-[60px] h-[60px] w-[60px] h-[60px]" src="/folder-icon.png" alt="folder-icon" />
        <p className="font-bold">A sua lista de tarefas está vazia</p>
        <p>Adicione uma nova tarefa e comece a organizar o seu dia</p>
    </div>
}