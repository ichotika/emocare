import MainBtn from "../base/MainBtn";

function NoResultChart({ mainTitle }) {
    return (
        <div className="grid-row-2 grid gap-4 rounded-lg bg-white text-center text-lg">
            <h1 className="m-1 font-bold">{mainTitle}</h1>
            <div className="p-1">
                <p className="pb-4 font-bold text-slate-400">No result</p>
                <MainBtn
                    buttontext={"Take Assessment"}
                    bgColor={"bg-blue-700"}
                    textColor={"text-white"}
                />
            </div>
        </div>
    );
}

export default NoResultChart;
